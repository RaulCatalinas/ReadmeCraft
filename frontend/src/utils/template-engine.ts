// Types
import type { FieldValue } from "@/src/types/form"

/**
 * Simple template engine that processes Handlebars-like syntax
 * Supports {{variable}} and {{#if variable}}...{{/if}} blocks
 */
export function processTemplate(template: string, values: FieldValue): string {
  let processed = template

  // First, process conditional blocks {{#if variable}}...{{/if}}
  processed = processConditionalBlocks(processed, values)

  // Then, replace simple variables {{VARIABLE}}
  processed = processSimpleVariables(processed, values)

  // Enhance section separation for better readability
  processed = enhanceSectionSeparation(processed)

  return processed
}

/**
 * Process conditional blocks like {{#if VARIABLE}}content{{/if}}
 */
function processConditionalBlocks(
  template: string,
  values: FieldValue
): string {
  const conditionalRegex = /\{\{#if\s+(\w+)\}\}([\s\S]*?)\{\{\/if\}\}/g

  return template.replace(conditionalRegex, (match, variable, content) => {
    const value = values[variable]
    // Show content if variable exists and is not empty
    if (value && value.trim() !== "") {
      return content
    }
    return ""
  })
}

/**
 * Replace simple variables like {{VARIABLE}}
 */
function processSimpleVariables(template: string, values: FieldValue): string {
  const variableRegex = /\{\{(\w+)\}\}/g

  return template.replace(variableRegex, (_, variable) => {
    const value = values[variable]
    return value || ""
  })
}

/**
 * Enhance section separation for better readability in preview
 */
function enhanceSectionSeparation(content: string): string {
  // Add extra spacing before major sections (## headings)
  content = content.replace(/\n## /g, "\n\n## ")

  // Ensure proper spacing after titles
  content = content.replace(/^(# .+)$/gm, "$1\n")

  // Clean up multiple consecutive newlines (max 3)
  content = content.replace(/\n{4,}/g, "\n\n\n")

  // Ensure sections with emojis have proper spacing
  content = content.replace(
    /\n(## [🎯🚀📸✨🛠️🏃‍♂️📱📚🔧🧪📊🔒📈🤝📄📧🙏🆘].+)/g,
    "\n\n$1"
  )

  return content
}

/**
 * Get all variables used in a template
 */
export function extractTemplateVariables(template: string): string[] {
  const variables = new Set<string>()

  // Extract from simple variables {{VARIABLE}}
  const simpleRegex = /\{\{(\w+)\}\}/g
  let match
  while ((match = simpleRegex.exec(template)) !== null) {
    variables.add(match[1])
  }

  // Extract from conditional blocks {{#if VARIABLE}}
  const conditionalRegex = /\{\{#if\s+(\w+)\}\}/g
  while ((match = conditionalRegex.exec(template)) !== null) {
    variables.add(match[1])
  }

  return Array.from(variables)
}

/**
 * Validate that all required variables have values
 */
export function validateTemplateVariables(
  values: FieldValue,
  requiredFields: string[] = []
): { isValid: boolean; missingFields: string[] } {
  const missingFields = requiredFields.filter(field => {
    const value = values[field]
    return !value || value.trim() === ""
  })

  return {
    isValid: missingFields.length === 0,
    missingFields
  }
}
