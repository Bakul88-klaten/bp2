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
import { breadcrumbSchema, articleSchema, faqSchema } from '@/lib/schema'
import { HardHat } from 'lucide-react'

const PATH = '/produk/asuransi-engineering-machinery/car-vs-ear-perbandingan'
const JUDUL = "Contractor's All Risk vs Erection All Risk: Panduan Memilih untuk Proyek di Batam"

export const metadata: Metadata = {
  title: 'CAR vs EAR untuk Proyek Konstruksi Batam | Batam Proteksi',
  description:
    "Perbandingan Contractor's All Risk dan Erection All Risk untuk proyek konstruksi dan instalasi mesin di kawasan industri Batam.",
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Perbandingan CAR dan EAR untuk proyek konstruksi dan instalasi mesin di Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
    images: ['/og-image.png'],
  },
}

const tabelCAREAR = [
  [
    'Fokus proyek',
    'Pekerjaan konstruksi sipil: gedung, jalan, fasilitas kawasan industri',
    'Pemasangan dan instalasi mesin/peralatan pabrik',
  ],
  [
    'Periode pertanggungan',
    'Sejak pekerjaan pondasi hingga bangunan selesai dan diserahterimakan',
    'Sejak mesin tiba di lokasi hingga proses commissioning/uji coba selesai',
  ],
  [
    'Risiko utama',
    'Longsor, kerusakan struktur akibat cuaca ekstrem, kesalahan konstruksi',
    'Kesalahan pemasangan, kerusakan saat proses uji coba dan penyetelan mesin',
  ],
  [
    'Contoh proyek di Batam',
    'Pembangunan gedung/ruko baru di Batam Center, perluasan fasilitas kawasan industri',
    'Instalasi lini produksi baru di pabrik Kawasan Industri Kabil atau Panbil',
  ],
]

const faqItems = [
  {
    question: 'Bisakah proyek yang sama menggunakan CAR dan EAR sekaligus?',
    answer:
      'Bisa, dan cukup umum untuk proyek pembangunan pabrik baru di kawasan industri Batam, di mana pekerjaan sipil (gedung) berjalan berdampingan dengan instalasi mesin produksi. Kedua polis ini dapat diterbitkan sebagai gabungan (combined CAR/EAR) sesuai kebutuhan proyek.',
  },
  {
    question: 'Apa yang dimaksud dengan periode commissioning dalam EAR?',
    answer:
      'Commissioning adalah tahap uji coba mesin setelah instalasi selesai, sebelum mesin dinyatakan siap beroperasi penuh. Periode ini termasuk fase berisiko tinggi dan penting untuk dipastikan tetap tercakup dalam polis EAR.',
  },
  {
    question: 'Apakah CAR mencakup alat berat kontraktor seperti excavator atau crane?',
    answer:
      'Alat berat kontraktor biasanya memerlukan pertanggungan terpisah (Contractor\'s Plant & Equipment), meski beberapa polis CAR dapat mencantumkannya sebagai perluasan. Sampaikan daftar alat berat yang digunakan ke Tono agar tidak ada yang terlewat.',
  },
  {
    question: 'Jika proyek molor dari jadwal awal, apakah polis otomatis diperpanjang?',
    answer:
      'Tidak otomatis. Perpanjangan periode pertanggungan perlu diajukan sebelum masa polis berakhir, dengan kemungkinan penyesuaian premi tambahan sesuai tambahan durasi risiko.',
  },
  {
    question: 'Apakah subkontraktor juga perlu tercantum dalam polis CAR/EAR?',
    answer:
      'Idealnya iya, terutama jika subkontraktor turut bekerja di lokasi proyek. Mencantumkan seluruh pihak yang terlibat membantu memastikan cakupan tanggung jawab hukum antar pihak tetap jelas saat terjadi klaim.',
  },
]

