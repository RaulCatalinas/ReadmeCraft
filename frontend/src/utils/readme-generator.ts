// utils
import { processTemplate } from "./template-engine"

// Constants
import { TEMPLATE_FILES_MAP } from "@/src/constants/templates"

// Templates
import configData from "@/src/templates/config.json"

// Types
import type { FieldValue, TemplateType } from "@/src/types/form"

/**
 * Generate README content from template and form values
 */
export function generateReadme(
  templateType: TemplateType,
  formValues: FieldValue
): string {
  try {
    return processTemplate(TEMPLATE_FILES_MAP[templateType], formValues)
  } catch (error) {
    console.error("Failed to generate README:", error)
    return `# Error\n\nFailed to generate README: ${error}`
  }
}

/**
 * Get required fields for a template
 */
export function getRequiredFields(templateType: TemplateType): string[] {
  const config = configData.templates[templateType]

  return config.fields.filter(field => field.required).map(field => field.name)
}

/**
 * Check if README is ready to export based on required fields
 */
export function isReadmeReadyToExport(
  templateType: TemplateType,
  formValues: FieldValue
): boolean {
  const requiredFields = getRequiredFields(templateType)
  return requiredFields.every(fieldName => {
    const value = formValues[fieldName]
    return value && value.trim() !== ""
  })
}

/**
 * Generate a preview of the README with placeholder content for empty fields
 */
export function generateReadmePreview(
  templateType: TemplateType,
  formValues: FieldValue
): string {
  const config = configData.templates[templateType]
  const enhancedValues = { ...formValues }

  // Add placeholder values for empty required fields
  config.fields.forEach(field => {
    if (
      !enhancedValues[field.name] ||
      enhancedValues[field.name].trim() === ""
    ) {
      enhancedValues[field.name] = field.placeholder || `[${field.label}]`
    }
  })

  return generateReadme(templateType, enhancedValues)
}
