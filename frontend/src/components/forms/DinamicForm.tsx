// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"
import { useFormStore } from "@/src/stores/form"

// Components
import { TextAreaInput, TextInput, UrlInput } from "./FormFields"

// Templates
import configData from "@/src/templates/config.json"

interface FieldConfig {
  name: string
  label: string
  type: string
  required: boolean
  placeholder?: string
  help?: string
  default?: string
  rows?: number
}

interface TemplateConfig {
  name: string
  icon: string
  description: string
  fields: FieldConfig[]
}

export default function DynamicForm() {
  const { selectedTemplate } = useFormStore()
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  // Get template configuration
  const templateConfig = configData.templates[
    selectedTemplate
  ] as TemplateConfig

  const renderField = (field: FieldConfig) => {
    const baseProps = {
      key: field.name,
      name: field.name,
      label: field.label,
      required: field.required,
      placeholder: field.placeholder ?? "",
      help: field.help ?? ""
    }

    switch (field.type) {
      case "text":
        return <TextInput {...baseProps} />

      case "url":
        return <UrlInput {...baseProps} />

      case "textarea":
        return <TextAreaInput {...baseProps} rows={field.rows ?? 4} />

      default:
        console.warn(`Unknown field type: ${field.type}`)
        return <TextInput {...baseProps} />
    }
  }

  return (
    <div className="space-y-1">
      {/* Template info */}
      <div
        className={`
          mb-6 p-4 rounded-lg border
          ${
            isDarkModeActive
              ? "bg-blue-900/20 border-blue-800"
              : "bg-blue-50 border-blue-200"
          }
        `}
      >
        <div className="flex items-center space-x-2 mb-2">
          <span
            className={`
              font-medium
              ${isDarkModeActive ? "text-blue-400" : "text-blue-600"}
            `}
          >
            {templateConfig.name}
          </span>
        </div>
        <p
          className={`
            text-sm
            ${isDarkModeActive ? "text-blue-300" : "text-blue-700"}
          `}
        >
          {templateConfig.description}
        </p>
      </div>

      {/* Dynamic fields */}
      <form className="space-y-1">
        {templateConfig.fields.map(renderField)}
      </form>
    </div>
  )
}
