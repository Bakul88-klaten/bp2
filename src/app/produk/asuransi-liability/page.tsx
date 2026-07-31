import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductBreadcrumb from '@/components/produk/ProductBreadcrumb'
import ExpertBox from '@/components/produk/ExpertBox'
import FAQSection from '@/components/produk/FAQSection'
import RelatedProducts from '@/components/produk/RelatedProducts'
import RelatedArtikel from '@/components/produk/RelatedArtikel'
import CTABanner from '@/components/produk/CTABanner'
import JsonLd from '@/components/produk/JsonLd'
import { breadcrumbSchema, insuranceServiceSchema } from '@/lib/schema'
import { Users, HardHat, PackageSearch, Briefcase } from 'lucide-react'
import HeroSection from './HeroSection'
import ProcessSteps from '../_shared/ProcessSteps'

const PATH = '/produk/asuransi-liability'

export const metadata: Metadata = {
  title: 'Asuransi Liability Batam — Tanggung Jawab Hukum Usaha | Batam Proteksi',
  description:
    'Lindungi usaha Anda di Batam dari tuntutan hukum pihak ketiga, karyawan, hingga produk ekspor yang bermasalah. Konsultasi gratis bersama Tono.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: 'Asuransi Liability Batam - Batam Proteksi',
    description: 'Proteksi tanggung jawab hukum bagi pelaku usaha di Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'website',
  },
}

const jenisLiability = [
  {
    icon: Users,
    title: 'Public Liability',
    desc: 'Tanggung jawab hukum atas cedera atau kerugian pihak ketiga yang terjadi di lokasi usaha Anda, seperti ruko, restoran, atau area pabrik.',
  },
  {
    icon: HardHat,
    title: "Employers' Liability",
    desc: 'Tanggung jawab hukum pemberi kerja atas cedera karyawan akibat kecelakaan kerja di luar cakupan BPJS Ketenagakerjaan.',
  },
  {
    icon: PackageSearch,
    title: 'Product Liability',
    desc: 'Tanggung jawab hukum atas kerugian yang timbul akibat produk cacat yang Anda jual atau ekspor ke pembeli, termasuk buyer di luar negeri.',
  },
  {
    icon: Briefcase,
    title: 'Professional Indemnity',
    desc: 'Untuk penyedia jasa profesional — tanggung jawab hukum atas kesalahan atau kelalaian profesional yang merugikan klien.',
  },
]

const langkahKlaim = [
  {
    title: 'Terima Tuntutan',
    desc: 'Begitu menerima klaim atau somasi dari pihak ketiga, dokumentasikan dan segera hubungi Tono — hindari mengakui kesalahan secara sepihak.',
  },
  {
    title: 'Laporkan ke Asuransi',
    desc: 'Tono membantu menyampaikan laporan awal ke perusahaan asuransi disertai kronologi kejadian yang lengkap.',
  },
  {
    title: 'Investigasi & Negosiasi',
    desc: 'Pihak asuransi menginvestigasi klaim dan, bila diperlukan, bernegosiasi langsung dengan pihak penuntut.',
  },
  {
    title: 'Penyelesaian',
    desc: 'Ganti rugi dibayarkan sesuai hasil negosiasi atau putusan, dalam batas nilai pertanggungan polis Anda.',
  },
]

const faqItems = [
  {
    question: 'Apa bedanya Public Liability dan Product Liability?',
    answer:
      'Public Liability menanggung cedera atau kerugian pihak ketiga yang terjadi di lokasi usaha Anda, sedangkan Product Liability menanggung kerugian yang timbul setelah produk Anda berpindah tangan ke pembeli, termasuk saat sudah diekspor ke luar negeri.',
  },
  {
    question: 'Apakah asuransi liability menanggung biaya pengacara?',
    answer:
      'Sebagian besar polis liability turut menanggung biaya hukum untuk membela Anda dalam proses investigasi maupun negosiasi klaim, sesuai batas yang tercantum dalam polis.',
  },
  {
    question: 'Karyawan sudah dilindungi BPJS Ketenagakerjaan, apakah masih perlu liability tambahan?',
    answer:
      "BPJS Ketenagakerjaan memberi manfaat dasar sesuai skema pemerintah. Employers' Liability berguna sebagai lapisan tambahan bila tuntutan ganti rugi dari karyawan melebihi manfaat BPJS atau menyangkut aspek yang tidak tercakup di dalamnya.",
  },
  {
    question: 'Apakah kontraktor proyek pembangunan wajib punya asuransi liability?',
    answer:
      'Tidak selalu wajib secara hukum, namun banyak pemberi proyek di Batam mensyaratkannya sebagai bagian dari kontrak kerja, mengingat risiko kerugian pihak ketiga selama masa konstruksi cukup tinggi.',
  },
  {
    question: 'Bagaimana jika produk yang diekspor bermasalah di negara tujuan?',
    answer:
      'Selama polis Product Liability Anda mencakup wilayah ekspor tersebut, klaim dari pembeli di luar negeri tetap bisa diproses. Penting untuk mendiskusikan cakupan wilayah (jurisdiction) ini sejak awal bersama Tono.',
  },
]

