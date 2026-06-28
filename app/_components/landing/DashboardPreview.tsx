import { FadeIn } from '../ui/FadeIn'

const ACTIONS = [
  {
    name: 'Apex Marketing',
    action: 'Send a check-in — no contact in 18 days',
    impact: 'High',
    time: '10 min',
    status: 'watch',
    initials: 'AM',
    color: '#f59e0b',
  },
  {
    name: 'Blue Oak Studio',
    action: 'Schedule Q3 review — delayed 2 weeks',
    impact: 'High',
    time: '30 min',
    status: 'needs-attention',
    initials: 'BO',
    color: '#ef4444',
  },
  {
    name: 'Nexus SEO',
    action: 'Share the updated report — mentioned in last call',
    impact: 'Medium',
    time: '5 min',
    status: 'healthy',
    initials: 'NS',
    color: '#22c55e',
  },
]

const STATUS_COUNTS = [
  { label: 'Healthy', count: 11, color: 'bg-brand-green', text: 'text-brand-green' },
  { label: 'Watch', count: 4, color: 'bg-amber-500', text: 'text-amber-500' },
  { label: 'Needs Attention', count: 2, color: 'bg-red-500', text: 'text-red-400' },
]

export function DashboardPreview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5">
              App Preview
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Your morning command centre.
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              Clarity in under 30 seconds, every day.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Mock dashboard shell */}
          <div className="max-w-4xl mx-auto glass border border-brand-cyan/20 overflow-hidden" style={{ borderRadius: '1.25rem' }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-800/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-brand-green/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-slate-800/60 text-xs text-slate-500 font-mono">
                  app.retentionradar.com
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Monday, 9:04 AM</p>
                  <h3 className="text-lg font-bold text-white">Good morning 👋</h3>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-medium">
                  AI Analyst Ready
                </div>
              </div>

              {/* Relationship health snapshot */}
              <div className="glass p-4 rounded-xl border border-slate-700/40">
                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-3">Relationship Health</p>
                <div className="flex items-center gap-4">
                  {STATUS_COUNTS.map((s) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${s.color}`} />
                      <span className={`text-sm font-semibold ${s.text}`}>{s.count}</span>
                      <span className="text-xs text-slate-500 hidden sm:inline">{s.label}</span>
                    </div>
                  ))}
                  {/* Bar */}
                  <div className="flex-1 hidden sm:flex h-2 rounded-full overflow-hidden bg-slate-800">
                    <div className="h-full bg-brand-green" style={{ width: '65%' }} />
                    <div className="h-full bg-amber-500" style={{ width: '24%' }} />
                    <div className="h-full bg-red-500" style={{ width: '11%' }} />
                  </div>
                </div>
              </div>

              {/* Action cards */}
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-3">What should I do next?</p>
                <div className="space-y-3">
                  {ACTIONS.map((a, i) => (
                    <div
                      key={a.name}
                      className="glass glass-hover p-4 rounded-xl flex items-center gap-4 border border-slate-700/30"
                    >
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-white"
                        style={{ backgroundColor: a.color + '22', border: `1px solid ${a.color}44` }}
                      >
                        <span style={{ color: a.color }}>{a.initials}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-sm font-semibold text-white">{a.name}</span>
                          <span
                            className="text-xs px-1.5 py-0.5 rounded-full"
                            style={{
                              color: a.status === 'healthy' ? '#22c55e' : a.status === 'watch' ? '#f59e0b' : '#ef4444',
                              backgroundColor: a.status === 'healthy' ? 'rgba(34,197,94,0.1)' : a.status === 'watch' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)',
                            }}
                          >
                            {a.status === 'needs-attention' ? 'Needs Attention' : a.status === 'watch' ? 'Watch' : 'Healthy'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 truncate">{a.action}</p>
                      </div>
                      <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
                        <div className="text-right">
                          <p className="text-xs text-slate-500">{a.time}</p>
                          <p className="text-xs font-medium" style={{ color: a.impact === 'High' ? '#06b6d4' : '#94a3b8' }}>{a.impact} impact</p>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
