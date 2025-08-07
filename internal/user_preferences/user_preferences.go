package user_preferences

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"

	appLogging "github.com/RaulCatalinas/ReadmeCraft/internal/app_logging"
	"github.com/RaulCatalinas/ReadmeCraft/internal/constants"
	"github.com/RaulCatalinas/ReadmeCraft/internal/types"
	"github.com/RaulCatalinas/ReadmeCraft/internal/utils"
)

var loggerManagerGenerator = appLogging.NewLoggingManagerGenerator()

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

func InitPreferences() {
	userConfigDir, err := os.UserConfigDir()

	if err != nil {
		loggerManagerGenerator.WriteLog(
			types.LOG_LEVEL_ERROR,
			fmt.Sprintf(
				"Failed to get user config directory: %s",
				err.Error(),
			),
		)

		return
	}

	appConfigDir := filepath.Join(userConfigDir, constants.APP_CONFIG_DIR)

	if !utils.CreateDirectoryIfNotExist(appConfigDir) {
		loggerManagerGenerator.WriteLog(
			types.LOG_LEVEL_ERROR,
			fmt.Sprintf(
				"Failed to create app config directory: %s",
				appConfigDir,
			),
		)

		return
	}

	configPath = filepath.Join(appConfigDir, constants.USER_PREFERENCES_FILE)

	if err := loadPreferences(); err != nil {
		currentPreferences = constants.DEFAULT_USER_PREFERENCES

		SavePreferences()

		return
	}
}

func loadPreferences() error {
	data, err := os.ReadFile(configPath)
	if err != nil {
		loggerManagerGenerator.WriteLog(
			types.LOG_LEVEL_ERROR,
			fmt.Sprintf(
				"Failed to read user preferences file: %s, error: %s",
				configPath,
				err.Error(),
			),
		)
	}

	return json.Unmarshal(data, &currentPreferences)
}

func SavePreferences() {
	data, err := json.MarshalIndent(currentPreferences, "", "  ")
	if err != nil {
		loggerManagerGenerator.WriteLog(
			types.LOG_LEVEL_ERROR,
			fmt.Sprintf(
				"Failed to marshal user preferences: %s",
				err.Error(),
			),
		)
		return
	}

	os.WriteFile(configPath, data, 0644)
}

func (upg *userPreferencesGenerator) GetPreferences() types.UserPreferences {
	return currentPreferences
}

func (upg *userPreferencesGenerator) initPreferencesHandlers() {
	upg.preferencesHandlers = map[types.UserPreferencesKeys]func(interface{}) error{
		types.IsDarkModeActivePreference: func(value interface{}) error {
			boolValue, ok := value.(bool)
			if !ok {
				loggerManagerGenerator.WriteLog(
					types.LOG_LEVEL_WARNING,
					"Value for darkModeActive must be boolean",
				)

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
		loggerManagerGenerator.WriteLog(
			types.LOG_LEVEL_ERROR,
			fmt.Sprintf("Unknown preference type: %s", prefType),
		)

		return fmt.Errorf("unknown preference type: %s", prefType)
	}

	return handler(value)
}
