// React
import { useState } from "react"

// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"
import { useFormStore } from "@/src/stores/form"

// Utils
import { saveDraftToStorage } from "@/src/utils/export-utils"
import { generateReadmePreview } from "@/src/utils/readme-generator"

export default function ButtonSaveDraft() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)
  const selectedTemplate = useFormStore(state => state.selectedTemplate)
  const formValues = useFormStore(state => state.formValues)

  const [isSaving, setIsSaving] = useState(false)

  const handleSaveDraft = async () => {
    if (isSaving) return

    setIsSaving(true)

    try {
      // Generate current README content
      const readmeContent = await generateReadmePreview(
        selectedTemplate,
        formValues
      )

      // Save to localStorage
      const success = await saveDraftToStorage(
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
        px-4 py-2 rounded-lg transition-colors hover:cursor-pointer
        ${isSaving ? "opacity-50 cursor-not-allowed" : ""}
        ${
          isDarkModeActive
            ? "text-white bg-gray-800 hover:bg-gray-700"
            : "text-gray-700 bg-gray-100 hover:"
        }
      `}
      onClick={handleSaveDraft}
      disabled={isSaving}
    >
      {isSaving ? "Saving..." : "Save Draft"}
    </button>
  )
}
