/**
 * Download a file with the given content and filename
 */
export function downloadFile(
  content: string,
  filename: string,
  mimeType: string
) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()

  // Cleanup
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/**
 * Export README content as a .md file
 */
export function exportReadmeFile(content: string) {
  downloadFile(content, "README.md", "text/markdown")
}

/**
 * Save content to localStorage (for drafts)
 */
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
