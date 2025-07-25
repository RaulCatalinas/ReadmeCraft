export default function Footer() {
  return (
    <footer className="h-16 bg-white border-t border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <span>Ready to export</span>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors hover:cursor-pointer">
          Save Draft
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium hover:cursor-pointer">
          Export README
        </button>
      </div>
    </footer>
  )
}
