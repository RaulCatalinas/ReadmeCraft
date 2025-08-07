// React
import { useCallback, useEffect, useState } from "react"

// Store
import { useFormStore } from "@/src/stores/form"

// Utils
import { generateReadmePreview } from "@/src/utils/readme-generator"

// Types
import type { FieldValue, TemplateType } from "@/src/types/form"

// Wailsjs
import { WriteLog } from "@/wailsjs/app_logging/loggingManager"
import { types } from "@/wailsjs/models"

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

  const generatePreview = useCallback(
    async (template: TemplateType, values: FieldValue) => {
      setIsLoading(true)
      setError(null)

      try {
        const content = await generateReadmePreview(template, values)
        setReadmeContent(content)
      } catch (err) {
        await WriteLog(
          types.LogLevel.ERROR,
          `Error generating README preview: ${err instanceof Error ? err.message : String(err)}`
        )
        setError(
          err instanceof Error ? err.message : "Failed to generate preview"
        )
        setReadmeContent("# Error\n\nFailed to generate README preview.")
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  useEffect(() => {
    void generatePreview(selectedTemplate, formValues)
  }, [selectedTemplate, formValues, generatePreview])

  return {
    readmeContent,
    isLoading,
    error
  }
}
