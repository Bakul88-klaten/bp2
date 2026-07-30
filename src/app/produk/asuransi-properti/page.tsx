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
import {
  Flame,
  Zap,
  Cloud,
  PlaneLanding,
  Waves,
  Activity,
  Users,
  Scale,
  Home,
  Store,
  Warehouse,
  Factory,
} from 'lucide-react'
import HeroSection from './HeroSection'
import ProcessSteps from '../_shared/ProcessSteps'

const PATH = '/produk/asuransi-properti'

export const metadata: Metadata = {
  title: 'Asuransi Properti Batam — Rumah, Ruko & Gudang | Batam Proteksi',
  description:
    'Lindungi rumah, ruko, gudang, dan pabrik Anda di Batam dari risiko kebakaran, petir, hingga bencana alam. Konsultasi gratis bersama Tono, praktisi asuransi berpengalaman.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: 'Asuransi Properti Batam - Batam Proteksi',
    description:
      'Proteksi rumah, ruko, gudang, dan pabrik Anda di Batam dari risiko kebakaran dan bencana.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'website',
  },
}

const cakupan = [
  {
    icon: Flame,
    title: 'Api & Petir',
    desc: 'Kerugian akibat kebakaran langsung maupun sambaran petir yang merusak bangunan dan isinya.',
  },
  {
    icon: Zap,
    title: 'Ledakan',
    desc: 'Ledakan dari dalam maupun luar bangunan, termasuk instalasi gas dan jaringan listrik.',
  },
  {
    icon: Cloud,
    title: 'Asap',
    desc: 'Kerusakan akibat asap dari kebakaran di lokasi Anda maupun bangunan di sekitarnya.',
  },
  {
    icon: PlaneLanding,
    title: 'Kejatuhan Pesawat',
    desc: 'Kerugian akibat benturan atau kejatuhan pesawat udara dan bagiannya — bagian jaminan dasar (FLEXAS).',
  },
  {
    icon: Waves,
    title: 'Perluasan Banjir & Angin Topan',
    desc: 'Tambahan jaminan untuk menutup risiko genangan air dan angin kencang saat cuaca ekstrem.',
  },
  {
    icon: Activity,
    title: 'Perluasan Gempa Bumi',
    desc: 'Proteksi tambahan bagi bangunan di area yang berisiko terhadap getaran atau pergerakan tanah.',
  },
  {
    icon: Users,
    title: 'Huru-Hara & Kerusuhan',
    desc: 'Kerusakan akibat kerusuhan, pemogokan, atau tindakan perusakan yang meluas (SRCC).',
  },
  {
    icon: Scale,
    title: 'Tanggung Jawab Hukum Pihak Ketiga',
    desc: 'Ganti rugi bila kebakaran di properti Anda merembet ke bangunan tetangga — penting untuk kawasan ruko padat seperti Nagoya.',
  },
]

const objekProteksi = [
  {
    icon: Home,
    title: 'Rumah Tinggal',
    desc: 'Hunian pribadi di seluruh wilayah Batam, dari rumah tapak hingga rumah cluster.',
  },
  {
    icon: Store,
    title: 'Ruko & Rukan',
    desc: 'Bangunan usaha di pusat perniagaan seperti Nagoya, Jodoh, dan Batam Center.',
  },
  {
    icon: Warehouse,
    title: 'Gudang & Pergudangan',
    desc: 'Fasilitas penyimpanan barang di jalur logistik dekat Batu Ampar dan Kabil.',
  },
  {
    icon: Factory,
    title: 'Pabrik & Kantor',
    desc: 'Bangunan produksi dan perkantoran di kawasan industri seperti Batamindo dan Panbil.',
  },
]

const langkahKlaim = [
  {
    title: 'Lapor ke Tono',
    desc: 'Hubungi via WhatsApp begitu kejadian terjadi, sertakan foto atau video kondisi kerusakan.',
  },
  {
    title: 'Survei & Dokumentasi',
    desc: 'Tim asuransi melakukan survei lapangan untuk memverifikasi penyebab dan besar kerugian.',
  },
  {
    title: 'Pengajuan Berkas',
    desc: 'Tono membantu menyiapkan dan melengkapi dokumen klaim ke perusahaan asuransi mitra.',
  },
  {
    title: 'Pencairan Ganti Rugi',
    desc: 'Dana klaim dicairkan setelah verifikasi selesai; Tono terus memantau hingga tuntas.',
  },
]

