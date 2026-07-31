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
import { GitCompare } from 'lucide-react'

const PATH = '/produk/asuransi-cargo/institute-cargo-clauses-a-b-c'
const JUDUL = 'Institute Cargo Clauses A, B, C: Pilih Proteksi Kargo yang Tepat untuk Batam'

export const metadata: Metadata = {
  title: 'Institute Cargo Clauses A vs B vs C untuk Kargo Batam | Batam Proteksi',
  description:
    'Perbandingan cakupan Institute Cargo Clauses A, B, dan C untuk pengiriman ekspor-impor lewat Pelabuhan Batu Ampar, Bandara Hang Nadim, dan kawasan industri Batam.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Perbandingan cakupan ICC A, B, dan C untuk kargo dari dan menuju Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelICC = [
  [
    'Cakupan risiko',
    'Paling luas — all risks, kecuali pengecualian umum (perang, kerusuhan, kerusakan wajar barang)',
    'Risiko spesifik: kebakaran, ledakan, kandas, tenggelam, tabrakan, kerusakan akibat air laut',
    'Risiko utama saja: kebakaran, ledakan, kandas, tenggelam, tabrakan, general average',
  ],
  [
    'Kerusakan akibat proses bongkar-muat',
    'Ditanggung',
    'Sebagian ditanggung, sesuai daftar risiko yang disebutkan',
    'Umumnya tidak ditanggung',
  ],
  [
    'Kehilangan sebagian / pencurian',
    'Ditanggung',
    'Tidak otomatis, perlu perluasan jaminan',
    'Tidak ditanggung',
  ],
  ['Kisaran premi', 'Tertinggi', 'Menengah', 'Terendah'],
  [
    'Paling cocok untuk',
    'Barang bernilai tinggi & sensitif, mis. komponen elektronik dari kawasan industri Batamindo',
    'Bahan baku atau barang curah dengan risiko menengah',
    'Barang non-sensitif dengan anggaran premi terbatas',
  ],
]

const faqItems = [
  {
    question: 'Apakah ICC A, B, C hanya berlaku untuk kargo laut?',
    answer:
      'Klausul ini pada dasarnya dirancang untuk kargo laut (marine cargo), namun prinsip cakupannya juga sering diadaptasi untuk kargo udara dari Bandara Hang Nadim dengan penyesuaian wording. Tono dapat membantu menentukan klausul yang sesuai berdasarkan moda pengiriman Anda.',
  },
  {
    question: 'Siapa yang sebaiknya membeli asuransi kargo — pengirim atau penerima?',
    answer:
      'Tergantung istilah perdagangan (incoterm) yang disepakati. Pada incoterm seperti CIF, penjual wajib menyediakan asuransi minimal setara ICC C, sementara pembeli bebas menambah cakupan sendiri jika menginginkan proteksi lebih luas seperti ICC A.',
  },
  {
    question: 'Apakah kargo yang melintasi ZEE Indonesia otomatis lebih berisiko?',
    answer:
      'Tidak otomatis, namun pelayaran jarak jauh yang melintasi Zona Ekonomi Eksklusif (ZEE) umumnya menempuh waktu dan eksposur cuaca lebih panjang dibanding pelayaran domestik antar pulau, sehingga faktor ini turut dipertimbangkan dalam penilaian risiko dan premi.',
  },
  {
    question: 'Bisakah upgrade dari ICC C ke ICC A di tengah proses pengiriman?',
    answer:
      'Tidak. Klausul yang dipilih berlaku sejak polis diterbitkan sebelum barang dikirim. Perubahan klausul perlu dilakukan sebelum pengiriman berikutnya, bukan saat barang sudah dalam perjalanan.',
  },
  {
    question: 'Apakah barang elektronik dari kawasan berikat wajib pakai ICC A?',
    answer:
      'Tidak wajib, tetapi sangat disarankan. Barang elektronik rentan terhadap guncangan dan kerusakan saat proses bongkar-muat, sehingga cakupan ICC A yang lebih luas umumnya lebih sepadan dengan nilai barang dan risiko kerugiannya.',
  },
]

