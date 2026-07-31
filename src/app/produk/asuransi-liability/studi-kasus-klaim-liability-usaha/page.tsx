import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductBreadcrumb from '@/components/produk/ProductBreadcrumb'
import ExpertBox from '@/components/produk/ExpertBox'
import FAQSection from '@/components/produk/FAQSection'
import CTABanner from '@/components/produk/CTABanner'
import JsonLd from '@/components/produk/JsonLd'
import ArticleHero from '@/components/artikel/ArticleHero'
import ArticleImageSlot from '@/components/artikel/ArticleImageSlot'
import ComparisonTable from '@/components/artikel/ComparisonTable'
import CaseStudyBox from '@/components/artikel/CaseStudyBox'
import KeyPointsBox from '@/components/artikel/KeyPointsBox'
import ArticleCrossLinks from '@/components/artikel/ArticleCrossLinks'
import { breadcrumbSchema, articleSchema } from '@/lib/schema'
import { FileWarning } from 'lucide-react'

const PATH = '/produk/asuransi-liability/studi-kasus-klaim-liability-usaha'
const JUDUL = 'Contoh Kasus Klaim Liability: Ketika Usaha di Batam Digugat Pihak Ketiga'

export const metadata: Metadata = {
  title: 'Studi Kasus Klaim Liability Usaha di Batam | Batam Proteksi',
  description:
    'Tiga contoh kasus tuntutan pihak ketiga terhadap usaha di Batam — restoran, pabrik kawasan industri, dan kontraktor — serta bagaimana asuransi liability berperan.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Contoh kasus klaim liability usaha di Batam dan peran asuransi di dalamnya.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelKasus = [
  [
    'Restoran — Pengunjung Terpeleset',
    'Kuliner, Nagoya',
    'Lantai basah tanpa tanda peringatan menyebabkan pengunjung terjatuh dan cedera',
    'Public Liability menanggung biaya pengobatan dan kompensasi yang disepakati',
  ],
  [
    'Pabrik — Cedera Kontraktor Pemeliharaan',
    'Manufaktur, Kawasan Industri Kabil',
    'Kontraktor pemeliharaan mesin cedera akibat prosedur keselamatan yang kurang memadai',
    'Public Liability membantu proses penyelesaian tuntutan sesuai polis',
  ],
  [
    'Kontraktor — Kerusakan Properti Tetangga',
    'Konstruksi, Batam Center',
    'Getaran alat berat saat pembangunan proyek merusak dinding bangunan tetangga',
    'Public Liability kontraktor menanggung biaya perbaikan properti tetangga',
  ],
]

const faqItems = [
  {
    question: 'Apakah premi liability naik signifikan setelah pernah mengajukan klaim?',
    answer:
      'Kemungkinan ada penyesuaian saat perpanjangan polis, tergantung frekuensi dan besar klaim sebelumnya. Perbaikan prosedur keselamatan setelah suatu insiden juga menjadi pertimbangan positif bagi perusahaan asuransi.',
  },
  {
    question: 'Bagaimana jika tuntutan pihak ketiga dianggap tidak wajar atau berlebihan?',
    answer:
      'Perusahaan asuransi umumnya akan melakukan investigasi dan negosiasi atas nama tertanggung, termasuk menilai kewajaran nilai tuntutan sebelum penyelesaian dilakukan. Tono mendampingi proses ini agar kepentingan usaha Anda tetap terjaga.',
  },
  {
    question: 'Apakah biaya mediasi atau penyelesaian di luar pengadilan termasuk yang ditanggung?',
    answer:
      'Pada banyak polis liability, biaya penyelesaian sengketa di luar pengadilan termasuk dalam cakupan, karena jalur ini justru sering menjadi cara yang lebih efisien dibanding proses litigasi penuh. Periksa ketentuan spesifik pada polis Anda.',
  },
  {
    question: "Apakah karyawan sendiri termasuk 'pihak ketiga' dalam Public Liability?",
    answer:
      'Umumnya tidak. Cedera pada karyawan sendiri saat bekerja lebih relevan dengan Employers Liability atau BPJS Ketenagakerjaan, sementara Public Liability berfokus pada pihak di luar hubungan kerja, seperti pengunjung atau kontraktor luar.',
  },
  {
    question: 'Bagaimana proses pembuktian bahwa usaha tidak lalai saat digugat?',
    answer:
      'Dokumentasi seperti SOP keselamatan, catatan pemeliharaan, dan rekaman CCTV (bila ada) menjadi bukti pendukung penting. Perusahaan asuransi dan Tono akan membantu mengumpulkan bukti-bukti ini selama proses investigasi klaim.',
  },
]

