// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"

// Icons
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"

// Wailsjs
import { types } from "@/wailsjs/models"
import { SetPreference } from "@/wailsjs/user_preferences/userPreferencesGenerator"

export default function ButtonToggleDarkMode() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)
  const toggleDarkModeActive = useDarkModeStore(
    state => state.toggleDarkModeActive
  )

  const handleToggleDarkModeActive = async () => {
    toggleDarkModeActive()

    await SetPreference(
      types.UserPreferencesKeys.IS_DARK_MODE_ACTIVE,
      !isDarkModeActive
    )
  }

  return (
    <button
      onClick={handleToggleDarkModeActive}
      className={`
        p-2 rounded-lg transition-colors hover:cursor-pointer
        ${
          isDarkModeActive
            ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
        }
      `}
      title={isDarkModeActive ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkModeActive ? (
        <IconSunFilled size={20} />
      ) : (
        <IconMoonFilled size={20} />
      )}
    </button>
  )
}
