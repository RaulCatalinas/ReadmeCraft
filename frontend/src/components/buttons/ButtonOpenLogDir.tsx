// Wailsjs
import { OpenLogDirectory } from "@/wailsjs/utils/utilsGenerator"

// Components
import BaseSecondaryButton from "./BaseSecondaryButton"

export default function ButtonOpenLogDir() {
  return (
    <BaseSecondaryButton onClick={OpenLogDirectory} text="Open log directory" />
  )
}
