export function SubmitButton({ isLoading, children, ...props }) {
    return (
      <button
        {...props}
        className={`
          w-full px-4 py-2 text-sm font-medium text-white 
          bg-blue-600 rounded-md hover:bg-blue-700 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
          ${props.disabled ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : ''}
        `}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </div>
        ) : children}
      </button>
    )
  }