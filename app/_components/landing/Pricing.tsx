import { FadeIn } from '../ui/FadeIn'

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5">
              Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Validation pricing
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              Early pilot pricing while Retention Radar is being validated with service businesses.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-md mx-auto">
            <div
              className="glass border border-brand-cyan/30 p-8 text-center relative overflow-hidden"
              style={{ borderRadius: '1.5rem' }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.12) 0%, transparent 70%)' }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-green/30 text-brand-green bg-brand-green/5">
                  Early Pilot Access
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-white">£150</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">Price will be validated through customer interviews before launch</p>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {[
                    'Full access to the Daily Command Centre',
                    'Client relationship health mapping',
                    'AI-powered action recommendations',
                    'Onboarding support from the founder',
                    'Direct input into the product roadmap',
                    'Locked-in early pilot rate',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="block w-full py-3.5 rounded-xl bg-brand-cyan text-[#030712] font-semibold text-sm glow-btn text-center"
                >
                  Book a 20-minute Research Call
                </a>
                <p className="text-xs text-slate-500 mt-3">No commitment required. Just a conversation.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
