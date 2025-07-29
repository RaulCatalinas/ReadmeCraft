// Third-Paty libaries
import { IconArrowDown } from "@tabler/icons-react"

// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"

// React
import { useEffect, useState } from "react"

interface ScrollIndicatorProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export default function ScrollIndicator({
  containerRef
}: ScrollIndicatorProps) {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)
  const [showIndicator, setShowIndicator] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const checkScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      const hasMoreContent = scrollHeight > clientHeight
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10

      setShowIndicator(hasMoreContent && !isAtBottom)
    }

    // Check initially
    checkScroll()

    // Add scroll listener
    container.addEventListener("scroll", checkScroll)

    // Add resize observer to check when content changes
    const resizeObserver = new ResizeObserver(checkScroll)
    resizeObserver.observe(container)

    return () => {
      container.removeEventListener("scroll", checkScroll)
      resizeObserver.disconnect()
    }
  }, [containerRef])

  const handleScrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 200,
        behavior: "smooth"
      })
    }
  }

  if (!showIndicator) return null

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
      <button
        onClick={handleScrollDown}
        className={`
          p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110
          ${
            isDarkModeActive
              ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
              : "bg-white hover:bg-gray-50 text-gray-600"
          }
          border
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
