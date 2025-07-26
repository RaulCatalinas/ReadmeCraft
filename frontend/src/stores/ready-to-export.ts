import { create } from "zustand"

interface ReadyToExportState {
  isReadyToExport: boolean
  setReadyToExport: (isReadyToExport: boolean) => void
}

export const useReadyToExportStore = create<ReadyToExportState>(set => ({
  isReadyToExport: false,
  setReadyToExport(isReadyToExport) {
    set({ isReadyToExport })
  }
}))
