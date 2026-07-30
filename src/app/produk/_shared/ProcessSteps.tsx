'use client'

import { motion } from 'framer-motion'

type Accent = 'orange' | 'blue' | 'cyan' | 'purple' | 'teal' | 'slate'

const accentMap: Record<Accent, { bg: string; text: string; line: string }> = {
  orange: { bg: 'bg-orange-600', text: 'text-orange-600', line: 'bg-orange-200' },
  blue: { bg: 'bg-blue-600', text: 'text-blue-600', line: 'bg-blue-200' },
  cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', line: 'bg-cyan-200' },
  purple: { bg: 'bg-purple-600', text: 'text-purple-600', line: 'bg-purple-200' },
  teal: { bg: 'bg-teal-600', text: 'text-teal-600', line: 'bg-teal-200' },
  slate: { bg: 'bg-slate-600', text: 'text-slate-600', line: 'bg-slate-200' },
}

interface Step {
  title: string
  desc: string
}

export default function ProcessSteps({
  title,
  subtitle,
  steps,
  accent,
}: {
  title: string
  subtitle: string
  steps: Step[]
  accent: Accent
}) {
  const c = accentMap[accent]

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div
            className={`hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 ${c.line}`}
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div
                className={`w-12 h-12 rounded-full ${c.bg} text-white font-bold flex items-center justify-center mx-auto mb-4 relative z-10 shadow-md`}
              >
                {i + 1}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
