import { RadarCanvas } from './RadarCanvas'
import { FadeIn } from '../ui/FadeIn'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-bg">
      {/* Radial glow behind radar */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)' }}
      />
      {/* Left glow */}
      <div
        className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <div>
            {/* Badge */}
            <FadeIn delay={0.05}>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                AI Relationship Intelligence
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white mb-6">
                Know who needs your attention{' '}
                <span className="text-gradient">before clients slip away.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Retention Radar is an AI relationship intelligence workspace that helps service businesses organise client relationships, prioritise follow-ups, and take the right action before retention problems become expensive.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="https://calendly.com/retentionradarhq/retention-radar-test-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-[#030712] font-semibold text-sm glow-btn"
                >
                  Book a 20-minute Research Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 text-sm hover:border-brand-cyan/40 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo — Coming Soon
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xs text-slate-500 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Built for service businesses that rely on repeat clients.
              </p>
            </FadeIn>
          </div>

          {/* Radar */}
          <FadeIn delay={0.15} direction="left" className="flex justify-center">
            <div className="relative w-full max-w-[480px]">
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 65%)' }}
              />
              <RadarCanvas />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #030712)' }}
      />
    </section>
  )
}
