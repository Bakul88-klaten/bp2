import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductBreadcrumb from '@/components/produk/ProductBreadcrumb'
import ExpertBox from '@/components/produk/ExpertBox'
import FAQSection from '@/components/produk/FAQSection'
import RelatedProducts from '@/components/produk/RelatedProducts'
import CTABanner from '@/components/produk/CTABanner'
import JsonLd from '@/components/produk/JsonLd'
import { breadcrumbSchema, insuranceServiceSchema } from '@/lib/schema'
import { Ship, Plane, Truck, PackageX, Waves, Scale, AlertTriangle, ShieldOff } from 'lucide-react'
import HeroSection from './HeroSection'
import ProcessSteps from '../_shared/ProcessSteps'

const PATH = '/produk/asuransi-cargo'

export const metadata: Metadata = {
  title: 'Asuransi Cargo Batam — Kirim Barang Laut, Udara & Darat | Batam Proteksi',
  description:
    'Lindungi barang kiriman Anda dari dan menuju Batam lewat jalur laut, udara, maupun darat. Cocok untuk eksportir, UKM logistik, dan pengusaha di kawasan FTZ Batam.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: 'Asuransi Cargo Batam - Batam Proteksi',
    description: 'Perlindungan barang kiriman laut, udara, dan darat dari dan menuju Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'website',
  },
}

const jalurPengiriman = [
  {
    icon: Ship,
    title: 'Laut (Marine Cargo)',
    desc: 'Melindungi barang selama pelayaran, termasuk rute ke Singapura dan Malaysia, maupun jalur domestik seperti Tanjungpinang dan Karimun lewat Pelabuhan Batu Ampar, Sekupang, dan Batam Center.',
  },
  {
    icon: Plane,
    title: 'Udara (Air Cargo)',
    desc: 'Untuk barang bernilai tinggi atau pengiriman yang butuh kecepatan, melalui Bandara Hang Nadim menuju kota lain di Indonesia maupun luar negeri.',
  },
  {
    icon: Truck,
    title: 'Darat (Land Cargo)',
    desc: 'Mengamankan barang selama distribusi darat dari pelabuhan menuju gudang atau pabrik di kawasan industri seperti Batamindo dan Kabil.',
  },
]

const risiko = [
  { icon: PackageX, label: 'Kerusakan fisik saat proses bongkar muat' },
  { icon: ShieldOff, label: 'Kehilangan sebagian atau total selama pengiriman' },
  { icon: Scale, label: 'General Average dalam pelayaran laut' },
  { icon: Waves, label: 'Kerusakan akibat cuaca buruk atau gelombang tinggi' },
  { icon: AlertTriangle, label: 'Perluasan risiko perang & pemogokan (rute internasional)' },
]

const langkahKlaim = [
  {
    title: 'Laporkan Segera',
    desc: 'Begitu ditemukan kerusakan atau kehilangan saat penerimaan barang, foto kondisinya dan segera hubungi Tono.',
  },
  {
    title: 'Siapkan Dokumen',
    desc: 'Kumpulkan bill of lading atau surat jalan, packing list, dan bukti kerusakan sebagai kelengkapan klaim.',
  },
  {
    title: 'Survei Kerugian',
    desc: 'Surveyor menilai besar kerugian sesuai jenis, kondisi, dan nilai barang yang dikirim.',
  },
  {
    title: 'Penggantian Diproses',
    desc: 'Tono mengawal proses hingga ganti rugi cair sesuai ketentuan polis.',
  },
]

const faqItems = [
  {
    question: 'Apakah asuransi cargo berlaku untuk pengiriman antar pulau di dalam negeri?',
    answer:
      'Ya. Cakupannya meliputi pengiriman domestik seperti Batam-Tanjungpinang atau Batam-Karimun, maupun pengiriman lintas negara ke Singapura dan Malaysia.',
  },
  {
    question: 'Berapa nilai pertanggungan yang sebaiknya diambil?',
    answer:
      'Umumnya dihitung dari nilai invoice barang ditambah biaya pengiriman dan margin tertentu, agar kerugian yang mungkin timbul — termasuk potensi keuntungan yang hilang — tertutup lebih penuh.',
  },
  {
    question: 'Apakah pengiriman kecil dari UKM juga bisa diasuransikan?',
    answer:
      'Bisa. Asuransi cargo tidak terbatas pada pengiriman skala besar — pelaku usaha kecil yang rutin mengirim barang pun bisa mengasuransikan tiap pengiriman atau menggunakan polis tahunan (open cover).',
  },
  {
    question: 'Bagaimana jika kerusakan terjadi saat bongkar muat di pelabuhan?',
    answer:
      'Selama masih dalam periode pertanggungan yang disepakati (misalnya door-to-door atau warehouse-to-warehouse), kerusakan saat proses bongkar muat termasuk risiko yang bisa diklaim, sesuai klausul yang dipilih.',
  },
  {
    question: 'Apa itu General Average dan kenapa penting untuk kargo laut?',
    answer:
      'General Average adalah prinsip di mana semua pemilik barang dalam satu kapal ikut menanggung kerugian bila nakhoda terpaksa mengorbankan sebagian muatan demi keselamatan pelayaran. Tanpa asuransi, pemilik barang bisa dikenai kontribusi biaya ini meski barangnya sendiri tidak rusak.',
  },
]

