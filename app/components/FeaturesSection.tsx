import { Zap, Bell, LayoutDashboard, Smartphone, Globe, Clock } from 'lucide-react'

const features = [
  {
    icon: <Zap size={22} className="text-blue-600" />,
    title: 'SMS Verification API',
    desc: 'We have a blazing fast API for receiving your own SMS verifications. We make sure to get you SMS verifications where needed.',
  },
  {
    icon: <Bell size={22} className="text-blue-600" />,
    title: 'Receive SMS notifications instantly',
    desc: 'With our extremely fast servers, we make sure to relay your text message to you as soon as possible. This means that it takes less than 10 seconds to receive your text messages using our phone number.',
  },
  {
    icon: <LayoutDashboard size={22} className="text-blue-600" />,
    title: 'Quick and Easy to Use Dashboard',
    desc: 'Our dashboard is designed for you to be in difficulties navigating through our panel, not only is it simple to use but simple to develop as well (for API).',
  },
  {
    icon: <Smartphone size={22} className="text-blue-600" />,
    title: 'Non-VoIP phone number',
    desc: 'Do you need a longer-term solution for your temporary phone number needs? No problem! We offer non-VOIP mobile phone numbers which can be rented for as long as you want!',
  },
  {
    icon: <Globe size={22} className="text-blue-600" />,
    title: 'Multi country support',
    desc: 'Our customers ranging from Russia to the United States, are catered with a solution for a private mobile phone number. SMS by country SMS verification exist for the whole world.',
  },
  {
    icon: <Clock size={22} className="text-blue-600" />,
    title: 'All ETA options',
    desc: 'Need to automate your SMS notifications using our numbers? Well all of online SMS verification at any time! Take our status page to see the status at this time.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          <span className="text-blue-600">Features</span> of SMSPool
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Features list */}
          <div className="flex-1 grid grid-cols-1 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{f.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone mockup on the right */}
          <div className="flex-shrink-0 flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="w-48 h-96 bg-gray-900 rounded-3xl border-4 border-gray-800 shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col">
                  <div className="bg-slate-900 h-8 flex items-center justify-center">
                    <div className="w-16 h-1.5 bg-gray-700 rounded-full" />
                  </div>
                  {/* App header */}
                  <div className="bg-blue-600 h-10 flex items-center px-4">
                    <span className="text-white text-xs font-bold">SMS Pool</span>
                  </div>
                  {/* App content */}
                  <div className="flex-1 p-3 space-y-2">
                    <div className="bg-white/10 rounded-xl p-2">
                      <div className="text-white/60 text-xs mb-1.5">Select service</div>
                      <input readOnly className="w-full bg-white/10 rounded-lg px-2 py-1 text-white/50 text-xs outline-none" placeholder="Search..." />
                    </div>
                    {[
                      { flag: '🇺🇸', svc: 'WhatsApp', price: '$0.12' },
                      { flag: '🇬🇧', svc: 'Google', price: '$0.15' },
                      { flag: '🇩🇪', svc: 'Telegram', price: '$0.10' },
                    ].map((s, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg px-2 py-1.5">
                        <span className="text-sm">{s.flag}</span>
                        <span className="text-white/70 text-xs">{s.svc}</span>
                        <span className="text-blue-400 text-xs font-bold">{s.price}</span>
                      </div>
                    ))}
                    <div className="bg-green-600/80 rounded-xl p-2 mt-3">
                      <div className="text-white text-xs font-semibold text-center">✓ SMS Received</div>
                      <div className="text-white/70 text-xs text-center mt-0.5">Code: 482 931</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 blur-2xl bg-blue-400/20 rounded-full scale-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
