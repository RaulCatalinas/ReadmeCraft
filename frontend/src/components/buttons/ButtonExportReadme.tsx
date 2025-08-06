// React
import { useState } from "react"

// Stores
import { useFormStore } from "@/src/stores/form"
import { useReadyToExportStore } from "@/src/stores/ready-to-export"

// Utils
import { generateReadme } from "@/src/utils/readme-generator"

// Wailsjs
import { SaveFile } from "@/wailsjs/main/App"

export default function ButtonExportReadme() {
  const isReadyToExport = useReadyToExportStore(state => state.isReadyToExport)
  const selectedTemplate = useFormStore(state => state.selectedTemplate)
  const formValues = useFormStore(state => state.formValues)

  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    if (!isReadyToExport || isExporting) return

    setIsExporting(true)

    try {
      // Generate the final README content
      const readmeContent = generateReadme(selectedTemplate, formValues)

      // Export the file
      await SaveFile(readmeContent)

      console.log("README exported successfully")
    } catch (error) {
      console.error("Failed to export README:", error)
      // Here you might want to show a toast notification or error message
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <button
      className={`
        px-6 py-2 bg-blue-600 text-white rounded-lg 
        hover:bg-blue-700 transition-colors font-medium 
        ${
          !isReadyToExport || isExporting
            ? "opacity-50 cursor-not-allowed"
            : "hover:cursor-pointer"
        }
      `}
      disabled={!isReadyToExport || isExporting}
      onClick={handleExport}
    >
      {isExporting ? "Exporting..." : "Export README"}
    </button>
  )
}
