import { CalendarClock, Clock, type LucideIcon } from 'lucide-react'
import { warnaClass, type WarnaProduk } from '@/lib/produk-data'
import { artikelWarna } from '@/lib/artikel-warna'

export default function ArticleHero({
  warna,
  kategori,
  icon: Icon,
  title,
  intro,
  lastUpdated,
  estimasiBaca,
}: {
  warna: WarnaProduk
  kategori: string
  icon: LucideIcon
  title: string
  intro: string
  lastUpdated: string
  estimasiBaca: string
}) {
  const c = warnaClass[warna]
  const g = artikelWarna[warna]

  return (
    <section
      className={`relative pt-10 pb-12 md:pt-14 md:pb-16 bg-gradient-to-br ${g.gradientFrom} via-white to-white overflow-hidden`}
    >
      <div className="absolute top-8 right-[6%] w-40 h-40 rounded-full blur-2xl opacity-60 -z-0" />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <span
          className={`inline-flex items-center gap-2 px-4 py-2 ${c.bg} rounded-full text-sm font-medium ${c.text} mb-5`}
        >
          <Icon className="w-4 h-4" />
          {kategori}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
          {title}
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">{intro}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span
              className={`w-6 h-6 rounded-full ${c.solid} text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0`}
            >
              T
            </span>
            Ditulis &amp; ditinjau oleh Tono
          </span>
          <span className="flex items-center gap-1">
            <CalendarClock className="w-3.5 h-3.5" />
            Diperbarui {lastUpdated}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {estimasiBaca}
          </span>
        </div>
      </div>
    </section>
  )
}
