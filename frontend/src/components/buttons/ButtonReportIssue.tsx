// Sotores
import { useDarkModeStore } from "@/src/stores/dark-mode"

// Wailsjs
import { OpenIssueReport } from "@/wailsjs/main/App"

export default function ButtonReportIssue() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  return (
    <button
      onClick={OpenIssueReport}
      className={`
        px-4 py-2 rounded-lg transition-colors hover:cursor-pointer
        ${
          isDarkModeActive
            ? "text-white bg-gray-800 hover:bg-gray-700"
            : "text-gray-700 bg-gray-100 hover:"
        }
      `}
    >
      Report issue
    </button>
  )
}
