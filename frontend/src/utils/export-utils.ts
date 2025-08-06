export function saveDraftToStorage(
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
    console.error("Failed to save draft:", error)
    return false
  }
}

/**
 * Load draft from localStorage
 */
export function loadDraftFromStorage() {
  try {
    const draftString = localStorage.getItem("readme-craft-draft")
    if (!draftString) return null

    return JSON.parse(draftString)
  } catch (error) {
    console.error("Failed to load draft:", error)
    return null
  }
}

/**
 * Clear draft from localStorage
 */
export function clearDraftFromStorage() {
  try {
    localStorage.removeItem("readme-craft-draft")
    return true
  } catch (error) {
    console.error("Failed to clear draft:", error)
    return false
  }
}
