import { create } from "zustand"

interface DarkModeState {
  isDarkModeActive: boolean
  toggleDarkModeActive: () => void
}

export const useDarkModeStore = create<DarkModeState>(set => ({
  isDarkModeActive: false,
  toggleDarkModeActive() {
    set(state => ({ isDarkModeActive: !state.isDarkModeActive }))
  }
}))
