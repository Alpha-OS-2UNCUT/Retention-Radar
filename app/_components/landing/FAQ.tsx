'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '../ui/FadeIn'

const FAQS = [
  {
    q: 'Is this a CRM?',
    a: 'No. Retention Radar is not a CRM. CRMs store client data. Retention Radar analyses relationship health and tells you what to do next. It is focused on decisions and actions, not data storage.',
  },
  {
    q: 'Does the AI replace my judgement?',
    a: 'Never. The AI organises complexity, identifies patterns, and recommends actions. Every final decision stays with you. Retention Radar is designed to augment your thinking, not replace it.',
  },
  {
    q: 'Do customers see Airtable or any other tool behind the scenes?',
    a: 'No. Retention Radar is a purpose-built workspace. The underlying infrastructure is never visible to your clients.',
  },
  {
    q: 'Who is this best for?',
    a: 'Service-based businesses that rely on long-term, repeat client relationships — marketing agencies, SEO firms, recruitment agencies, consultants, accountancy firms, and software agencies.',
  },
  {
    q: 'Is this fully automated yet?',
    a: 'Retention Radar is currently in early validation with pilot customers. Core features are live. We are building with real users before adding full automation layers.',
  },
  {
    q: 'How much does it cost?',
    a: 'Early pilot pricing starts from £150/month. This price is being validated through customer interviews before formal launch.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-slate-800/60 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-medium text-slate-200 group-hover:text-white transition-colors text-sm sm:text-base">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full border border-slate-700 group-hover:border-brand-cyan/40 flex items-center justify-center transition-colors"
        >
          <svg className="w-3 h-3 text-slate-400 group-hover:text-brand-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Common questions.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glass border border-slate-700/40 px-6 rounded-2xl">
            {FAQS.map((f, i) => (
              <FAQItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
