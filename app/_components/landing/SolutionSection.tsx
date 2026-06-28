import { FadeIn } from '../ui/FadeIn'

export function SolutionSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5">
              The Solution
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Retention Radar turns relationship noise into{' '}
              <span className="text-gradient">daily priorities.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Instead of forcing owners to mentally track every relationship, Retention Radar organises client signals into a clear workspace that answers two questions every morning:
            </p>
            <div className="mt-6 space-y-3">
              {['What should I do next?', 'Who needs me today?'].map((q) => (
                <div key={q} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                  </div>
                  <span className="text-slate-200 font-medium">{q}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Feature cards */}
          <div className="grid gap-4">
            {[
              {
                title: 'Relationship Intelligence',
                desc: 'Continuously analyses client signals to surface who needs attention before problems escalate.',
                color: 'from-brand-cyan/10 to-transparent',
                border: 'border-brand-cyan/20',
                dot: 'bg-brand-cyan',
              },
              {
                title: 'Consistent Prioritisation',
                desc: 'Recommendation quality stays consistent whether you manage 10 clients or 1,000.',
                color: 'from-brand-blue/10 to-transparent',
                border: 'border-brand-blue/20',
                dot: 'bg-brand-blue',
              },
              {
                title: 'AI Analyst — Not Autopilot',
                desc: 'The AI organises complexity and recommends actions. Final decisions always stay with you.',
                color: 'from-brand-green/10 to-transparent',
                border: 'border-brand-green/20',
                dot: 'bg-brand-green',
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.08} direction="left">
                <div
                  className={`glass glass-hover p-5 bg-gradient-to-r ${card.color} border ${card.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 w-2.5 h-2.5 rounded-full flex-shrink-0 ${card.dot}`} />
                    <div>
                      <h3 className="font-semibold text-white mb-1.5">{card.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
