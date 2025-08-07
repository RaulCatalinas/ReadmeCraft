// React
import { useState } from "react"

// Stores
import { useFormStore } from "@/src/stores/form"

// Utils
import { saveDraftToStorage } from "@/src/utils/export-utils"
import { generateReadmePreview } from "@/src/utils/readme-generator"

// Components
import BaseSecondaryButton from "./BaseSecondaryButton"

export default function ButtonSaveDraft() {
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
    <BaseSecondaryButton
      className={isSaving ? "opacity-50 cursor-not-allowed" : ""}
      disabled={isSaving}
      onClick={handleSaveDraft}
      text={isSaving ? "Saving..." : "Save Draft"}
    />
  )
}
