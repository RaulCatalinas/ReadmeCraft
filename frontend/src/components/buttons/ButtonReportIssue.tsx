// Wailsjs
import { OpenIssueReport } from "@/wailsjs/main/App"

// Components
import BaseSecondaryButton from "./BaseSecondaryButton"

export default function ButtonReportIssue() {
  return <BaseSecondaryButton onClick={OpenIssueReport} text="Report issue" />
}
