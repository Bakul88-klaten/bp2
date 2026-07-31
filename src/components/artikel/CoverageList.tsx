import { CheckCircle2, XCircle } from 'lucide-react'
import { warnaClass, type WarnaProduk } from '@/lib/produk-data'

export default function CoverageList({
  warna,
  ditanggung,
  tidakDitanggung,
}: {
  warna: WarnaProduk
  ditanggung: string[]
  tidakDitanggung: string[]
}) {
  const c = warnaClass[warna]

  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div
        className={`rounded-2xl border-2 ${c.border} bg-white p-6 shadow-xl ${c.shadow} hover:shadow-2xl transition-shadow duration-300`}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-9 h-9 rounded-lg ${c.solid} flex items-center justify-center flex-shrink-0`}>
            <CheckCircle2 className="w-4.5 h-4.5 text-white" />
          </div>
          <h3 className="font-bold text-foreground text-base md:text-lg">Yang Dijamin</h3>
        </div>
        <ul className="space-y-3">
          {ditanggung.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className={`w-5 h-5 ${c.text} flex-shrink-0 mt-0.5`} />
              <span className="text-sm md:text-[15px] text-foreground/90 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-6 shadow-lg shadow-gray-300/40">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-lg bg-gray-400 flex items-center justify-center flex-shrink-0">
            <XCircle className="w-4.5 h-4.5 text-white" />
          </div>
          <h3 className="font-bold text-foreground text-base md:text-lg">Yang Tidak Dijamin</h3>
        </div>
        <ul className="space-y-3">
          {tidakDitanggung.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-[15px] text-foreground/90 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