const faqItems = [
  {
    question: 'Apakah rumah kontrakan atau ruko sewa bisa diasuransikan?',
    answer:
      'Bisa. Baik pemilik maupun penyewa yang memiliki kepentingan atas bangunan dapat mengajukan asuransi properti, selama dilengkapi bukti kepemilikan atau perjanjian sewa yang jelas.',
  },
  {
    question: 'Apakah risiko banjir dan gempa otomatis ditanggung?',
    answer:
      'Tidak otomatis. Jaminan dasar (FLEXAS) hanya mencakup kebakaran, petir, ledakan, kejatuhan pesawat, dan asap. Banjir, angin topan, dan gempa bumi adalah perluasan jaminan yang perlu ditambahkan sesuai kondisi lokasi properti Anda.',
  },
  {
    question: 'Bagaimana cara menentukan nilai pertanggungan yang tepat?',
    answer:
      'Nilai pertanggungan sebaiknya mengacu pada nilai bangunan dan/atau isi properti saat ini, bukan harga beli bertahun-tahun lalu. Tono akan membantu menghitung agar polis tidak under-insurance saat terjadi klaim.',
  },
  {
    question: 'Apakah gudang yang menyimpan barang milik pelanggan bisa diasuransikan?',
    answer:
      'Bisa. Selain bangunan, Anda dapat menambahkan jaminan atas isi gudang (stok/inventory), cocok untuk pelaku logistik dan pergudangan di sekitar Batu Ampar maupun Kabil.',
  },
  {
    question: 'Berapa lama proses klaim kebakaran biasanya selesai?',
    answer:
      'Lamanya bergantung pada kompleksitas kasus dan kelengkapan dokumen. Tono mendampingi sejak pelaporan awal hingga dana cair agar prosesnya berjalan secepat mungkin.',
  },
]

export default function AsuransiPropertiPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Properti', url: PATH },
        ])}
      />
      <JsonLd
        data={insuranceServiceSchema({
          name: 'Asuransi Properti Batam Proteksi',
          description:
            'Layanan asuransi properti untuk rumah tinggal, ruko, gudang, dan pabrik di Batam.',
          path: PATH,
          serviceType: 'Asuransi Properti',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Properti' },
        ]}
      />

      <HeroSection />

      {/* Konteks Lokal Batam */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Kenapa Properti di Batam Butuh Proteksi yang Tepat Sasaran
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Batam berkembang sebagai kawasan industri padat, mulai dari pabrik elektronik dan
              galangan kapal di Kawasan Industri Batamindo (Mukakuning), Kabil Integrated
              Industrial Estate, hingga Kawasan Industri Panbil. Di balik pertumbuhan ini, nilai
              aset bangunan dan mesin produksi yang tersimpan di dalamnya ikut membesar — namun
              proteksinya sering luput dari perhatian sampai risiko benar-benar terjadi.
            </p>
            <p>
              Di pusat kota, deretan ruko di Nagoya, Jodoh, dan Batam Center umumnya berdiri
              berhimpitan dengan jarak antar bangunan yang sempit. Begitu satu unit terbakar, api
              mudah merembet ke unit sebelah. Karena itu, tanggung jawab hukum terhadap kerugian
              pihak ketiga menjadi pertimbangan yang sama pentingnya dengan nilai bangunan Anda
              sendiri.
            </p>
            <p>
              Cuaca tropis Batam juga berperan: hujan deras disertai petir cukup sering muncul
              pada masa pancaroba, salah satu pemicu umum korsleting listrik yang berujung
              kebakaran — terutama pada instalasi listrik rumah atau ruko lama yang belum pernah
              diperbarui. Sementara itu, pertumbuhan perumahan baru di kawasan seperti Sekupang
              dan Tanjung Piayu, serta aktivitas bongkar-muat di sekitar Pelabuhan Batu Ampar,
              menambah jenis risiko yang perlu dipertimbangkan sesuai lokasi dan penggunaan
              bangunan masing-masing.
            </p>
          </div>
        </div>
      </section>

      {/* Cakupan Jaminan */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-orange-50 rounded-full text-sm font-medium text-orange-600 mb-4">
              Cakupan Jaminan
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Risiko yang Ditanggung Asuransi Properti
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cakupan.map((item) => (
              <div
                key={item.title}
                className="p-5 bg-white rounded-xl border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 bg-orange-50 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objek yang Bisa Diasuransikan */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Jenis Properti yang Bisa Dilindungi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Baik untuk kebutuhan pribadi maupun usaha, berikut objek yang umum diasuransikan
              klien Tono di Batam.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {objekProteksi.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border-2 border-orange-200 bg-orange-50/40 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                  <item.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        title="Proses Klaim Asuransi Properti"
        subtitle="Sederhana dan terus didampingi Tono dari awal hingga dana cair."
        steps={langkahKlaim}
        accent="orange"
      />

      {/* Expert box */}
      <section className="pb-14 md:pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="30 Juli 2026" />
        </div>
      </section>

      <FAQSection
        title="Pertanyaan Seputar Asuransi Properti"
        intro="Hal-hal yang paling sering ditanyakan klien Tono sebelum mengasuransikan rumah, ruko, atau gudang mereka."
        items={faqItems}
      />

      <RelatedProducts currentSlug="asuransi-properti" />

      <CTABanner
        heading="Punya Rumah, Ruko, atau Gudang di Batam?"
        subheading="Konsultasikan kondisi properti Anda ke Tono. Estimasi nilai pertanggungan dan pilihan perluasan jaminan bisa didiskusikan gratis via WhatsApp."
        waMessage="Halo Tono, saya ingin konsultasi tentang Asuransi Properti untuk properti saya di Batam."
      />

      <Footer />
    </main>
  )
}
