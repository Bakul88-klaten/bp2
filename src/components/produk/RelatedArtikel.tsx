'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'
import { artikelByProduk } from '@/lib/artikel-data'
import { warnaClass, type WarnaProduk } from '@/lib/produk-data'

export default function RelatedArtikel({
  produkSlug,
  warna,
}: {
  produkSlug: string
  warna: WarnaProduk
}) {
  const artikel = artikelByProduk(produkSlug)
  const c = warnaClass[warna]

  if (artikel.length === 0) return null

  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Artikel &amp; Panduan Terkait
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pelajari lebih dalam sebelum menentukan pilihan polis Anda.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {artikel.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/produk/${produkSlug}/${a.slug}`}
                className={`group block h-full p-5 rounded-xl border-2 ${c.border} bg-white hover:shadow-lg transition-shadow`}
              >
                <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${c.text} mb-2`}>
                  <FileText className="w-3.5 h-3.5" />
                  {a.kategori}
                </span>
                <h3 className="font-semibold text-foreground mb-1">{a.judulSingkat}</h3>
                <p className="text-sm text-muted-foreground mb-3">{a.deskripsi}</p>
                <span className={`inline-flex items-center gap-1 text-sm font-medium ${c.text}`}>
                  Baca Selengkapnya
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
