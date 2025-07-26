// Components
import ButtonExportReadme from "../buttons/ButtonExportReadme"
import ButtonSaveDraft from "../buttons/ButtonSaveDraft"

// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"
import { useReadyToExportStore } from "@/src/stores/ready-to-export"

export default function Footer() {
  const isReadyToExport = useReadyToExportStore(state => state.isReadyToExport)
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  return (
    <footer
      className={`h-16 border-t flex items-center justify-between px-6 
        ${
          isDarkModeActive
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-200"
        }
      `}
    >
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <span className={isDarkModeActive ? "text-gray-400" : "text-gray-500"}>
          {isReadyToExport ? "Ready to export" : "Not Ready to export"}
        </span>
        <div
          className={`
            w-2 h-2 
            ${isReadyToExport ? "bg-green-500" : "bg-red-500"} 
            rounded-full
          `}
        />
      </div>

      <div className="flex items-center space-x-3">
        <ButtonSaveDraft />
        <ButtonExportReadme />
      </div>
    </footer>
  )
}