export default function ArtikelPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Liability', url: '/produk/asuransi-liability' },
          { name: 'Studi Kasus Klaim Liability', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Tiga contoh kasus tuntutan pihak ketiga terhadap usaha di Batam dan bagaimana asuransi liability berperan.',
          path: PATH,
          datePublished: '2026-07-31',
          dateModified: '2026-07-31',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Liability', href: '/produk/asuransi-liability' },
          { label: 'Studi Kasus Klaim Liability' },
        ]}
      />

      <ArticleHero
        warna="purple"
        kategori="Studi Kasus"
        icon={FileWarning}
        title={JUDUL}
        intro="Tuntutan pihak ketiga bisa datang dari mana saja — pengunjung, kontraktor, bahkan tetangga bangunan. Berikut tiga contoh kasus nyata dan bagaimana asuransi liability berperan menyelesaikannya."
        lastUpdated="31 Juli 2026"
        estimasiBaca="7 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            warna="purple"
            aspect="wide"
            label="Foto area kerja/proyek di kawasan industri Batam atau ilustrasi proses penyelesaian klaim"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Tuntutan tanggung jawab hukum sering datang tanpa peringatan — mulai dari kecelakaan
            kecil di area publik, cedera pada pihak luar yang bekerja di lokasi usaha, hingga
            kerusakan properti akibat aktivitas proyek. Tiga contoh berikut menggambarkan variasi
            kasus yang pernah dihadapi pelaku usaha di Batam, dari sektor kuliner, manufaktur,
            hingga konstruksi.
          </p>
          <p>
            Meski industrinya berbeda, benang merahnya sama: usaha yang memiliki polis liability
            yang sesuai memiliki jalur penyelesaian yang jauh lebih terstruktur dibanding harus
            menanggung sendiri biaya kompensasi dan proses hukum.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="purple"
            title="Ringkasan Tiga Contoh Kasus"
            headers={['Kasus', 'Industri & Lokasi', 'Kronologi Singkat', 'Peran Asuransi']}
            rows={tabelKasus}
            caption="Kasus disederhanakan untuk ilustrasi. Penanganan aktual bergantung pada fakta kejadian dan ketentuan masing-masing polis."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Kasus yang Diperluas: Kontraktor dan Kerusakan Properti Tetangga
          </h2>
          <CaseStudyBox
            warna="purple"
            title="Getaran Alat Berat Proyek Merusak Dinding Bangunan Tetangga"
          >
            <p>
              Sebuah kontraktor sedang mengerjakan proyek pembangunan ruko baru di kawasan Batam
              Center. Penggunaan alat berat untuk pemancangan pondasi menimbulkan getaran yang
              cukup kuat, hingga menyebabkan retak pada dinding bangunan milik tetangga yang
              berdekatan.
            </p>
            <p>
              Pemilik bangunan tetangga mengajukan tuntutan ganti rugi kepada kontraktor. Karena
              kontraktor memiliki polis Public Liability yang mencakup risiko kerusakan properti
              pihak ketiga akibat aktivitas proyek, biaya perbaikan dinding tersebut dapat
              ditanggung asuransi setelah proses survei dan verifikasi kerugian.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: proyek konstruksi di kawasan padat bangunan seperti pusat kota Batam
              memiliki risiko dampak ke properti sekitar yang signifikan, sehingga Public
              Liability menjadi perlindungan yang penting bagi kontraktor.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="purple"
            title="Langkah Pencegahan agar Risiko Tuntutan Lebih Terkendali"
            items={[
              'Pasang tanda peringatan pada area berisiko seperti lantai basah atau permukaan licin.',
              'Terapkan SOP keselamatan kerja yang jelas untuk kontraktor atau pihak luar yang bekerja di lokasi Anda.',
              'Dokumentasikan kondisi properti sekitar sebelum memulai proyek konstruksi atau pekerjaan berisiko getaran.',
              'Simpan catatan pemeliharaan dan inspeksi berkala sebagai bukti kepatuhan terhadap standar keselamatan.',
              'Diskusikan limit pertanggungan liability dengan Tono sesuai skala risiko usaha atau proyek Anda.',
            ]}
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="31 Juli 2026" />
        </div>
      </section>

      <FAQSection
        title="Pertanyaan Seputar Klaim Liability"
        intro="Pertanyaan yang sering muncul setelah usaha menghadapi tuntutan pihak ketiga."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="purple"
        produkSlug="asuransi-liability"
        currentSlug="studi-kasus-klaim-liability-usaha"
      />

      <CTABanner
        heading="Usaha Anda Sedang Menghadapi Tuntutan Pihak Ketiga?"
        subheading="Hubungi Tono untuk didampingi menilai polis dan langkah penyelesaian yang tepat."
        waMessage="Halo Tono, usaha saya di Batam menghadapi tuntutan pihak ketiga dan saya butuh konsultasi asuransi liability."
      />

      <Footer />
    </main>
  )
}
