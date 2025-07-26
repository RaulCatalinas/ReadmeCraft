import { useDarkModeStore } from "@/src/stores/dark-mode"

export default function ButtonSaveDraft() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  const handleSaveDraft = () => {
    console.log("Saving draft")
  }

  return (
    <button
      className={`
        px-4 py-2 rounded-lg transition-colors 
        ${
          isDarkModeActive
            ? "text-gray-300 hover:bg-gray-800 hover:text-white"
            : "text-gray-700 hover:bg-gray-100"
        }
      `}
      onClick={handleSaveDraft}
    >
      Save Draft
    </button>
  )
}
