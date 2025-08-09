// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"

// React
import type { MouseEventHandler } from "react"

interface SecondaryButtonProps {
  className?: string
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  text: string
}

export default function BaseSecondaryButton({
  className,
  disabled,
  onClick,
  text
}: SecondaryButtonProps) {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg transition-colors hover:cursor-pointer
        ${
          isDarkModeActive
            ? "text-white bg-gray-800 hover:bg-gray-700"
            : "text-gray-700 bg-gray-200 hover:bg-gray-100"
        }
        ${className}
      `}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
