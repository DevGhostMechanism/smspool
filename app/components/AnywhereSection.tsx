export default function AnywhereSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Use our service anytime, anywhere</h2>
        <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
          Meet our SMS verification app! We offer the best mobile for our service anywhere, anytime.
        </p>

        {/* Device Mockups */}
        <div className="flex flex-row flex-wrap lg:flex-nowrap items-end justify-center gap-4 lg:gap-6 mb-10">
          {/* Phone 1 */}
          <div className="relative">
            <div className="w-32 h-60 bg-gray-900 rounded-3xl border-4 border-gray-800 shadow-2xl overflow-hidden mx-auto">
              <div className="w-full h-full bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col">
                <div className="bg-blue-800 h-6 flex items-center justify-center">
                  <div className="w-10 h-1 bg-gray-600 rounded-full" />
                </div>
                <div className="flex-1 p-2 space-y-1.5">
                  <div className="bg-white/10 rounded-lg p-1.5">
                    <div className="h-1.5 bg-white/40 rounded w-3/4 mb-1" />
                    <div className="h-1.5 bg-white/30 rounded w-1/2" />
                  </div>
                  <div className="bg-white/10 rounded-lg p-1.5">
                    <div className="h-1.5 bg-white/40 rounded w-2/3 mb-1" />
                    <div className="h-1.5 bg-white/30 rounded w-1/2" />
                  </div>
                  <div className="bg-white/10 rounded-lg p-1.5">
                    <div className="h-1.5 bg-green-400/60 rounded w-3/4 mb-1" />
                    <div className="h-1.5 bg-white/30 rounded w-1/3" />
                  </div>
                  <div className="bg-white/20 rounded-lg p-2 mt-2">
                    <div className="text-white/80 text-xs font-bold text-center" style={{fontSize:'6px'}}>SMSPool</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 (taller) */}
          <div className="relative">
            <div className="w-36 h-72 bg-gray-900 rounded-3xl border-4 border-gray-800 shadow-2xl overflow-hidden mx-auto">
              <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col">
                <div className="bg-slate-900 h-7 flex items-center justify-center">
                  <div className="w-12 h-1.5 bg-gray-700 rounded-full" />
                </div>
                <div className="flex-1 p-2 space-y-2">
                  <div className="bg-blue-600 rounded-xl p-2 text-center">
                    <div className="text-white font-bold" style={{fontSize:'8px'}}>Select Service</div>
                  </div>
                  {['🇺🇸 WhatsApp $0.12', '🇬🇧 Google $0.15', '🇩🇪 Telegram $0.10'].map((s, i) => (
                    <div key={i} className="bg-white/10 rounded-lg px-2 py-1.5 flex items-center justify-between">
                      <span style={{fontSize:'7px'}} className="text-white/80">{s}</span>
                    </div>
                  ))}
                  <div className="bg-green-600/80 rounded-lg p-1.5 mt-2">
                    <div style={{fontSize:'6px'}} className="text-white text-center font-semibold">SMS Received ✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop */}
          <div className="relative shrink-0 w-full lg:w-auto">
            <div className="w-64 sm:w-80 h-44 sm:h-52 bg-gray-200 rounded-t-2xl border-4 border-gray-300 shadow-2xl overflow-hidden mx-auto">
              <div className="w-full h-full bg-white flex flex-col">
                {/* Browser bar */}
                <div className="bg-gray-100 h-7 flex items-center px-3 gap-2 border-b border-gray-200">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded px-2 py-0.5 text-xs text-gray-400 text-center border border-gray-200">
                    smspool.net
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="bg-blue-600 h-6 flex items-center px-3">
                    <span className="text-white text-xs font-bold">SMS Pool</span>
                    <div className="ml-auto flex gap-3">
                      {['Dashboard', 'Order', 'History'].map(t => (
                        <span key={t} className="text-white/80 text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-1 gap-2 p-2">
                    <div className="flex-1 space-y-1.5">
                      <div className="bg-gray-100 rounded p-2">
                        <div className="text-xs text-gray-500 mb-1 font-semibold">Select Service</div>
                        <div className="space-y-1">
                          {['WhatsApp — $0.12', 'Google — $0.15', 'Telegram — $0.10'].map((s,i) => (
                            <div key={i} className="bg-white rounded px-1.5 py-1 text-xs text-gray-600 border border-gray-100">{s}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-28">
                      <div className="bg-green-50 border border-green-200 rounded p-1.5">
                        <div className="text-xs text-green-700 font-semibold mb-1">SMS Received</div>
                        <div className="text-xs text-gray-500">Code: 482931</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop bottom */}
            <div className="w-72 sm:w-96 h-4 bg-gray-300 rounded-b-3xl mx-auto -mt-1 shadow" />
          </div>
        </div>

        {/* App Store buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
          <a href="#" className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-900 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.18 23.76A2 2 0 015 24.74l9.4-9.4-2.83-2.83-8.39 11.25zm17.3-12.34L17.1 9.6l-2.83 2.83 2.97 2.97 3.24-3.98zm-19.04-.47L4.8 14.3l2.83-2.83-2.14-2.14-4.15 1.62zm7.5-7.87L6.11 6.94l2.83 2.83 2.83-2.83-2.83-2.86zM19 1.69L11.77 0l-3.65 3.65 3.66 3.66L19 1.69z"/>
            </svg>
            <div className="text-left">
              <p className="text-xs text-gray-300 leading-none">GET IT ON</p>
              <p className="text-sm font-semibold leading-tight">Google Play</p>
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-900 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <p className="text-xs text-gray-300 leading-none">Download on the</p>
              <p className="text-sm font-semibold leading-tight">App Store</p>
            </div>
          </a>
        </div>
        <p className="text-sm text-gray-400">Or register on our website directly</p>
      </div>
    </section>
  )
}
