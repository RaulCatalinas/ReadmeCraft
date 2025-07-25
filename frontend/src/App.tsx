import Footer from "./components/Footer"
import FormPanel from "./components/FormPanel"
import Header from "./components/Heder"
import PreviewPanel from "./components/PreviewPanel"

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-50 resize">
      <Header />

      <main className="flex-1 flex min-h-0">
        <FormPanel />
        <PreviewPanel />
      </main>

      <Footer />
    </div>
  )
}
