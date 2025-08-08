// Third-Paty libaries
import { IconArrowDown } from "@tabler/icons-react"

// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"

// React
import { useScrollIndicator } from "@/src/hooks/use-scroll-indicator"

interface ScrollIndicatorProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

interface ScrollIndicatorProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export default function ScrollIndicator({
  containerRef
}: ScrollIndicatorProps) {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  const { showIndicator, scrollDown } = useScrollIndicator({
    containerRef
  })

  if (!showIndicator) return null

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
      <button
        onClick={scrollDown}
        className={`
          p-2 rounded-full shadow-lg transition-all duration-300 
          hover:scale-110 border
          ${
            isDarkModeActive
              ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
              : "bg-white hover:bg-gray-50 text-gray-600"
          }
          ${isDarkModeActive ? "border-gray-600" : "border-gray-200"}
        `}
        aria-label="Scroll down for more content"
      >
        <IconArrowDown
          width={20}
          height={20}
          className={`
            transition-colors
            ${isDarkModeActive ? "stroke-gray-400" : "stroke-gray-500"}
          `}
        />
      </button>
    </div>
  )
}
