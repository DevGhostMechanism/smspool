import { CheckCircle2 } from 'lucide-react'

const orders = [
  {
    flag: '🇺🇸',
    country: 'United States',
    service: 'Amazon',
    count: '5M+ orders',
    price: '$0.16',
  },
  {
    flag: '🇺🇸',
    country: 'United States',
    service: 'Telegram',
    count: '314 orders',
    price: '$0.30',
  },
  {
    flag: '🇺🇸',
    country: 'United States',
    service: 'Google',
    count: '1175 orders',
    price: '$0.35',
  },
]

const features = [
  {
    title: 'Receive SMS hassle-free',
    desc: 'We currently support a large variety of social media sites, not limited to Steam, Twitter, Google, Uber, Discord, and even Twitter. To buy an online phone number has never been this easy',
  },
  {
    title: 'High quality SMS verifications',
    desc: 'At SMSPool we pride ourselves on providing the highest quality verification services for phone verified accounts. We make sure to only provide non-VoIP phone numbers in order to work with any service.',
  },
  {
    title: 'No Price Fluctuation',
    desc: 'Our numbers start at 3 cents each, and our prices never fluctuate, even during high demand.',
  },
]

export default function VerifySection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
          Verify with a Text, <span className="text-blue-600">Protect</span> with Confidence.
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Order cards */}
          <div className="flex-1 space-y-4 w-full">
            {orders.map((order, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{order.flag}</span>
                    <span className="text-sm font-medium text-gray-700">{order.country}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span className="text-sm font-medium text-gray-700">{order.service}</span>
                  <span className="ml-auto bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">
                    {order.count}
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800">{order.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Features */}
          <div className="flex-1 space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{f.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
