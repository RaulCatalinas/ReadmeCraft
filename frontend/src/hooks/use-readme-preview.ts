// React
import { useEffect, useState } from "react"

// Store
import { useFormStore } from "@/src/stores/form"

// Utils
import { generateReadmePreview } from "@/src/utils/readme-generator"

// Types
import type { FieldValue, TemplateType } from "@/src/types/form"

interface UseReadmePreviewResult {
  readmeContent: string
  isLoading: boolean
  error: string | null
}

/**
 * Hook para manejar la previsualización del README en tiempo real
 */
export function useReadmePreview(): UseReadmePreviewResult {
  const selectedTemplate = useFormStore(state => state.selectedTemplate)
  const formValues = useFormStore(state => state.formValues)

  const [readmeContent, setReadmeContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>("")

  useEffect(() => {
    generatePreview(selectedTemplate, formValues)
  }, [selectedTemplate, formValues])

  const generatePreview = (template: TemplateType, values: FieldValue) => {
    setIsLoading(true)
    setError(null)

    try {
      const content = generateReadmePreview(template, values)
      setReadmeContent(content)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate preview"
      )
      setReadmeContent("# Error\n\nFailed to generate README preview.")
    } finally {
      setIsLoading(false)
    }
  }

  return {
    readmeContent,
    isLoading,
    error
  }
}
