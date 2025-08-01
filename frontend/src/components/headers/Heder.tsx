// Components
import ButtonToggleDarkMode from "../buttons/ButtonToggleDarkMode"
import TemplateSelector from "../selectors/TemplateSelector"

// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"

export default function Header() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  return (
    <header
      className={`
        h-16 
        ${
          isDarkModeActive
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-200"
        } 
        border-b flex items-center justify-between px-6
      `}
    >
      <TemplateSelector />
      <ButtonToggleDarkMode />
    </header>
  )
}
