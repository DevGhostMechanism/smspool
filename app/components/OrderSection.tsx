export default function OrderSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Quick order */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Quick order SMS</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Interested in knowing the estimate of your usage? Press Start in order to get
              your order started within a minute.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2.5 rounded-lg text-sm transition-colors">
              Start
            </button>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-200 self-stretch" />

          {/* Right: Get started */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Get started</h3>
            <div className="mb-2">
              <p className="font-semibold text-gray-800 mb-1">Step 1: Select a service</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                After selecting a service in our database, our system will automatically suggest
                the best options for most our system will automatically suggest the best options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
