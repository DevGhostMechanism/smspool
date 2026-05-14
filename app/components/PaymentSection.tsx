export default function PaymentSection() {
  return (
    <>
      {/* Crypto section */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0f1f3d 0%, #1a3a6b 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Crypto coin icons */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Ethereum */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center shadow-xl ring-4 ring-white/10">
              <svg viewBox="0 0 32 32" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4l-8.5 12.5 8.5 5 8.5-5L16 4z" fill="white" opacity="0.9"/>
                <path d="M7.5 16.5L16 21.5l8.5-5-8.5 5-8.5-5z" fill="white" opacity="0.7"/>
                <path d="M16 23l-8.5-5 8.5 10 8.5-10-8.5 5z" fill="white" opacity="0.9"/>
              </svg>
            </div>

            {/* Bitcoin */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center shadow-xl ring-4 ring-white/10">
              <svg viewBox="0 0 32 32" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 13.5c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.7-.4-.7 2.6c-.4-.1-.9-.2-1.4-.3l.7-2.6-1.7-.4-.7 2.7c-.4-.1-.7-.2-1-.2v0l-2.3-.6-.4 1.8s1.2.3 1.2.3c.7.2.8.6.8.9l-.8 3.4c0 0 .1 0 .1 0l-.1 0-1.2 4.7c-.1.2-.3.6-.9.4 0 0-1.2-.3-1.2-.3L8 20.8l2.1.5c.4.1.8.2 1.2.3L10.6 24l1.7.4.7-2.7c.5.1.9.3 1.4.4l-.7 2.6 1.7.4.7-2.7c2.8.5 4.8.3 5.7-2.2.7-2-.03-3.2-1.5-3.9.97-.2 1.7-1 1.9-2.3zm-3.4 4.7c-.5 2-3.9.9-5 .6l.9-3.5c1.1.3 4.6.8 4.1 2.9zm.5-4.8c-.4 1.8-3.3.9-4.2.7l.8-3.2c.9.2 3.9.6 3.4 2.5z" fill="white"/>
              </svg>
            </div>

            {/* Tether */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center shadow-xl ring-4 ring-white/10">
              <span className="text-white font-extrabold text-xl">₮</span>
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Pay <span className="text-blue-400">anonymously</span><br />
            with cryptocurrency
          </h2>
          <p className="text-blue-200 text-sm mb-8">
            To choose any of our other trusted payment providers
          </p>
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Register Now
          </a>
        </div>
      </section>

      {/* Fiat section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Or pay with <span className="text-blue-600">fiat currency</span>
          </h2>

          {/* Dollar coin */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg mx-auto my-6">
            <span className="text-white font-extrabold text-2xl">$</span>
          </div>

          <p className="text-gray-500 text-sm mb-8">
            Pay with your credit card and use the US Dollar while the Euros
          </p>
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Register Now
          </a>
        </div>
      </section>
    </>
  )
}
