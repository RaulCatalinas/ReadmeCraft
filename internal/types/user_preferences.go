package types

type UserPreferencesKeys string

const (
	IsDarkModeActivePreference UserPreferencesKeys = "isDarkModeActive"
)

var AllUserPreferences = []struct {
	Value  UserPreferencesKeys
	TSName string
}{
	{IsDarkModeActivePreference, "IS_DARK_MODE_ACTIVE"},
}

type UserPreferences struct {
	IsDarkModeActive bool `json:"isDarkModeActive"`
}
