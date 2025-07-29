import { useDarkModeStore } from "@/src/stores/dark-mode"
import { useFormStore } from "@/src/stores/form"

interface BaseFieldProps {
  name: string
  label: string
  required?: boolean
  placeholder?: string
  help?: string
}

// Text Input Component
export const TextInput: React.FC<BaseFieldProps> = ({
  name,
  label,
  required = false,
  placeholder = "",
  help = ""
}) => {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)
  const { getFieldValue, setFieldValue, validateField, errors } = useFormStore()

  const value = getFieldValue(name)
  const error = errors[name]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setFieldValue(name, newValue)
    validateField(name, newValue, required)
  }

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className={`
          block text-sm font-medium mb-2
          ${isDarkModeActive ? "text-gray-300" : "text-gray-700"}
        `}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        id={name}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`
          w-full px-3 py-2 border rounded-lg text-sm transition-colors
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          ${
            isDarkModeActive
              ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
          }
        `}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {help && !error && (
        <p
          className={`
            mt-1 text-xs 
            ${isDarkModeActive ? "text-gray-400" : "text-gray-600"}
          `}
        >
          {help}
        </p>
      )}
    </div>
  )
}

// URL Input Component
export const UrlInput: React.FC<BaseFieldProps> = ({
  name,
  label,
  required = false,
  placeholder = "",
  help = ""
}) => {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)
  const { getFieldValue, setFieldValue, validateField, errors } = useFormStore()

  const value = getFieldValue(name)
  const error = errors[name]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setFieldValue(name, newValue)
    validateField(name, newValue, required)
  }

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className={`
          block text-sm font-medium mb-2
          ${isDarkModeActive ? "text-gray-300" : "text-gray-700"}
        `}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        id={name}
        type="url"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`
          w-full px-3 py-2 border rounded-lg text-sm transition-colors
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          ${
            isDarkModeActive
              ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
          }
        `}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {help && !error && (
        <p
          className={`
            mt-1 text-xs 
            ${isDarkModeActive ? "text-gray-400" : "text-gray-600"}
          `}
        >
          {help}
        </p>
      )}
    </div>
  )
}

// Textarea Input Component
export const TextAreaInput: React.FC<BaseFieldProps & { rows?: number }> = ({
  name,
  label,
  required = false,
  placeholder = "",
  help = "",
  rows = 4
}) => {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)
  const { getFieldValue, setFieldValue, validateField, errors } = useFormStore()

  const value = getFieldValue(name)
  const error = errors[name]

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setFieldValue(name, newValue)
    validateField(name, newValue, required)
  }

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className={`
          block text-sm font-medium mb-2
          ${isDarkModeActive ? "text-gray-300" : "text-gray-700"}
        `}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <textarea
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className={`
          w-full px-3 py-2 border rounded-lg text-sm transition-colors resize-vertical
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          ${
            isDarkModeActive
              ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
          }
        `}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {help && !error && (
        <p
          className={`
            mt-1 text-xs 
            ${isDarkModeActive ? "text-gray-400" : "text-gray-600"}
          `}
        >
          {help}
        </p>
      )}
    </div>
  )
}
