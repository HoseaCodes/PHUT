export function AuthCard({ children }) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-center text-3xl font-extrabold text-gray-900">
            Training Platform
          </h1>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            {children}
          </div>
        </div>
      </div>
    )
  }