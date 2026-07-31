import { ImageIcon } from 'lucide-react'
import { warnaClass, type WarnaProduk } from '@/lib/produk-data'
import { artikelWarna } from '@/lib/artikel-warna'

const aspectClass = {
  wide: 'aspect-[21/9]',
  video: 'aspect-video',
  square: 'aspect-square',
} as const

/**
 * Ruang gambar yang sengaja dikosongkan (placeholder), BUKAN <img> ke file yang
 * belum ada. Ganti dengan <Image> dari next/image begitu file gambar
 * (ilustrasi Canva atau foto asli) sudah tersedia di /public.
 */
export default function ArticleImageSlot({
  warna,
  label,
  aspect = 'wide',
}: {
  warna: WarnaProduk
  label: string
  aspect?: keyof typeof aspectClass
}) {
  const c = warnaClass[warna]
  const g = artikelWarna[warna]

  return (
    <div
      className={`relative w-full ${aspectClass[aspect]} rounded-2xl border-2 border-dashed ${g.dashedBorder} ${g.softBg} flex flex-col items-center justify-center text-center px-6`}
    >
      <div
        className={`w-12 h-12 rounded-full ${c.bg} flex items-center justify-center mb-3`}
      >
        <ImageIcon className={`w-6 h-6 ${c.text}`} />
      </div>
      <p className="text-sm font-medium text-foreground max-w-md">{label}</p>
      <p className="text-xs text-muted-foreground mt-1">
        Ganti dengan ilustrasi Canva atau foto asli koleksi Anda
      </p>
    </div>
  )
}
