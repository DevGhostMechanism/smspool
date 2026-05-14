const Star = () => (
  <svg className="w-4 h-4 fill-yellow-400 inline" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.953 2.777c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.951-.69l1.284-3.957z"/>
  </svg>
)

export default function ReviewsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Reviews</h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mb-10">
          Our reviews section is a reflection of the most satisfying and satisfaction your customers
          at SMSPool have provided us reviews on different social media platforms (like Google, Trustpilot,
          and more). We&apos;re committed to providing the best service and building lasting relationships
          with our customers.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: Google Review card */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 max-w-sm">
              {/* Google logo */}
              <div className="flex items-center gap-2 mb-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-semibold text-gray-700 text-sm">Google Reviews</span>
              </div>
              <div className="flex mb-2">
                {[1,2,3,4,5].map(i => <Star key={i}/>)}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                &quot;SMSPool is hands down the best SMS verification service I&apos;ve ever used.
                Fast delivery, reliable numbers, and great pricing. Highly recommend!&quot;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">J</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">James K.</p>
                  <p className="text-xs text-gray-400">Verified User</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Photo + rating */}
          <div className="flex-1 relative">
            {/* Photo placeholder */}
            <div className="w-full max-w-sm h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-200 flex items-end p-4 shadow-md">
              <div className="flex items-center gap-3">
                {/* Person 1 silhouette */}
                <div className="w-16 h-32 relative">
                  <div className="w-12 h-12 rounded-full bg-amber-200 mx-auto mb-1" />
                  <div className="w-16 h-20 bg-gray-700 rounded-t-2xl" />
                </div>
                {/* Person 2 silhouette */}
                <div className="w-16 h-32 relative">
                  <div className="w-12 h-12 rounded-full bg-amber-300 mx-auto mb-1" />
                  <div className="w-16 h-20 bg-gray-600 rounded-t-2xl" />
                </div>
              </div>

              {/* Star overlay card */}
              <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg px-3 py-2">
                <div className="flex mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i}/>)}
                </div>
                <p className="text-xs font-semibold text-gray-700">4.9 / 5.0</p>
                <p className="text-xs text-gray-400">2,400+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
