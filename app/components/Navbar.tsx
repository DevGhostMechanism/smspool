import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-1">
            <div className="bg-blue-600 text-white font-bold text-xs px-2 py-1.5 rounded leading-tight">
              <span className="block">SMS</span>
            </div>
            <span className="font-bold text-gray-900 text-xl">Pool</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Log In</a>
            <a href="#" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded text-sm transition-colors">
              Register
            </a>
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm">
              <span>🇬🇧</span>
              <span>English</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