export default function ArtikelPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Cargo', url: '/produk/asuransi-cargo' },
          { name: 'ICC A vs B vs C', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Perbandingan cakupan Institute Cargo Clauses A, B, dan C untuk pengiriman dari dan menuju Batam.',
          path: PATH,
          datePublished: '2026-07-31',
          dateModified: '2026-07-31',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Cargo', href: '/produk/asuransi-cargo' },
          { label: 'ICC A vs B vs C' },
        ]}
      />

      <ArticleHero
        warna="cyan"
        kategori="Perbandingan"
        icon={GitCompare}
        title={JUDUL}
        intro="Klausul standar internasional ini menentukan seberapa luas kargo Anda dilindungi. Kenali perbedaan ICC A, B, dan C sebelum menentukan pilihan untuk pengiriman dari Batam."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            warna="cyan"
            aspect="wide"
            label="Foto aktivitas bongkar muat peti kemas di Pelabuhan Batu Ampar atau ilustrasi rute kargo"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Sebagai kota dengan status kawasan perdagangan bebas, arus keluar-masuk barang di
            Batam sangat padat — mulai dari kontainer elektronik yang diproduksi kawasan industri
            Batamindo dan Kabil, dikirim lewat Pelabuhan Batu Ampar, hingga kargo udara bernilai
            tinggi lewat Bandara Hang Nadim. Sebagian bahkan menempuh pelayaran jauh melintasi
            Zona Ekonomi Eksklusif (ZEE) Indonesia menuju negara tujuan ekspor.
          </p>
          <p>
            Untuk setiap pengiriman ini, pemilik barang perlu menentukan seberapa luas
            perlindungan yang dibutuhkan. Di sinilah Institute Cargo Clauses (ICC) berperan —
            standar klausul internasional yang membagi cakupan asuransi kargo laut menjadi tiga
            tingkatan: A, B, dan C.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="cyan"
            title="Perbandingan ICC A, B, dan C"
            headers={['Aspek', 'ICC A', 'ICC B', 'ICC C']}
            rows={tabelICC}
            caption="Cakupan detail dan pengecualian tetap mengikuti wording polis masing-masing perusahaan asuransi."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="cyan"
            title="Komponen Elektronik dari Batamindo Rusak Saat Bongkar Muat di Batu Ampar"
          >
            <p>
              Sebuah perusahaan elektronik di Kawasan Industri Batamindo memilih ICC C untuk
              menekan biaya pengiriman komponen ekspornya lewat Pelabuhan Batu Ampar. Saat proses
              bongkar muat menuju kapal, salah satu palet mengalami benturan yang merusak sebagian
              isi kontainer.
            </p>
            <p>
              Karena kerusakan akibat proses handling seperti ini tidak termasuk dalam cakupan
              ICC C, klaim kerugian tersebut tidak dapat diproses. Perusahaan kemudian beralih ke
              ICC A untuk pengiriman berikutnya, meski dengan premi yang sedikit lebih tinggi.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: untuk barang sensitif seperti elektronik, selisih premi antara ICC A dan
              ICC C jauh lebih kecil dibanding risiko kerugian yang tidak tertanggung.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="cyan"
            title="Hal-hal yang Perlu Diketahui Sebelum Memilih Klausul"
            items={[
              'Pilih klausul berdasarkan sifat barang — makin sensitif dan bernilai tinggi, makin disarankan ICC A.',
              'Periksa incoterm dalam kontrak jual-beli untuk mengetahui pihak mana yang wajib menyediakan asuransi.',
              'Kewajiban general average tetap berlaku pada ketiga klausul, sehingga nilai pertanggungan tetap perlu memadai.',
              'Siapkan dokumen pendukung — packing list, invoice, dan bill of lading — sejak awal pengajuan polis.',
              'Untuk pengiriman rutin dalam volume besar, Tono dapat membantu skema polis tahunan (open cover) agar tidak perlu mengajukan polis setiap pengiriman.',
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
        title="Pertanyaan Seputar Institute Cargo Clauses"
        intro="Pertanyaan yang sering muncul saat klien Tono menentukan klausul kargo yang tepat."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="cyan"
        produkSlug="asuransi-cargo"
        currentSlug="institute-cargo-clauses-a-b-c"
      />

      <CTABanner
        heading="Bingung Pilih Klausul Kargo yang Tepat?"
        subheading="Ceritakan jenis barang dan rute pengiriman Anda ke Tono untuk dibantu menentukan ICC A, B, atau C yang paling sesuai."
        waMessage="Halo Tono, saya ingin konsultasi memilih Institute Cargo Clauses untuk pengiriman barang saya dari Batam."
      />

      <Footer />
    </main>
  )
}
