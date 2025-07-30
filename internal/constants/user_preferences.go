package constants

import "github.com/RaulCatalinas/ReadmeCraft/internal/types"

var DEFAULT_USER_PREFERENCES = types.UserPreferences{
	IsDarkModeActive: false,
}

const USER_PREFERENCES_FILE = "readmecraft_user_preferences.json"
