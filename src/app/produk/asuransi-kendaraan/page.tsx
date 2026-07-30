import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductBreadcrumb from '@/components/produk/ProductBreadcrumb'
import ExpertBox from '@/components/produk/ExpertBox'
import FAQSection from '@/components/produk/FAQSection'
import RelatedProducts from '@/components/produk/RelatedProducts'
import CTABanner from '@/components/produk/CTABanner'
import JsonLd from '@/components/produk/JsonLd'
import { breadcrumbSchema, insuranceServiceSchema } from '@/lib/schema'
import { CheckCircle2, Waves, Scale, HeartPulse, Users2, Calculator, ArrowRight } from 'lucide-react'
import HeroSection from './HeroSection'
import ProcessSteps from '../_shared/ProcessSteps'

const PATH = '/produk/asuransi-kendaraan'

export const metadata: Metadata = {
  title: 'Asuransi Kendaraan Batam — All Risk & TLO Mobil Motor | Batam Proteksi',
  description:
    'Asuransi mobil dan motor All Risk maupun TLO untuk kendaraan pribadi dan armada usaha di Batam. Konsultasi dan estimasi premi gratis bersama Tono.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: 'Asuransi Kendaraan Batam - Batam Proteksi',
    description: 'Asuransi mobil dan motor All Risk maupun TLO untuk warga dan pelaku usaha di Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'website',
  },
}

const allRiskFeatures = [
  'Kerusakan sebagian akibat kecelakaan ringan hingga berat',
  'Kerusakan total (di atas 75%) dan kehilangan kendaraan',
  'Cocok untuk kendaraan baru atau yang dipakai setiap hari',
  'Nilai pertanggungan mengikuti kondisi kendaraan saat ini',
]

const tloFeatures = [
  'Hanya menanggung kerugian total (kerusakan di atas 75%)',
  'Menanggung kehilangan akibat pencurian',
  'Premi lebih terjangkau dibanding All Risk',
  'Cocok untuk kendaraan usia menengah ke atas',
]

const perluasan = [
  { icon: Waves, label: 'Perluasan Banjir & Angin Topan' },
  { icon: Scale, label: 'Tanggung Jawab Hukum Pihak Ketiga' },
  { icon: HeartPulse, label: 'Kecelakaan Diri Pengemudi & Penumpang' },
  { icon: Users2, label: 'Perluasan Huru-Hara & Kerusuhan' },
]

const langkahKlaim = [
  {
    title: 'Amankan Lokasi & Lapor',
    desc: 'Segera hubungi Tono via WhatsApp begitu kecelakaan terjadi, dokumentasikan kondisi kendaraan dan lokasi kejadian.',
  },
  {
    title: 'Verifikasi & Survei',
    desc: 'Pihak asuransi melakukan survei kerusakan, termasuk pengecekan di bengkel rekanan bila diperlukan.',
  },
  {
    title: 'Perbaikan / Ganti Rugi',
    desc: 'Kendaraan diperbaiki di bengkel rekanan untuk klaim sebagian, atau diproses ganti rugi untuk klaim total.',
  },
  {
    title: 'Klaim Selesai',
    desc: 'Tono memastikan seluruh proses berjalan lancar hingga kendaraan Anda kembali bisa digunakan.',
  },
]

const faqItems = [
  {
    question: 'Apa bedanya All Risk dan TLO?',
    answer:
      'All Risk menanggung kerusakan sebagian maupun total, sedangkan TLO (Total Loss Only) hanya menanggung kerugian total di atas 75% atau kehilangan kendaraan. Pemilihan biasanya disesuaikan dengan usia kendaraan dan intensitas pemakaian harian.',
  },
  {
    question: 'Apakah kendaraan CBU atau eks luar negeri bisa diasuransikan?',
    answer:
      'Bisa, selama dokumen kendaraan seperti STNK dan BPKB lengkap dan sah. Nilai pertanggungan disesuaikan dengan harga pasar kendaraan tersebut di Indonesia saat ini.',
  },
  {
    question: 'Apakah kerusakan akibat banjir ditanggung?',
    answer:
      'Perlu perluasan jaminan banjir dan angin topan yang ditambahkan di luar paket dasar, mengingat beberapa ruas jalan di Batam rawan genangan saat hujan deras.',
  },
  {
    question: 'Bagaimana jika kendaraan dipakai untuk armada usaha atau ojek online?',
    answer:
      'Tetap bisa diasuransikan dengan penyesuaian rate karena intensitas pemakaian yang lebih tinggi dibanding kendaraan pribadi harian. Tono akan membantu menyesuaikan jenis jaminan yang paling sesuai.',
  },
  {
    question: 'Apakah premi kendaraan bisa dihitung dulu sebelum mendaftar?',
    answer:
      'Bisa. Anda dapat mencoba kalkulator estimasi premi di halaman utama Batam Proteksi, atau langsung chat Tono untuk perhitungan yang lebih akurat sesuai kondisi kendaraan Anda.',
  },
]

