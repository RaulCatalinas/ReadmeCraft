// Components
import Footer from "./components/footer/Footer"
import Header from "./components/headers/Heder"
import FormPanel from "./components/panels/FormPanel"
import PreviewPanel from "./components/panels/PreviewPanel"

// Stores
import { useDarkModeStore } from "./stores/dark-mode"

export default function App() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  return (
    <div
      className={`
        pt-2 max-h-screen flex flex-col gap-y-2 overflow-hidden
        ${isDarkModeActive ? "bg-gray-800" : "bg-gray-50"}
      `}
    >
      <div className="p-1">
        <Header />
      </div>

      <main className="flex-1 flex overflow-hidden">
        <FormPanel />
        <PreviewPanel />
      </main>

      <div className="p-1">
        <Footer />
      </div>
    </div>
  )
}
