// Templtes
import apiServiceTemplate from "@/src/templates/api-service.md?raw"
import cliToolTemplate from "@/src/templates/cli-tool.md?raw"
import libraryTemplate from "@/src/templates/library.md?raw"
import multiplatformAppTemplate from "@/src/templates/multiplatform-app.md?raw"
import webAppTemplate from "@/src/templates/web-app.md?raw"

// Types
import type { TemplateFilesMap } from "@/src/types/templates"

export const TEMPLATE_FILES_MAP = Object.freeze<TemplateFilesMap>({
  "web-app": webAppTemplate,
  library: libraryTemplate,
  "cli-tool": cliToolTemplate,
  "api-service": apiServiceTemplate,
  "multiplatform-app": multiplatformAppTemplate
})
