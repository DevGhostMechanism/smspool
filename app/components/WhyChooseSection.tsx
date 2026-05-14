const Star = () => (
  <svg className="w-4 h-4 fill-yellow-400 inline" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.953 2.777c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.951-.69l1.284-3.957z"/>
  </svg>
)

const TrustpilotStar = () => (
  <svg className="w-4 h-4 fill-green-500 inline" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.953 2.777c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.951-.69l1.284-3.957z"/>
  </svg>
)

const reviews = [
  {
    stars: 5,
    type: 'google',
    title: 'Smooth process',
    body: 'Had an ease of not being able to buy one of the member top-end and the system delivers the result within 30 seconds of me adding him. 100% only why use there for now.',
    name: 'Graham',
  },
  {
    stars: 5,
    type: 'trustpilot',
    title: 'Cheap and reliable service',
    body: 'Cheap and reliable, easy to navigate and use. Since the website service, I haven\'t tried any others because there are many because I found this first and always liked it.',
    name: 'Sandy',
  },
  {
    stars: 5,
    type: 'google',
    title: 'Best SMS provider',
    body: 'Best SMS provider by far, good prices, good UX and great selection, just perfect, good customer satisfaction and today only, I recommend this site.',
    name: 'Carren',
  },
  {
    stars: 5,
    type: 'google',
    title: 'Most reliable SMS verifications',
    body: 'Provides the best service for the past four years. And SMSPool provides the phone numbers and makes this happen really easily.',
    name: 'Rick',
  },
  {
    stars: 5,
    type: 'trustpilot',
    title: 'Convenient SMS verifications',
    body: 'Do not worry about your credit if the number doesn\'t work since this has never before been in.',
    name: 'Gus',
  },
  {
    stars: 5,
    type: 'google',
    title: 'Best SMS Service without a doubt!',
    body: 'Their friendly service has truly been a game changer for my business. From day one, I was impressed in the ease and use. I plan to continue to use it.',
    name: 'Pablo Romero',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why choose SMSPool?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, j) =>
                    r.type === 'trustpilot' ? <TrustpilotStar key={j} /> : <Star key={j} />
                  )}
                </div>
                {r.type === 'trustpilot' ? (
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400">Trustpilot</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-xs text-gray-400">Google</span>
                  </div>
                )}
              </div>
              <p className="font-semibold text-gray-900 text-sm mb-2">{r.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{r.body}</p>
              <p className="text-xs font-semibold text-gray-600">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
