import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductBreadcrumb from '@/components/produk/ProductBreadcrumb'
import CTABanner from '@/components/produk/CTABanner'
import JsonLd from '@/components/produk/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { produkKategori, warnaClass } from '@/lib/produk-data'
import { ShieldCheck, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Produk Asuransi Batam | Properti, Kendaraan, Cargo & Lainnya - Batam Proteksi',
  description:
    'Katalog lengkap produk asuransi lokal Batam Proteksi: Properti, Kendaraan, Liability, Cargo, Marine, hingga Engineering & Machinery. Konsultasi gratis bersama Tono.',
  alternates: { canonical: 'https://batamproteksi.biz.id/produk' },
  openGraph: {
    title: 'Produk Asuransi Batam Proteksi',
    description:
      'Pilih perlindungan yang sesuai kebutuhan Anda di Batam: properti, kendaraan, cargo, dan lainnya.',
    url: 'https://batamproteksi.biz.id/produk',
    type: 'website',
  },
}

export default function ProdukHubPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
        ])}
      />
      <Header />
      <ProductBreadcrumb items={[{ label: 'Produk Asuransi' }]} />

      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-5">
            <ShieldCheck className="w-4 h-4" />
            Katalog Produk
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 max-w-3xl mx-auto">
            Produk Asuransi Lokal untuk Warga &amp; Pelaku Usaha Batam
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Dari rumah tinggal di Batam Center, ruko di Nagoya, kendaraan operasional, hingga
            kargo yang keluar-masuk Pelabuhan Batu Ampar — Tono membantu Anda menemukan
            perlindungan yang tepat, bukan sekadar polis generik.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produkKategori.map((p) => {
              const c = warnaClass[p.warna]
              const inner = (
                <div
                  className={`h-full p-6 rounded-2xl border-2 ${c.border} ${
                    p.status === 'live'
                      ? `shadow-lg ${c.shadow} hover:shadow-2xl hover:-translate-y-1`
                      : 'opacity-75'
                  } transition-all duration-300 bg-white group`}
                >
                  <div
                    className={`w-14 h-14 ${c.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <p.icon className={`w-7 h-7 ${c.text}`} />
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2">{p.nama}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{p.deskripsi}</p>
                  {p.status === 'live' ? (
                    <span className={`inline-flex items-center gap-1 text-sm font-semibold ${c.text}`}>
                      Lihat Selengkapnya
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                      <Clock className="w-3.5 h-3.5" />
                      Konten segera hadir
                    </span>
                  )}
                </div>
              )
              return p.status === 'live' ? (
                <Link key={p.slug} href={`/produk/${p.slug}`}>
                  {inner}
                </Link>
              ) : (
                <div key={p.slug}>{inner}</div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Belum Yakin Produk Mana yang Anda Butuhkan?"
        subheading="Ceritakan kondisi Anda ke Tono via WhatsApp — dibantu memilih perlindungan yang sesuai kebutuhan dan budget, tanpa paksaan."
        waMessage="Halo Tono, saya masih bingung menentukan produk asuransi yang cocok untuk saya. Mohon dibantu."
      />
      <Footer />
    </main>
  )
}
