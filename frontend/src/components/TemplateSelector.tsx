export default function TemplateSelector() {
  return (
    <div className="flex items-center space-x-4">
      <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option>Web Application</option>
        <option>CLI Tool</option>
        <option>Library</option>
        <option>API Service</option>
      </select>
    </div>
  )
}
