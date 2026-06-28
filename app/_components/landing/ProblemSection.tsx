import { FadeIn } from '../ui/FadeIn'

const PROBLEMS = [
  { icon: '⏳', label: 'Slower replies' },
  { icon: '📅', label: 'Missed meetings' },
  { icon: '🧊', label: 'Colder conversations' },
  { icon: '⏸️', label: 'Delayed approvals' },
  { icon: '🔕', label: 'Forgotten follow-ups' },
  { icon: '📉', label: 'Fewer stakeholders involved' },
]

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-medium border border-red-500/30 text-red-400 bg-red-500/5">
              The Problem
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Most clients do not leave without warning.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              The warning signs are usually there. They are just scattered across memory, emails, messages, meetings, and missed follow-ups.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {PROBLEMS.map((p, i) => (
            <FadeIn key={p.label} delay={i * 0.06} direction="up">
              <div className="glass glass-hover p-5 flex items-center gap-4">
                <span className="text-2xl">{p.icon}</span>
                <span className="text-slate-300 font-medium text-sm">{p.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
