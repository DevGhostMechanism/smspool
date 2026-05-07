import { ArrowRight } from 'lucide-react'

const services = [
  { flag: '🇺🇸', name: 'WhatsApp', country: 'United States', price: '$0.12' },
  { flag: '🇬🇧', name: 'Google', country: 'United Kingdom', price: '$0.15' },
  { flag: '🇩🇪', name: 'Telegram', country: 'Germany', price: '$0.10' },
  { flag: '🇫🇷', name: 'Facebook', country: 'France', price: '$0.14' },
  { flag: '🇳🇱', name: 'Twitter', country: 'Netherlands', price: '$0.11' },
]

export default function Hero() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Cheapest and Fastest Online SMS verification
            </h1>
            <p className="text-gray-500 text-base mb-8 leading-relaxed">
              Don&apos;t feel confident giving out your private number? Use a temporary
              phone number for verification with our top multi number service! Need a
              real phone number? Our multi-SIM service offers multiple SIM-based phone
              numbers when needed
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                Register Now <ArrowRight size={16} />
              </a>
              <a href="#" className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                More Info
              </a>
            </div>
          </div>

          {/* Right: UI Mockup */}
          <div className="flex-1 relative w-full max-w-lg">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-blue-600 px-4 py-3">
                  <p className="text-white font-semibold text-sm">Select your service</p>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-3">
                    <input
                      readOnly
                      placeholder="🔍  Search service..."
                      className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-500 bg-gray-50 outline-none"
                    />
                    <select className="border border-gray-200 rounded-lg px-2 py-2 text-xs text-gray-500 bg-gray-50 outline-none">
                      <option>Country</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    {services.map((s, i) => (
                      <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{s.flag}</span>
                          <div>
                            <p className="text-xs font-medium text-gray-800">{s.name}</p>
                            <p className="text-xs text-gray-400">{s.country}</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-blue-600">{s.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Overlapping SMS notification card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-2xl border border-gray-100 w-52 overflow-hidden">
                <div className="bg-green-500 px-3 py-2">
                  <p className="text-white font-semibold text-xs">Incoming SMS notifications</p>
                </div>
                <div className="p-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-blue-600 font-bold">W</span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-700">WhatsApp</p>
                      <p className="text-xs text-gray-400">+1 (555) 012-3456</p>
                      <p className="text-xs text-gray-500 mt-0.5">Your code: <strong>482931</strong></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-red-600 font-bold">G</span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-700">Google</p>
                      <p className="text-xs text-gray-400">+44 7911 123456</p>
                      <p className="text-xs text-gray-500 mt-0.5">G-<strong>739201</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
