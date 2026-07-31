import Link from 'next/link'
import { ArrowRight, BookOpen, FileText } from 'lucide-react'
import { warnaClass, produkKategori, type WarnaProduk } from '@/lib/produk-data'
import { artikelSiblings } from '@/lib/artikel-data'

export default function ArticleCrossLinks({
  warna,
  produkSlug,
  currentSlug,
}: {
  warna: WarnaProduk
  produkSlug: string
  currentSlug: string
}) {
  const c = warnaClass[warna]
  const produk = produkKategori.find((p) => p.slug === produkSlug)
  const siblings = artikelSiblings(produkSlug, currentSlug)
  const totalCards = 1 + siblings.length
  const gridClass = totalCards >= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'

  if (!produk) return null

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
          Lanjutkan Membaca dalam Topik Asuransi {produk.namaSingkat}
        </h2>
        <div className={`grid ${gridClass} gap-4`}>
          <Link
            href={`/produk/${produk.slug}`}
            className={`group p-5 rounded-xl border-2 ${c.border} bg-white shadow-md ${c.shadow} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
          >
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${c.text} mb-2`}>
              <BookOpen className="w-3.5 h-3.5" />
              Halaman Pilar
            </span>
            <h3 className="font-semibold text-foreground mb-1">
              Panduan Lengkap {produk.nama}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{produk.deskripsi}</p>
            <span className={`inline-flex items-center gap-1 text-sm font-medium ${c.text}`}>
              Lihat Halaman Produk
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {siblings.map((a) => (
            <Link
              key={a.slug}
              href={`/produk/${produkSlug}/${a.slug}`}
              className={`group p-5 rounded-xl border-2 ${c.border} bg-white shadow-md ${c.shadow} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
            >
              <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${c.text} mb-2`}>
                <FileText className="w-3.5 h-3.5" />
                {a.kategori}
              </span>
              <h3 className="font-semibold text-foreground mb-1">{a.judulSingkat}</h3>
              <p className="text-sm text-muted-foreground mb-3">{a.deskripsi}</p>
              <span className={`inline-flex items-center gap-1 text-sm font-medium ${c.text}`}>
                Baca Artikel
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
