import type { ReactNode } from 'react'
import { Lightbulb } from 'lucide-react'
import { warnaClass, type WarnaProduk } from '@/lib/produk-data'

export default function CaseStudyBox({
  warna,
  label = 'Contoh Kasus',
  title,
  children,
}: {
  warna: WarnaProduk
  label?: string
  title: string
  children: ReactNode
}) {
  const c = warnaClass[warna]

  return (
    <div className={`rounded-2xl border-2 ${c.border} bg-white p-6 md:p-7`}>
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
          <Lightbulb className={`w-4.5 h-4.5 ${c.text}`} />
        </div>
        <span className={`text-xs font-semibold uppercase tracking-wide ${c.text}`}>{label}</span>
      </div>
      <h3 className="font-bold text-foreground text-base md:text-lg mb-2.5">{title}</h3>
      <div className="text-sm md:text-[15px] text-muted-foreground leading-relaxed space-y-2.5">
        {children}
      </div>
    </div>
  )
}
