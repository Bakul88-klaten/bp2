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
import { HardHat, Cpu, Gauge, Truck, CircuitBoard, Scale, TrendingDown } from 'lucide-react'
import HeroSection from './HeroSection'
import ProcessSteps from '../_shared/ProcessSteps'

const PATH = '/produk/asuransi-engineering-machinery'

export const metadata: Metadata = {
  title: 'Asuransi Engineering & Machinery Batam | Batam Proteksi',
  description:
    'Lindungi proyek konstruksi, instalasi mesin, hingga peralatan produksi pabrik Anda di kawasan industri Batam dari risiko kerusakan mendadak. Konsultasi gratis bersama Tono.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: 'Asuransi Engineering & Machinery Batam - Batam Proteksi',
    description: 'Proteksi proyek konstruksi dan mesin produksi di kawasan industri Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'website',
  },
}

const tahapProyek = [
  {
    icon: HardHat,
    fase: 'Tahap Konstruksi',
    title: "Contractor's All Risk (CAR)",
    desc: 'Melindungi proyek pembangunan — perumahan, ruko, perluasan pabrik — dari kerusakan material, alat berat, hingga kerugian pihak ketiga selama masa konstruksi.',
  },
  {
    icon: Cpu,
    fase: 'Tahap Pemasangan',
    title: 'Erection All Risk (EAR)',
    desc: 'Menanggung risiko saat instalasi mesin baru berlangsung, umum digunakan pabrik di Batamindo, Kabil, dan Panbil yang mendatangkan mesin produksi dari luar negeri.',
  },
  {
    icon: Gauge,
    fase: 'Tahap Operasional',
    title: 'Machinery Breakdown & Peralatan Elektronik',
    desc: 'Menanggung kerusakan mendadak pada mesin produksi yang sudah beroperasi, termasuk peralatan elektronik presisi tinggi seperti mesin perakitan komponen.',
  },
]

const cakupan = [
  { icon: Truck, label: 'Kerusakan Alat Berat & Material Konstruksi' },
  { icon: Gauge, label: 'Kerusakan Mesin Mendadak (Breakdown)' },
  { icon: CircuitBoard, label: 'Kerusakan Peralatan Elektronik Presisi' },
  { icon: Scale, label: 'Tanggung Jawab Hukum Pihak Ketiga Selama Proyek' },
  { icon: TrendingDown, label: 'Business Interruption Akibat Mesin Rusak' },
]

const langkahKlaim = [
  {
    title: 'Hentikan Kerusakan Lanjutan',
    desc: 'Amankan area dan hindari kerusakan meluas, lalu segera hubungi Tono untuk langkah selanjutnya.',
  },
  {
    title: 'Dokumentasi Teknis',
    desc: 'Kumpulkan data teknis mesin atau proyek — spesifikasi, riwayat perawatan, dan foto kondisi kerusakan.',
  },
  {
    title: 'Survei Teknis',
    desc: 'Surveyor teknik menilai penyebab kerusakan serta estimasi biaya perbaikan atau penggantian.',
  },
  {
    title: 'Perbaikan / Ganti Rugi',
    desc: 'Tono mengawal proses hingga mesin atau proyek Anda kembali berjalan normal.',
  },
]

const faqItems = [
  {
    question: "Apa beda Contractor's All Risk (CAR) dan Erection All Risk (EAR)?",
    answer:
      'CAR menanggung risiko selama proses konstruksi bangunan berlangsung, sedangkan EAR khusus menanggung risiko selama proses pemasangan atau instalasi mesin dan peralatan pabrik.',
  },
  {
    question: 'Apakah machinery breakdown menanggung kerusakan akibat kesalahan operator?',
    answer:
      'Tergantung klausul yang dipilih. Sebagian polis menanggung kerusakan akibat kesalahan pengoperasian, sementara sebagian lain mengecualikannya — Tono akan membantu memastikan cakupan sesuai kondisi mesin Anda.',
  },
  {
    question: 'Apakah peralatan elektronik presisi seperti mesin perakitan komponen bisa diasuransikan terpisah?',
    answer:
      'Bisa, menggunakan Electronic Equipment Insurance yang dirancang khusus untuk peralatan presisi tinggi, umum digunakan pabrik elektronik di kawasan industri Batam.',
  },
  {
    question: 'Sampai kapan periode pertanggungan CAR berlaku pada proyek konstruksi?',
    answer:
      'Umumnya berlaku sejak awal pekerjaan hingga serah terima proyek, dengan opsi perluasan masa pemeliharaan (maintenance period) sesuai kesepakatan dalam polis.',
  },
  {
    question: 'Apakah kerugian akibat proyek atau produksi terhenti bisa ditanggung?',
    answer:
      'Bisa, melalui perluasan Business Interruption yang menanggung kerugian pendapatan akibat mesin rusak atau proyek tertunda, di luar biaya perbaikan fisiknya sendiri.',
  },
]

export default function AsuransiEngineeringMachineryPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Engineering & Machinery', url: PATH },
        ])}
      />
      <JsonLd
        data={insuranceServiceSchema({
          name: 'Asuransi Engineering & Machinery Batam Proteksi',
          description:
            'Layanan asuransi proyek konstruksi, instalasi mesin, dan peralatan produksi di kawasan industri Batam.',
          path: PATH,
          serviceType: 'Asuransi Engineering & Machinery',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Engineering & Machinery' },
        ]}
      />

      <HeroSection />

      {/* Konteks Lokal Batam */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Proyek dan Mesin di Batam Butuh Proteksi Sepanjang Siklusnya
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Pertumbuhan Batam terus berlanjut lewat proyek konstruksi baru — perumahan,
              pertokoan, hingga perluasan kawasan industri di sekitar Batamindo, Kabil, dan
              Panbil. Setiap proyek pembangunan membawa risiko tersendiri, mulai dari kerusakan
              material akibat cuaca hingga kerugian pihak ketiga saat alat berat beroperasi di
              area padat penduduk.
            </p>
            <p>
              Bagi pabrik yang terus memperbarui lini produksinya, tahap pemasangan mesin baru —
              banyak di antaranya didatangkan langsung dari luar negeri mengingat status kawasan
              perdagangan bebas Batam — juga menyimpan risiko kerusakan selama proses instalasi
              berlangsung, sebelum mesin tersebut resmi beroperasi.
            </p>
            <p>
              Setelah beroperasi pun risiko belum sepenuhnya hilang. Industri elektronik dan
              manufaktur presisi yang menjadi andalan Batam sangat bergantung pada mesin dan
              peralatan yang bekerja tanpa henti — sekali mesin utama mengalami kerusakan
              mendadak, dampaknya bisa langsung terasa pada jadwal produksi dan pengiriman ke
              buyer.
            </p>
          </div>
        </div>
      </section>

      {/* Tahapan Proyek */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-4">
              Perlindungan Sepanjang Siklus Proyek
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Tiga Tahap, Tiga Jenis Perlindungan
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tahapProyek.map((item, i) => (
              <div
                key={item.title}
                className="relative bg-white rounded-2xl border-2 border-slate-200 p-6 hover:shadow-lg transition-all"
              >
                <span className="absolute -top-3 left-6 px-3 py-1 bg-slate-700 text-white text-xs font-semibold rounded-full">
                  {i + 1}. {item.fase}
                </span>
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 mt-3">
                  <item.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-center text-sm font-medium text-muted-foreground mb-4">
              Risiko yang bisa ditanggung
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {cakupan.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-foreground"
                >
                  <c.icon className="w-4 h-4 text-slate-700" />
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps
        title="Proses Klaim Asuransi Engineering & Machinery"
        subtitle="Semakin cepat kerusakan dilaporkan, semakin cepat proyek atau produksi Anda kembali berjalan."
        steps={langkahKlaim}
        accent="slate"
      />

      <section className="pb-14 md:pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="30 Juli 2026" />
        </div>
      </section>

      <FAQSection
        title="Pertanyaan Seputar Asuransi Engineering & Machinery"
        intro="Pertanyaan yang sering diajukan kontraktor dan pemilik pabrik sebelum mengasuransikan proyek atau mesin mereka."
        items={faqItems}
      />

      <RelatedProducts currentSlug="asuransi-engineering-machinery" />

      <CTABanner
        heading="Ada Proyek Konstruksi atau Mesin Baru di Pabrik Anda?"
        subheading="Diskusikan tahap proyek Anda saat ini ke Tono untuk menentukan perlindungan CAR, EAR, atau machinery breakdown yang tepat."
        waMessage="Halo Tono, saya ingin konsultasi tentang Asuransi Engineering & Machinery untuk proyek/pabrik saya di Batam."
      />

      <Footer />
    </main>
  )
}
