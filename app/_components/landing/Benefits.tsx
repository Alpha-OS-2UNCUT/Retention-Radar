import { FadeIn } from '../ui/FadeIn'

const BENEFITS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Know who needs attention today',
    desc: 'Start every morning with a clear, ranked view of which clients require your focus and why.',
    color: 'text-brand-cyan',
    border: 'border-brand-cyan/20',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Stop relying on memory',
    desc: 'Move client relationship management from your head into a clear, organised system.',
    color: 'text-brand-blue',
    border: 'border-brand-blue/20',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Keep every client visually mapped',
    desc: 'A calm relationship overview that shows health status without creating alarm.',
    color: 'text-brand-green',
    border: 'border-brand-green/20',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Make follow-up quality more consistent',
    desc: 'Consistent recommendations whether you manage 10 or 1,000 clients.',
    color: 'text-brand-cyan',
    border: 'border-brand-cyan/20',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    title: 'Reduce preventable churn',
    desc: 'Catch the early warning signs before clients quietly decide to leave.',
    color: 'text-brand-blue',
    border: 'border-brand-blue/20',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Protect recurring revenue',
    desc: 'Keep more clients longer and increase the lifetime value of every relationship.',
    color: 'text-brand-green',
    border: 'border-brand-green/20',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5">
              Benefits
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              What you get from day one.
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.07}>
              <div className={`glass glass-hover p-6 h-full border ${b.border}`}>
                <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${b.color} bg-current/10`}
                  style={{ backgroundColor: 'rgba(6,182,212,0.08)' }}>
                  <span className={b.color}>{b.icon}</span>
                </div>
                <h3 className="font-semibold text-white mb-2 text-base">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
