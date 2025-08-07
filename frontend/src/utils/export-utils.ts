// Wailsjs
import { WriteLog } from "@/wailsjs/app_logging/loggingManager"
import { types } from "@/wailsjs/models"

export async function saveDraftToStorage(
  templateType: string,
  formValues: Record<string, string>,
  readmeContent: string
) {
  const draft = {
    templateType,
    formValues,
    readmeContent,
    savedAt: new Date().toISOString()
  }

  try {
    localStorage.setItem("readme-craft-draft", JSON.stringify(draft))
    return true
  } catch (error) {
    await WriteLog(types.LogLevel.ERROR, `Failed to save draft: ${error}`)
    console.error("Failed to save draft:", error)
    return false
  }
}

/**
 * Load draft from localStorage
 */
export async function loadDraftFromStorage() {
  try {
    const draftString = localStorage.getItem("readme-craft-draft")
    if (!draftString) return null

    return JSON.parse(draftString)
  } catch (error) {
    await WriteLog(types.LogLevel.ERROR, `Failed to load draft: ${error}`)
    return null
  }
}

/**
 * Clear draft from localStorage
 */
export async function clearDraftFromStorage() {
  try {
    localStorage.removeItem("readme-craft-draft")
    return true
  } catch (error) {
    await WriteLog(types.LogLevel.ERROR, `Failed to clear draft: ${error}`)
    console.error("Failed to clear draft:", error)
    return false
  }
}
