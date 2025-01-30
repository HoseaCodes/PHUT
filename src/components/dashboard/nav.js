// src/components/dashboard/nav.js
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function DashboardNav() {
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Projects', href: '/dashboard/projects' },
    { name: 'Training', href: '/dashboard/training' },
    { name: 'Clients', href: '/dashboard/clients' },
    { name: 'Revenue', href: '/dashboard/revenue' },
    { name: 'Growth', href: '/dashboard/growth' },
  ]

  return (
    <nav className="w-64 bg-white shadow-sm min-h-screen p-4">
      <div className="space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-2 rounded-md ${
                isActive 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}