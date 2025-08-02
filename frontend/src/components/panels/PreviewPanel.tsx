// React
import { useRef } from "react"

// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"

// Hooks
import { useReadmePreview } from "@/src/hooks/use-readme-preview"

// Components
import ScrollIndicator from "../indicators/ScrollIndicator"
import MarkdownRenderer from "../markdown/MarkdownRenderer"

export default function PreviewPanel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  const { readmeContent, isLoading, error } = useReadmePreview()

  return (
    <div
      className={`
        w-1/2 flex flex-col relative
        ${isDarkModeActive ? "bg-gray-900" : "bg-white"}
      `}
    >
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2
              className={`
                text-lg font-medium 
                ${isDarkModeActive ? "text-white" : "text-gray-900"}
              `}
            >
              Preview
            </h2>

            {error && (
              <div
                className={`
                  p-4 rounded-lg border
                  ${
                    isDarkModeActive
                      ? "bg-red-900/20 border-red-800 text-red-400"
                      : "bg-red-50 border-red-200 text-red-700"
                  }
                `}
              >
                <p className="font-medium">Preview Error</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            )}

            {/* Content */}
            {!isLoading && !error && (
              <div className="space-y-1">
                <MarkdownRenderer content={readmeContent} />
              </div>
            )}
          </div>
        </div>

        <ScrollIndicator containerRef={scrollContainerRef} />
      </div>
    </div>
  )
}