export default function AsuransiKendaraanPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Kendaraan', url: PATH },
        ])}
      />
      <JsonLd
        data={insuranceServiceSchema({
          name: 'Asuransi Kendaraan Batam Proteksi',
          description:
            'Layanan asuransi kendaraan All Risk dan TLO untuk mobil dan motor pribadi maupun armada usaha di Batam.',
          path: PATH,
          serviceType: 'Asuransi Kendaraan',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Kendaraan' },
        ]}
      />

      <HeroSection />

      {/* Konteks Lokal Batam */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Karakter Jalan Batam yang Perlu Diperhitungkan
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Berkendara di Batam punya tantangannya sendiri. Jembatan Barelang yang menghubungkan
              Batam dengan Rempang dan Galang punya ruas jalan berkelok dan menanjak di beberapa
              titik, cukup berisiko saat malam hari atau ketika hujan deras mengguyur. Di dalam
              kota, kepadatan lalu lintas di sekitar Batam Center, Nagoya, dan jalur menuju Bandara
              Hang Nadim kerap meningkat tajam pada jam berangkat dan pulang kerja karyawan
              pabrik-pabrik di kawasan industri.
            </p>
            <p>
              Batam juga punya karakter unik: cukup banyak kendaraan CBU (Completely Built-Up)
              maupun kendaraan bekas pakai yang beredar mengikuti status kawasan perdagangan
              bebasnya. Kondisi ini membuat penentuan nilai pertanggungan dan ketersediaan suku
              cadang menjadi hal yang penting didiskusikan sejak awal, bukan setelah klaim
              diajukan.
            </p>
            <p>
              Di sisi lain, genangan air musiman kerap muncul di beberapa ruas jalan seperti
              sekitar Batu Aji dan Sagulung ketika hujan deras, yang berisiko membuat kendaraan
              mogok akibat air masuk ke mesin. Bagi perusahaan yang mengoperasikan armada
              distribusi antar kawasan industri dan pelabuhan, mobilitas tinggi ini juga berarti
              paparan risiko kecelakaan yang lebih sering dibanding kendaraan pribadi biasa.
            </p>
          </div>
        </div>
      </section>

      {/* All Risk vs TLO */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-600 mb-4">
              Pilihan Jaminan
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              All Risk atau TLO, Mana yang Sesuai Kendaraan Anda?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 md:p-8 shadow-sm">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4">
                Comprehensive
              </span>
              <h3 className="text-xl font-bold text-foreground mb-4">All Risk</h3>
              <ul className="space-y-3">
                {allRiskFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 md:p-8 shadow-sm">
              <span className="inline-block px-3 py-1 bg-slate-600 text-white text-xs font-semibold rounded-full mb-4">
                Total Loss Only
              </span>
              <h3 className="text-xl font-bold text-foreground mb-4">TLO</h3>
              <ul className="space-y-3">
                {tloFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Perluasan */}
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-sm font-medium text-muted-foreground mb-4">
              Perluasan jaminan tambahan yang tersedia
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {perluasan.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-full text-sm text-foreground"
                >
                  <p.icon className="w-4 h-4 text-blue-600" />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/#produk-unggulan"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
            >
              <Calculator className="w-4 h-4" />
              Coba Hitung Estimasi Premi Kendaraan Anda
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProcessSteps
        title="Proses Klaim Asuransi Kendaraan"
        subtitle="Cepat dan jelas tahapannya, Tono dampingi sejak kejadian hingga kendaraan Anda kembali normal."
        steps={langkahKlaim}
        accent="blue"
      />

      <section className="pb-14 md:pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="30 Juli 2026" />
        </div>
      </section>

      <FAQSection
        title="Pertanyaan Seputar Asuransi Kendaraan"
        intro="Pertanyaan yang paling sering diajukan pemilik kendaraan sebelum berdiskusi dengan Tono."
        items={faqItems}
      />

      <RelatedProducts currentSlug="asuransi-kendaraan" />

      <CTABanner
        heading="Siap Melindungi Mobil atau Motor Anda?"
        subheading="Chat Tono untuk diskusi jenis jaminan yang paling pas dengan kendaraan dan kebutuhan Anda di Batam."
        waMessage="Halo Tono, saya ingin konsultasi tentang Asuransi Kendaraan untuk mobil/motor saya di Batam."
      />

      <Footer />
    </main>
  )
}
