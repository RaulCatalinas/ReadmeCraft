package user_preferences

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"

	"github.com/RaulCatalinas/ReadmeCraft/internal/constants"
	"github.com/RaulCatalinas/ReadmeCraft/internal/types"
)

type userPreferencesGenerator struct {
	preferencesHandlers map[types.UserPreferencesKeys]func(interface{}) error
}

func NewUserPreferencesGenerator() *userPreferencesGenerator {
	upg := &userPreferencesGenerator{}
	upg.initPreferencesHandlers()
	return upg
}

var currentPreferences types.UserPreferences
var configPath string

func InitPreferences() error {
	userConfigDir, err := os.UserConfigDir()
	if err != nil {
		return err
	}
	configPath = filepath.Join(userConfigDir, constants.USER_PREFERENCES_FILE)

	if err := loadPreferences(); err != nil {
		currentPreferences = constants.DEFAULT_USER_PREFERENCES
		return SavePreferences()
	}

	return nil
}

func loadPreferences() error {
	data, err := os.ReadFile(configPath)
	if err != nil {
		return err
	}

	return json.Unmarshal(data, &currentPreferences)
}

func SavePreferences() error {
	data, err := json.MarshalIndent(currentPreferences, "", "  ")
	if err != nil {
		return err
	}

	return os.WriteFile(configPath, data, 0644)
}

func (upg *userPreferencesGenerator) GetPreferences() types.UserPreferences {
	return currentPreferences
}

func (upg *userPreferencesGenerator) initPreferencesHandlers() {
	upg.preferencesHandlers = map[types.UserPreferencesKeys]func(interface{}) error{
		types.IsDarkModeActivePreference: func(value interface{}) error {
			boolValue, ok := value.(bool)
			if !ok {
				return fmt.Errorf("value for darkModeActive must be boolean")
			}
			currentPreferences.IsDarkModeActive = boolValue
			return nil
		},
	}
}

func (upg *userPreferencesGenerator) SetPreference(
	prefType types.UserPreferencesKeys,
	value interface{},
) error {
	handler, exists := upg.preferencesHandlers[prefType]
	if !exists {
		return fmt.Errorf("unknown preference type: %s", prefType)
	}

	return handler(value)
}
