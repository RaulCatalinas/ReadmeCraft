export default function PreviewPanel() {
  return (
    <div className="w-1/2 bg-white overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Preview</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
              Raw
            </button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Preview
            </button>
          </div>
        </div>

        {/* Preview del markdown */}
        <div className="prose prose-sm max-w-none">
          <h1>my-awesome-project</h1>
          <p className="text-gray-600">
            A brief description of your project...
          </p>

          <h2>Installation</h2>
          <pre className="bg-gray-100 p-3 rounded-lg">
            <code>npm install my-project</code>
          </pre>

          <h2>Usage</h2>
          <pre className="bg-gray-100 p-3 rounded-lg">
            <code>import myProject from 'my-project';</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