export default function ArtikelPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Engineering & Machinery', url: '/produk/asuransi-engineering-machinery' },
          { name: 'CAR vs EAR', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            "Perbandingan Contractor's All Risk dan Erection All Risk untuk proyek konstruksi dan instalasi mesin di Batam.",
          path: PATH,
          datePublished: '2026-07-31',
          dateModified: '2026-07-31',
        })}
      />
      <JsonLd
        data={faqSchema(faqItems)}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Engineering & Machinery', href: '/produk/asuransi-engineering-machinery' },
          { label: 'CAR vs EAR' },
        ]}
      />

      <ArticleHero
        warna="slate"
        kategori="Perbandingan"
        icon={HardHat}
        title={JUDUL}
        intro="Proyek pembangunan fasilitas baru di kawasan industri Batam sering melibatkan dua jenis pekerjaan sekaligus: konstruksi sipil dan instalasi mesin. Kenali polis yang sesuai untuk masing-masing tahap."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="car-vs-ear-perbandingan"
            variant="header"
            warna="slate"
            aspect="wide"
            label="Foto proyek konstruksi/instalasi mesin di kawasan industri Batam atau ilustrasi perbandingan CAR-EAR"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Pertumbuhan kawasan industri di Batam — dari Batamindo, Kabil, hingga Panbil — terus
            mendorong proyek pembangunan fasilitas baru, mulai dari gedung pabrik hingga lini
            produksi canggih di dalamnya. Setiap proyek semacam ini umumnya melibatkan dua jenis
            pekerjaan dengan profil risiko berbeda: pekerjaan sipil dan pemasangan mesin.
          </p>
          <p>
            Contractor&apos;s All Risk (CAR) dan Erection All Risk (EAR) dirancang untuk masing-masing
            jenis pekerjaan tersebut. Memahami cakupan dan periode pertanggungan keduanya membantu
            memastikan proyek Anda terlindungi penuh dari awal hingga akhir.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="slate"
            title="Perbandingan CAR dan EAR"
            headers={['Aspek', "Contractor's All Risk (CAR)", 'Erection All Risk (EAR)']}
            rows={tabelCAREAR}
            caption="Cakupan detail dan pengecualian tetap mengikuti wording polis masing-masing perusahaan asuransi."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox warna="slate" title="Proyek Pabrik Baru di Kabil Menggunakan CAR dan EAR Sekaligus">
            <p>
              Sebuah perusahaan manufaktur membangun fasilitas pabrik baru di Kawasan Industri
              Kabil. Pekerjaan gedung dan struktur bangunan berjalan menggunakan polis CAR, sambil
              secara paralel tim lain mulai memasang lini produksi begitu sebagian area bangunan
              selesai — pekerjaan ini dilindungi polis EAR.
            </p>
            <p>
              Karena kedua polis diajukan sebagai paket gabungan sejak awal proyek, tidak ada masa
              transisi yang terlewat antara selesainya pekerjaan sipil dan dimulainya instalasi
              mesin — termasuk periode commissioning menjelang pabrik mulai beroperasi.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: untuk proyek gabungan seperti pembangunan pabrik baru, mengajukan CAR dan
              EAR secara bersamaan sejak perencanaan proyek jauh lebih efisien dibanding mengurus
              keduanya secara terpisah di tengah jalan.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="slate"
            title="Hal-hal yang Perlu Diketahui Sebelum Memilih"
            items={[
              'Proyek dengan pekerjaan sipil dan instalasi mesin sekaligus dapat menggunakan CAR dan EAR sebagai paket gabungan.',
              'Pastikan periode commissioning/uji coba mesin tercakup jelas dalam polis EAR.',
              'Daftarkan seluruh subkontraktor yang terlibat agar cakupan tanggung jawab hukum antar pihak tetap jelas.',
              'Ajukan perpanjangan polis sebelum masa berlaku berakhir jika proyek berpotensi molor dari jadwal.',
              'Diskusikan dengan Tono sejak tahap perencanaan proyek, bukan setelah pekerjaan dimulai.',
            ]}
          />
        </div>
      </section>

      <section className="pb-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="31 Juli 2026" />
        </div>
      </section>

      <FAQSection
        title="Pertanyaan Seputar CAR dan EAR"
        intro="Pertanyaan yang sering muncul saat klien Tono merencanakan proyek konstruksi dan instalasi mesin."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="slate"
        produkSlug="asuransi-engineering-machinery"
        currentSlug="car-vs-ear-perbandingan"
      />

      <CTABanner
        heading="Sedang Merencanakan Proyek Konstruksi atau Instalasi Mesin?"
        subheading="Ceritakan lingkup proyek Anda ke Tono untuk dibantu menyusun polis CAR, EAR, atau gabungan keduanya."
        waMessage="Halo Tono, saya sedang merencanakan proyek konstruksi/instalasi mesin di Batam dan ingin konsultasi CAR/EAR."
      />

      <Footer />
    </main>
  )
}
