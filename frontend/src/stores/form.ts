// Third-Party libraries
import { create } from "zustand"
import { persist } from "zustand/middleware"

// Stores
import { useReadyToExportStore } from "./ready-to-export"

// Templates
import configData from "@/src/templates/config.json"

// Types
import type { FieldValue, TemplateType } from "@/src/types/form"

export interface FormState {
  selectedTemplate: TemplateType
  formValues: FieldValue
  errors: FieldValue
  setSelectedTemplate: (template: TemplateType) => void
  setFieldValue: (fieldName: string, value: string) => void
  setFieldError: (fieldName: string, error: string) => void
  clearFieldError: (fieldName: string) => void
  resetForm: () => void
  validateField: (
    fieldName: string,
    value: string,
    isRequired: boolean
  ) => boolean
  getFieldValue: (fieldName: string) => string
  checkReadyToExport: () => void
}

export const useFormStore = create<FormState>()(
  persist(
    (set, get) => ({
      selectedTemplate: "web-app",
      formValues: {},
      errors: {},

      setSelectedTemplate: (template: TemplateType) => {
        set({
          selectedTemplate: template,
          formValues: {}, // Reset form when template changes
          errors: {}
        })
        // Check ready to export after template change
        get().checkReadyToExport()
      },

      setFieldValue: (fieldName: string, value: string) => {
        set(state => ({
          formValues: {
            ...state.formValues,
            [fieldName]: value
          }
        }))
        // Check if ready to export after updating field
        get().checkReadyToExport()
      },

      setFieldError: (fieldName: string, error: string) => {
        set(state => ({
          errors: {
            ...state.errors,
            [fieldName]: error
          }
        }))
      },

      clearFieldError: (fieldName: string) => {
        set(state => {
          const newErrors = { ...state.errors }
          delete newErrors[fieldName]
          return { errors: newErrors }
        })
      },

      resetForm: () => {
        set({ formValues: {}, errors: {} })
      },

      validateField: (
        fieldName: string,
        value: string,
        isRequired: boolean
      ) => {
        const { setFieldError, clearFieldError } = get()

        if (isRequired && !value.trim()) {
          setFieldError(fieldName, "This field is required")
          return false
        }

        // URL validation
        if (fieldName.toLowerCase().includes("url") && value.trim()) {
          try {
            new URL(value)
            clearFieldError(fieldName)
            return true
          } catch {
            setFieldError(fieldName, "Please enter a valid URL")
            return false
          }
        }

        clearFieldError(fieldName)
        return true
      },

      getFieldValue: (fieldName: string) => {
        return get().formValues[fieldName] || ""
      },

      checkReadyToExport: () => {
        const state = get()
        const templateConfig = configData.templates[state.selectedTemplate]

        // Check if all required fields are filled and have no errors
        const requiredFields = templateConfig.fields.filter(
          field => field.required
        )
        const allRequiredFilled = requiredFields.every(field => {
          const value = state.formValues[field.name]
          return value && value.trim() !== ""
        })

        // Check if there are any validation errors
        const hasErrors = Object.keys(state.errors).length > 0

        const isReady = allRequiredFilled && !hasErrors
        useReadyToExportStore.getState().setReadyToExport(isReady)
      }
    }),
    {
      name: "readme-craft-form"
    }
  )
)
