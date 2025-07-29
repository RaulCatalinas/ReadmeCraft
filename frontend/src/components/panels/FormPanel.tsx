// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"

// React
import { useRef } from "react"

// Components
import DynamicForm from "../forms/DinamicForm"
import ScrollIndicator from "../indicators/ScrollIndicator"

export default function FormPanel() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className={`
        w-1/2 border-r flex flex-col relative
        ${
          isDarkModeActive
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }
      `}
    >
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
        <div className="p-6">
          <h2
            className={`
              text-lg font-medium mb-6 
              ${isDarkModeActive ? "text-white" : "text-gray-900"}
            `}
          >
            Project Information
          </h2>

          <DynamicForm />
        </div>
      </div>

      <ScrollIndicator containerRef={scrollContainerRef} />
    </div>
  )
}
