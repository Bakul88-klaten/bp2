import Link from 'next/link'
import { BadgeCheck, CalendarClock } from 'lucide-react'

export default function ExpertBox({ lastUpdated }: { lastUpdated: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 font-bold text-white text-lg">
        T
      </div>
      <div className="flex-1">
        <p className="text-sm text-foreground leading-relaxed">
          Ditulis &amp; ditinjau langsung oleh{' '}
          <Link href="/#tentang" className="font-semibold text-primary hover:underline">
            Tono
          </Link>
          , Praktisi Asuransi Profesional dengan pengalaman 5+ tahun mendampingi klien pribadi
          maupun pelaku usaha di Batam.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <BadgeCheck className="w-3.5 h-3.5 text-primary" />
            Mitra beberapa perusahaan asuransi terkemuka di Indonesia
          </span>
          <span className="flex items-center gap-1">
            <CalendarClock className="w-3.5 h-3.5 text-primary" />
            Diperbarui {lastUpdated}
          </span>
        </div>
      </div>
    </div>
  )
}
