import { useReadyToExportStore } from "@/src/stores/ready-to-export"

export default function ButtonExportReadme() {
  const isReadyToExport = useReadyToExportStore(state => state.isReadyToExport)

  const handleExport = () => {
    console.log("Expoerting README.md")
  }

  return (
    <button
      className={`
        px-6 py-2 bg-blue-600 text-white rounded-lg 
        hover:bg-blue-700 transition-colors font-medium 
        ${!isReadyToExport ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer"}
      `}
      disabled={!isReadyToExport}
      onClick={handleExport}
    >
      Export README
    </button>
  )
}
