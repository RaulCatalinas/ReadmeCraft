import { type RefObject, useCallback, useEffect, useState } from "react"

interface UseScrollIndicatorProps {
  containerRef: RefObject<HTMLDivElement | null>
  threshold?: number
  amount?: number
}

export function useScrollIndicator({
  containerRef,
  threshold = 10,
  amount = 200
}: UseScrollIndicatorProps) {
  const [showIndicator, setShowIndicator] = useState(false)

  const checkScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const { scrollTop, scrollHeight, clientHeight } = container
    const hasMoreContent = scrollHeight > clientHeight
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - threshold

    setShowIndicator(hasMoreContent && !isAtBottom)
  }, [containerRef, threshold])

  const scrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: amount,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

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
  }, [containerRef, threshold, checkScroll])

  return {
    showIndicator,
    scrollDown
  }
}
