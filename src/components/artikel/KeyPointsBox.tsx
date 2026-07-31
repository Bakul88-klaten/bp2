import { CheckCircle2 } from 'lucide-react'
import { warnaClass, type WarnaProduk } from '@/lib/produk-data'

export default function KeyPointsBox({
  warna,
  title,
  items,
}: {
  warna: WarnaProduk
  title: string
  items: string[]
}) {
  const c = warnaClass[warna]

  return (
    <div className={`rounded-2xl ${c.bg} border ${c.border} p-6 md:p-7 shadow-xl ${c.shadow} hover:shadow-2xl transition-shadow duration-300`}>
      <h3 className="font-bold text-foreground text-base md:text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <CheckCircle2 className={`w-5 h-5 ${c.text} flex-shrink-0 mt-0.5`} />
            <span className="text-sm md:text-[15px] text-foreground/90 leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
