import { useDarkModeStore } from "@/src/stores/dark-mode"
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"

export default function ButtonToggleDarkMode() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)
  const toggleDarkModeActive = useDarkModeStore(
    state => state.toggleDarkModeActive
  )

  return (
    <button
      onClick={toggleDarkModeActive}
      className={`
        p-2 rounded-lg transition-colors ${
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
