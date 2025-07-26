import { useDarkModeStore } from "@/src/stores/dark-mode"

export default function TemplateSelector() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  return (
    <div className="flex items-center space-x-4">
      <select
        className={`
          px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
            ${
              isDarkModeActive
                ? "bg-gray-800 border-gray-600 text-white hover:border-gray-500"
                : "bg-white border-gray-300 text-gray-900 hover:border-gray-400"
            }
        `}
      >
        <option>Web Application</option>
        <option>CLI Tool</option>
        <option>Library</option>
        <option>API Service</option>
      </select>
    </div>
  )
}
