/* eslint-disable @typescript-eslint/no-explicit-any */

// React
import { useMemo } from "react"

// Libraries
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

// Stores
import { useDarkModeStore } from "@/src/stores/dark-mode"

interface MarkdownRendererProps {
  content: string
}

/**
 * Advanced markdown renderer using react-markdown with enhanced section styling
 */
export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const isDarkModeActive = useDarkModeStore(state => state.isDarkModeActive)

  // Custom components for better section separation and styling
  const components = useMemo(
    () => ({
      // Enhanced headings with better spacing and styling
      h1: ({ children, ...props }: any) => (
        <div className="mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h1
            className={`
              text-3xl font-bold mb-2
              ${isDarkModeActive ? "text-white" : "text-gray-900"}
            `}
            {...props}
          >
            {children}
          </h1>
        </div>
      ),

      h2: ({ children, ...props }: any) => (
        <div className="mt-10 mb-6 first:mt-0">
          <h2
            className={`
              text-xl font-semibold mb-4 pb-2 border-b border-gray-100 dark:border-gray-800
              ${isDarkModeActive ? "text-blue-400" : "text-blue-600"}
            `}
            {...props}
          >
            {children}
          </h2>
        </div>
      ),

      h3: ({ children, ...props }: any) => (
        <div className="mt-8 mb-4">
          <h3
            className={`
              text-lg font-medium mb-3
              ${isDarkModeActive ? "text-blue-300" : "text-blue-700"}
            `}
            {...props}
          >
            {children}
          </h3>
        </div>
      ),

      h4: ({ children, ...props }: any) => (
        <div className="mt-6 mb-3">
          <h4
            className={`
              text-base font-medium mb-2
              ${isDarkModeActive ? "text-gray-200" : "text-gray-800"}
            `}
            {...props}
          >
            {children}
          </h4>
        </div>
      ),

      // Enhanced paragraphs with better spacing
      p: ({ children, ...props }: any) => (
        <p
          className={`
            mb-4 leading-relaxed
            ${isDarkModeActive ? "text-gray-300" : "text-gray-700"}
          `}
          {...props}
        >
          {children}
        </p>
      ),

      // Enhanced code blocks
      pre: ({ children, ...props }: any) => (
        <div className="my-6">
          <pre
            className={`
              p-4 rounded-lg overflow-x-auto text-sm font-mono border
              ${
                isDarkModeActive
                  ? "bg-gray-800 border-gray-700 text-gray-200"
                  : "bg-gray-50 border-gray-200 text-gray-800"
              }
            `}
            {...props}
          >
            {children}
          </pre>
        </div>
      ),

      // Enhanced inline code
      code: ({ children, className, ...props }: any) => {
        // Check if it's a code block (has className) or inline code
        const isInline = !className

        if (isInline) {
          return (
            <code
              className={`
                px-1.5 py-0.5 rounded text-sm font-mono
                ${
                  isDarkModeActive
                    ? "bg-gray-700 text-blue-300"
                    : "bg-gray-100 text-blue-600"
                }
              `}
              {...props}
            >
              {children}
            </code>
          )
        }

        // For code blocks, return as is (will be handled by pre)
        return (
          <code className={className} {...props}>
            {children}
          </code>
        )
      },

      // Enhanced lists
      ul: ({ children, ...props }: any) => (
        <ul
          className="mb-6 space-y-2 ml-6 list-disc marker:text-blue-500"
          {...props}
        >
          {children}
        </ul>
      ),

      ol: ({ children, ...props }: any) => (
        <ol
          className="mb-6 space-y-2 ml-6 list-decimal marker:text-blue-500"
          {...props}
        >
          {children}
        </ol>
      ),

      li: ({ children, ...props }: any) => (
        <li
          className={`
            leading-relaxed
            ${isDarkModeActive ? "text-gray-300" : "text-gray-700"}
          `}
          {...props}
        >
          {children}
        </li>
      ),

      // Enhanced links
      a: ({ children, href, ...props }: any) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            font-medium underline transition-colors
            ${
              isDarkModeActive
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-800"
            }
          `}
          {...props}
        >
          {children}
        </a>
      ),

      // Enhanced blockquotes
      blockquote: ({ children, ...props }: any) => (
        <blockquote
          className={`
            my-6 pl-4 border-l-4 border-blue-500 italic
            ${isDarkModeActive ? "text-gray-400" : "text-gray-600"}
          `}
          {...props}
        >
          {children}
        </blockquote>
      ),

      // Enhanced tables
      table: ({ children, ...props }: any) => (
        <div className="my-6 overflow-x-auto">
          <table
            className={`
              w-full border-collapse rounded-lg overflow-hidden
              ${isDarkModeActive ? "border-gray-700" : "border-gray-200"}
            `}
            {...props}
          >
            {children}
          </table>
        </div>
      ),

      thead: ({ children, ...props }: any) => (
        <thead
          className={`
            ${isDarkModeActive ? "bg-gray-800" : "bg-gray-50"}
          `}
          {...props}
        >
          {children}
        </thead>
      ),

      th: ({ children, ...props }: any) => (
        <th
          className={`
            px-4 py-3 text-left font-medium border
            ${
              isDarkModeActive
                ? "text-gray-200 border-gray-700"
                : "text-gray-900 border-gray-200"
            }
          `}
          {...props}
        >
          {children}
        </th>
      ),

      td: ({ children, ...props }: any) => (
        <td
          className={`
            px-4 py-3 border
            ${
              isDarkModeActive
                ? "text-gray-300 border-gray-700"
                : "text-gray-700 border-gray-200"
            }
          `}
          {...props}
        >
          {children}
        </td>
      ),

      // Enhanced horizontal rules for section separation
      hr: ({ ...props }: any) => (
        <div className="my-8">
          <hr
            className={`
              border-0 h-px
              ${isDarkModeActive ? "bg-gray-700" : "bg-gray-200"}
            `}
            {...props}
          />
        </div>
      ),

      // Enhanced images
      img: ({ src, alt, ...props }: any) => (
        <div className="my-6">
          <img
            src={src}
            alt={alt}
            className="max-w-full h-auto rounded-lg shadow-sm"
            {...props}
          />
          {alt && (
            <p
              className={`
              text-sm text-center mt-2 italic
              ${isDarkModeActive ? "text-gray-400" : "text-gray-600"}
            `}
            >
              {alt}
            </p>
          )}
        </div>
      )
    }),
    [isDarkModeActive]
  )

  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
