// src/app/(dashboard)/layout.js
import { DashboardNav } from '../../components/dashboard/nav'
import { DashboardHeader } from '../../components/dashboard/header'

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}