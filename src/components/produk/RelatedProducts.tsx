'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { produkKategori, warnaClass } from '@/lib/produk-data'

export default function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const others = produkKategori.filter((p) => p.slug !== currentSlug)

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Produk Asuransi Lainnya
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Jelajahi pilihan perlindungan lain dari Batam Proteksi sesuai kebutuhan Anda.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((p, i) => {
            const c = warnaClass[p.warna]
            const inner = (
              <div
                className={`h-full p-5 rounded-xl border-2 ${c.border} ${
                  p.status === 'live' ? `shadow-md ${c.shadow} hover:shadow-xl` : 'opacity-70'
                } transition-shadow bg-white group`}
              >
                <div className={`w-11 h-11 ${c.bg} rounded-lg flex items-center justify-center mb-3`}>
                  <p.icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{p.nama}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.deskripsi}</p>
                {p.status === 'live' ? (
                  <span className={`inline-flex items-center gap-1 text-sm font-medium ${c.text}`}>
                    Lihat Detail
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    Segera Hadir
                  </span>
                )}
              </div>
            )
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {p.status === 'live' ? <Link href={`/produk/${p.slug}`}>{inner}</Link> : inner}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
