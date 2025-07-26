import { useDarkModeStore } from "@/src/stores/dark-mode"

export default function FormProjectInfo() {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  return (
    <div className="space-y-6">
      <div>
        <label
          className={`
            block text-sm font-medium mb-2 
            ${isDarkModeActive ? "text-gray-300" : "text-gray-700"}
          `}
        >
          Project Name
        </label>
        <input
          type="text"
          className={`
            w-full px-4 py-2 border rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent 
            ${
              isDarkModeActive
                ? "bg-gray-900 border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }
          `}
          placeholder="my-awesome-project"
        />
      </div>

      <div>
        <label
          className={`
            block text-sm font-medium mb-2 
            ${isDarkModeActive ? "text-gray-300" : "text-gray-700"}
          `}
        >
          Description
        </label>
        <textarea
          className={`
            w-full px-4 py-2 border rounded-lg h-24 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none 
            ${
              isDarkModeActive
                ? "bg-gray-900 border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }
          `}
          placeholder="A brief description of your project..."
        />
      </div>

      <div>
        <label
          className={`
            block text-sm font-medium mb-2 
            ${isDarkModeActive ? "text-gray-300" : "text-gray-700"}
          `}
        >
          Installation
        </label>
        <textarea
          className={`
            w-full px-4 py-2 border rounded-lg h-32 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent 
            resize-none font-mono text-sm 
            ${
              isDarkModeActive
                ? "bg-gray-900 border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }
          `}
          placeholder="npm install my-project"
        />
      </div>

      <div>
        <label
          className={`
            block text-sm font-medium mb-2 
            ${isDarkModeActive ? "text-gray-300" : "text-gray-700"}
          `}
        >
          Usage
        </label>
        <textarea
          className={`
            w-full px-4 py-2 border rounded-lg h-32 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent 
            resize-none font-mono text-sm 
            ${
              isDarkModeActive
                ? "bg-gray-900 border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }
          `}
          placeholder="import myProject from 'my-project';"
        />
      </div>
    </div>
  )
}
