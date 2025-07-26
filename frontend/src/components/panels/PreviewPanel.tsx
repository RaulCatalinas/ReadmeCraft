import { useDarkModeStore } from "@/src/stores/dark-mode"

export default function PreviewPanel() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  return (
    <div
      className={`
        w-1/2 flex flex-col
        ${isDarkModeActive ? "bg-gray-900" : "bg-white"}
      `}
    >
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2
              className={`
                text-lg font-medium 
                ${isDarkModeActive ? "text-white" : "text-gray-900"}
              `}
            >
              Preview
            </h2>
            <div className="flex space-x-2">
              <button
                className={`
                  px-3 py-1 text-sm rounded-md transition-colors 
                  ${
                    isDarkModeActive
                      ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                Raw
              </button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Preview
              </button>
            </div>
          </div>

          {/* Preview del markdown */}
          <div
            className={`
              prose prose-sm max-w-none 
              ${
                isDarkModeActive
                  ? "prose-invert prose-headings:text-white prose-p:text-gray-300 prose-code:text-gray-300"
                  : ""
              }
            `}
          >
            <h1 className={isDarkModeActive ? "text-white" : "text-gray-900"}>
              my-awesome-project
            </h1>
            <p className={isDarkModeActive ? "text-gray-400" : "text-gray-600"}>
              A brief description of your project...
            </p>

            <h2 className={isDarkModeActive ? "text-white" : "text-gray-900"}>
              Installation
            </h2>
            <pre
              className={`
                p-3 rounded-lg 
                ${
                  isDarkModeActive
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-800"
                }
            `}
            >
              <code>npm install my-project</code>
            </pre>

            <h2 className={isDarkModeActive ? "text-white" : "text-gray-900"}>
              Usage
            </h2>
            <pre
              className={`
                p-3 rounded-lg 
                ${
                  isDarkModeActive
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-800"
                }
            `}
            >
              <code>import myProject from 'my-project';</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
