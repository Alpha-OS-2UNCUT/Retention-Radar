import { FadeIn } from '../ui/FadeIn'

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.1) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)' }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            Now accepting pilot customers
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
            Stop letting important client relationships live only{' '}
            <span className="text-gradient">in your head.</span>
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a 20-minute research call. We will learn about your business, show you the concept, and explore whether Retention Radar is a good fit.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan text-[#030712] font-semibold text-base glow-btn"
          >
            Book a 20-minute Research Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="text-xs text-slate-500 mt-4">No commitment. No sales pitch. Just a conversation.</p>
        </FadeIn>
      </div>
    </section>
  )
}
