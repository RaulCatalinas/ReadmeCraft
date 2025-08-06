// React
import { useState } from "react"

// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"
import { useFormStore } from "@/src/stores/form"

// Utils
import { generateReadmePreview } from "@/src/utils/readme-generator"

export default function ButtonSaveDraft() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)
  const selectedTemplate = useFormStore(state => state.selectedTemplate)
  const formValues = useFormStore(state => state.formValues)

  const [isSaving, setIsSaving] = useState(false)

  const handleSaveDraft = () => {
    if (isSaving) return

    setIsSaving(true)

    try {
      // Generate current README content
      const readmeContent = generateReadmePreview(selectedTemplate, formValues)

      // Save to localStorage
      const success = saveDraftToStorage(
        selectedTemplate,
        formValues,
        readmeContent
      )

      if (success) {
        console.log("Draft saved successfully")
        // Here you might want to show a success toast
      } else {
        console.error("Failed to save draft")
        // Here you might want to show an error toast
      }
    } catch (error) {
      console.error("Failed to save draft:", error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <button
      className={`
        px-4 py-2 rounded-lg transition-colors
        ${isSaving ? "opacity-50 cursor-not-allowed" : ""}
        ${
          isDarkModeActive
            ? "text-gray-300 hover:bg-gray-800 hover:text-white"
            : "text-gray-700 hover:bg-gray-100"
        }
      `}
      onClick={handleSaveDraft}
      disabled={isSaving}
    >
      {isSaving ? "Saving..." : "Save Draft"}
    </button>
  )
}
