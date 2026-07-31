import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import { warnaClass, type WarnaProduk } from '@/lib/produk-data'
import { artikelWarna } from '@/lib/artikel-warna'

const aspectClass = {
  wide: 'aspect-[21/9]',
  video: 'aspect-video',
  square: 'aspect-square',
} as const

/**
 * Ruang gambar untuk artikel silo.
 *
 * Konvensi file (WEBP): /public/images/artikel/{articleSlug}/{variant}.webp
 * Contoh: /public/images/artikel/cara-hitung-nilai-pertanggungan-properti/header.webp
 *
 * Selama file belum ada, komponen ini menampilkan placeholder kotak putus-putus
 * berisi instruksi gambar apa yang perlu diletakkan. Begitu file webp dengan
 * nama & path yang sesuai sudah diunggah ke /public, komponen ini otomatis
 * merender gambar aslinya lewat next/image — tidak perlu ubah kode apa pun.
 */
export default function ArticleImageSlot({
  warna,
  articleSlug,
  variant,
  label,
  aspect = 'wide',
}: {
  warna: WarnaProduk
  articleSlug: string
  variant: 'header' | 'inline'
  label: string
  aspect?: keyof typeof aspectClass
}) {
  const c = warnaClass[warna]
  const g = artikelWarna[warna]

  const relativePath = `images/artikel/${articleSlug}/${variant}.webp`
  const fileExists = fs.existsSync(path.join(process.cwd(), 'public', relativePath))

  if (fileExists) {
    return (
      <div className={`relative w-full ${aspectClass[aspect]} rounded-2xl overflow-hidden`}>
        <Image
          src={`/${relativePath}`}
          alt={label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative w-full ${aspectClass[aspect]} rounded-2xl border-2 border-dashed ${g.dashedBorder} ${g.softBg} flex flex-col items-center justify-center text-center px-6`}
    >
      <div className={`w-12 h-12 rounded-full ${c.bg} flex items-center justify-center mb-3`}>
        <ImageIcon className={`w-6 h-6 ${c.text}`} />
      </div>
      <p className="text-sm font-medium text-foreground max-w-md">{label}</p>
      <p className="text-xs text-muted-foreground mt-1">
        Taruh file di /public/{relativePath}
      </p>
    </div>
  )
}
