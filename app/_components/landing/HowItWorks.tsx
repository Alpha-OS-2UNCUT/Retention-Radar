import { FadeIn } from '../ui/FadeIn'

const STEPS = [
  {
    num: '01',
    title: 'Add your clients',
    desc: 'Import or manually add your client list. Takes less than 5 minutes to get started.',
    color: 'text-brand-cyan',
    border: 'border-brand-cyan/30',
    bg: 'bg-brand-cyan/5',
  },
  {
    num: '02',
    title: 'Log client interactions',
    desc: 'Record calls, emails, meetings, and notes as they happen throughout your week.',
    color: 'text-brand-blue',
    border: 'border-brand-blue/30',
    bg: 'bg-brand-blue/5',
  },
  {
    num: '03',
    title: 'Radar maps relationship health',
    desc: 'Retention Radar analyses patterns, tracks engagement changes, and builds a health score for every client.',
    color: 'text-brand-green',
    border: 'border-brand-green/30',
    bg: 'bg-brand-green/5',
  },
  {
    num: '04',
    title: 'AI recommends the next best action',
    desc: 'Every morning you see who to prioritise, why they need attention, and exactly what to do next.',
    color: 'text-brand-cyan',
    border: 'border-brand-cyan/30',
    bg: 'bg-brand-cyan/5',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 dot-pattern">
      {/* Fade edges */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #030712 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Value in under 10 minutes.
            </h2>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-brand-cyan/30 via-brand-cyan/15 to-transparent -translate-x-1/2" />

          <div className="grid gap-8 lg:gap-12">
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-6 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`glass p-6 ${step.bg} border ${step.border}`}>
                      <div className={`text-xs font-mono font-bold mb-3 ${step.color}`}>{step.num}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className={`hidden lg:flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div
                      className={`w-16 h-16 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center text-2xl font-bold ${step.color} font-mono`}
                    >
                      {step.num}
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
