// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"
import { useFormStore } from "@/src/stores/form"

//Templates
import configData from "@/src/templates/config.json"

// Types
import { TemplateType } from "@/src/types/form"

export default function TemplateSelector() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)
  const { selectedTemplate, setSelectedTemplate } = useFormStore()

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplate(e.target.value as TemplateType)
  }

  return (
    <div className="flex items-center space-x-4">
      <label
        htmlFor="template-select"
        className={`
          text-sm font-medium
          ${isDarkModeActive ? "text-gray-300" : "text-gray-700"}
        `}
      >
        Template:
      </label>

      <select
        id="template-select"
        value={selectedTemplate}
        onChange={handleTemplateChange}
        className={`
          px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          transition-colors
          ${
            isDarkModeActive
              ? "bg-gray-800 border-gray-600 text-white hover:border-gray-500"
              : "bg-white border-gray-300 text-gray-900 hover:border-gray-400"
          }
        `}
      >
        {Object.entries(configData.templates).map(([key, template]) => (
          <option key={key} value={key}>
            {template.name}
          </option>
        ))}
      </select>
    </div>
  )
}
