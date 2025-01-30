// src/components/dashboard/header.js
'use client'

import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

export function DashboardHeader() {
  const { data: session } = useSession()

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Training Platform</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">{session?.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}