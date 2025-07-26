// Components
import FormProjectInfo from "../forms/FormProjectInfo"

// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"

export default function FormPanel() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  return (
    <div
      className={`
        w-1/2 border-r flex flex-col
        ${
          isDarkModeActive
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }
      `}
    >
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <h2
            className={`
              text-lg font-medium mb-6 
              ${isDarkModeActive ? "text-white" : "text-gray-900"}
            `}
          >
            Project Information
          </h2>

          <FormProjectInfo />
        </div>
      </div>
    </div>
  )
}
