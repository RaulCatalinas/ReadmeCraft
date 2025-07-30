// Third-Party libraries
import { create } from "zustand"

// WailsJS
import { GetPreferences } from "@/wailsjs/user_preferences/userPreferencesGenerator"

const { isDarkModeActive } = await GetPreferences()

interface DarkModeState {
  isDarkModeActive: boolean
  toggleDarkModeActive: () => void
}

export const useDarkModeStore = create<DarkModeState>(set => ({
  isDarkModeActive,
  toggleDarkModeActive() {
    set(state => ({ isDarkModeActive: !state.isDarkModeActive }))
  }
}))
