const serviceIcons = [
  { bg: 'bg-green-500', label: 'W', name: 'WhatsApp' },
  { bg: 'bg-blue-700', label: 'in', name: 'LinkedIn' },
  { bg: 'bg-yellow-400', label: '👻', name: 'Snapchat' },
  { bg: 'bg-indigo-600', label: 'D', name: 'Discord' },
  { bg: 'bg-sky-500', label: 'T', name: 'Twitter' },
  { bg: 'bg-blue-500', label: 't', name: 'Tumblr' },
  { bg: 'bg-pink-500', label: '📸', name: 'Instagram' },
  { bg: 'bg-red-600', label: '▶', name: 'YouTube' },
  { bg: 'bg-orange-500', label: 'A', name: 'Amazon' },
  { bg: 'bg-gray-700', label: '✉', name: 'Other' },
]

const flags = ['🇬🇧', '🇺🇸', '🇦🇺', '🇩🇪', '🇫🇷']

export default function CountriesSection() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Icons */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-5">
              {serviceIcons.map((icon) => (
                <div
                  key={icon.name}
                  title={icon.name}
                  className={`w-12 h-12 rounded-full ${icon.bg} flex items-center justify-center shadow-md`}
                >
                  <span className="text-white text-sm font-bold">{icon.label}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 justify-center lg:justify-start">
              {flags.map((f, i) => (
                <span key={i} className="text-2xl">{f}</span>
              ))}
              <span className="text-gray-400 text-xl font-light">…</span>
            </div>
          </div>

          {/* Stats */}
          <div className="shrink-0 text-center lg:text-right">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              150+ <span className="text-blue-600">countries</span>
            </p>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-1">
              1200+ <span className="text-blue-600">services</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