export default function AsuransiLiabilityPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Liability', url: PATH },
        ])}
      />
      <JsonLd
        data={insuranceServiceSchema({
          name: 'Asuransi Liability Batam Proteksi',
          description:
            'Layanan asuransi tanggung jawab hukum untuk pelaku usaha, kontraktor, dan produsen di Batam.',
          path: PATH,
          serviceType: 'Asuransi Liability',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Liability' },
        ]}
      />

      <HeroSection />

      {/* Konteks Lokal Batam */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Risiko Tanggung Jawab Hukum yang Sering Terlewat Pelaku Usaha Batam
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sebagai pusat manufaktur ekspor, pabrik-pabrik di Kawasan Industri Batamindo, Kabil,
              dan Panbil rutin menerima kunjungan auditor, buyer, maupun mitra bisnis dari luar
              negeri. Setiap kunjungan ini membawa potensi risiko: bila ada tamu yang cedera di
              area produksi, tanggung jawab hukum bisa jatuh ke pihak perusahaan, bukan sekadar
              urusan pertolongan pertama.
            </p>
            <p>
              Posisi Batam yang berdekatan dengan Singapura juga membuat sektor jasa dan
              pariwisatanya ramai oleh pengunjung dari luar, mulai dari restoran dan hotel hingga
              tempat wisata di sekitar Nagoya dan Batam Center. Semakin banyak pengunjung, semakin
              besar pula peluang munculnya tuntutan ganti rugi bila terjadi kecelakaan di lokasi
              usaha Anda.
            </p>
            <p>
              Di sisi lain, maraknya proyek konstruksi baru — perumahan, ruko, hingga perluasan
              kawasan industri — turut membawa risiko kerugian pihak ketiga selama masa
              pembangunan, misalnya alat berat yang tidak sengaja merusak properti tetangga. Bagi
              produsen yang mengekspor barang, kegagalan produk di tangan pembeli luar negeri juga
              bisa berujung pada tuntutan hukum lintas negara yang jauh lebih rumit ditangani
              sendiri.
            </p>
          </div>
        </div>
      </section>

      {/* Jenis Liability */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-50 rounded-full text-sm font-medium text-purple-600 mb-4">
              Jenis Perlindungan
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Empat Jenis Tanggung Jawab Hukum yang Bisa Dilindungi
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jenisLiability.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        title="Proses Klaim Asuransi Liability"
        subtitle="Klaim liability biasanya diawali tuntutan pihak ketiga — Tono mendampingi sejak somasi pertama hingga penyelesaian."
        steps={langkahKlaim}
        accent="purple"
      />

      <section className="pb-14 md:pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="30 Juli 2026" />
        </div>
      </section>

      <RelatedArtikel produkSlug="asuransi-liability" warna="purple" />

      <FAQSection
        title="Pertanyaan Seputar Asuransi Liability"
        intro="Pertanyaan yang sering muncul dari pelaku usaha sebelum mengambil proteksi tanggung jawab hukum."
        items={faqItems}
      />

      <RelatedProducts currentSlug="asuransi-liability" />

      <CTABanner
        heading="Usaha Anda Sudah Terlindungi dari Tuntutan Pihak Ketiga?"
        subheading="Diskusikan jenis liability yang paling relevan dengan operasional usaha Anda di Batam bersama Tono."
        waMessage="Halo Tono, saya ingin konsultasi tentang Asuransi Liability untuk usaha saya di Batam."
      />

      <Footer />
    </main>
  )
}