export default function AsuransiCargoPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Cargo', url: PATH },
        ])}
      />
      <JsonLd
        data={insuranceServiceSchema({
          name: 'Asuransi Cargo Batam Proteksi',
          description:
            'Layanan asuransi barang kiriman lewat jalur laut, udara, dan darat dari dan menuju Batam.',
          path: PATH,
          serviceType: 'Asuransi Cargo',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Cargo' },
        ]}
      />

      <HeroSection />

      {/* Konteks Lokal Batam */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Batam sebagai Simpul Perdagangan yang Padat Arus Barang
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sebagai bagian dari Kawasan Perdagangan Bebas dan Pelabuhan Bebas Batam-Bintan-
              Karimun (BBK), Batam menjadi salah satu simpul ekspor-impor penting di jalur Selat
              Malaka dan Selat Singapura. Pelabuhan Batu Ampar berperan sebagai pelabuhan kargo
              dan peti kemas utama, sementara Pelabuhan Kabil melayani kargo industri di dekat
              kawasan pabrik, dan Pelabuhan Sekupang serta Batam Center melayani kargo kecil dan
              jalur cepat ke Singapura dan Malaysia.
            </p>
            <p>
              Kawasan industri seperti Batamindo di Mukakuning, Kabil Integrated Industrial
              Estate, dan Panbil menghasilkan volume ekspor komponen elektronik yang cukup besar,
              membuat arus kargo keluar-masuk pelabuhan berlangsung padat setiap harinya. Kondisi
              ini membawa risiko tersendiri: mulai dari kerusakan saat bongkar muat peti kemas,
              cuaca laut yang bisa berubah cepat di Selat Singapura yang ramai lalu lintas kapal,
              hingga risiko selama transit darat dari pelabuhan menuju gudang atau pabrik.
            </p>
            <p>
              Tidak hanya perusahaan besar — banyak pelaku UKM di Batam juga rutin mengirim barang
              antar pulau ke Tanjungpinang dan Karimun, atau lintas negara ke Johor dan Singapura.
              Skala pengiriman yang lebih kecil bukan berarti bebas risiko, sehingga proteksi
              cargo tetap relevan untuk berbagai skala usaha.
            </p>
          </div>
        </div>
      </section>

      {/* Jalur Pengiriman */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-cyan-50 rounded-full text-sm font-medium text-cyan-600 mb-4">
              Jalur yang Dilindungi
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Satu Polis untuk Tiga Jalur Pengiriman
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {jalurPengiriman.map((jalur) => (
              <div
                key={jalur.title}
                className="bg-white rounded-2xl border-2 border-cyan-100 p-6 hover:border-cyan-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-4">
                  <jalur.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{jalur.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{jalur.desc}</p>
              </div>
            ))}
          </div>

          {/* Risiko */}
          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-center text-sm font-medium text-muted-foreground mb-4">
              Risiko yang bisa ditanggung dalam polis cargo
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {risiko.map((r) => (
                <span
                  key={r.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-cyan-200 rounded-full text-sm text-foreground"
                >
                  <r.icon className="w-4 h-4 text-cyan-600" />
                  {r.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps
        title="Proses Klaim Asuransi Cargo"
        subtitle="Dari laporan awal hingga ganti rugi cair, Tono kawal setiap tahap prosesnya."
        steps={langkahKlaim}
        accent="cyan"
      />

      <section className="pb-14 md:pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="30 Juli 2026" />
        </div>
      </section>

      <FAQSection
        title="Pertanyaan Seputar Asuransi Cargo"
        intro="Hal-hal yang sering ditanyakan pelaku usaha sebelum mengasuransikan barang kiriman mereka."
        items={faqItems}
      />

      <RelatedProducts currentSlug="asuransi-cargo" />

      <CTABanner
        heading="Rutin Mengirim Barang dari atau ke Batam?"
        subheading="Diskusikan rute dan jenis barang Anda dengan Tono untuk menentukan perlindungan cargo yang paling sesuai."
        waMessage="Halo Tono, saya ingin konsultasi tentang Asuransi Cargo untuk pengiriman barang saya."
      />

      <Footer />
    </main>
  )
}
