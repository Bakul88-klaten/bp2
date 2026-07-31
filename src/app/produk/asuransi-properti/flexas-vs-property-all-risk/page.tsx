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

const PATH = '/produk/asuransi-properti/flexas-vs-property-all-risk'
const JUDUL = 'FLEXAS vs Property All Risk: Pilih Mana untuk Properti Anda di Batam?'

export const metadata: Metadata = {
  title: 'FLEXAS vs Property All Risk untuk Properti Batam | Batam Proteksi',
  description:
    'Perbandingan cakupan FLEXAS dan Property All Risk (PAR) untuk membantu memilih polis properti yang tepat bagi rumah, ruko, gudang, atau pabrik di Batam.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Perbandingan cakupan FLEXAS dan Property All Risk untuk properti di Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelPerbandingan = [
  [
    'Dasar jaminan',
    'Named perils — hanya risiko yang disebutkan dalam polis (kebakaran, petir, ledakan, dll)',
    'All risks — seluruh risiko ditanggung, kecuali yang secara eksplisit dikecualikan',
  ],
  [
    'Cakupan risiko',
    'Terbatas pada FLEXAS + perluasan yang dibeli terpisah (banjir, gempa, SRCC)',
    'Lebih luas sejak awal, termasuk risiko tak terduga seperti kerusakan mesin akibat human error',
  ],
  [
    'Beban pembuktian klaim',
    'Anda perlu membuktikan risiko yang terjadi termasuk yang dijamin polis',
    'Perusahaan asuransi perlu membuktikan risiko tersebut termasuk pengecualian',
  ],
  [
    'Kisaran premi',
    'Relatif lebih terjangkau',
    'Lebih tinggi, sepadan dengan cakupan yang lebih luas',
  ],
  [
    'Paling cocok untuk',
    'Rumah tinggal dan ruko dengan anggaran premi terbatas',
    'Pabrik, gudang bernilai tinggi, dan properti usaha dengan mesin produksi',
  ],
]

const faqItems = [
  {
    question: 'Apa kepanjangan FLEXAS?',
    answer:
      'FLEXAS adalah singkatan dari Fire, Lightning, Explosion, Aircraft Impact, dan Smoke — lima risiko dasar yang dijamin dalam polis kebakaran standar Indonesia (kebakaran, petir, ledakan, kejatuhan pesawat, dan asap).',
  },
  {
    question: 'Apakah Property All Risk otomatis menanggung banjir dan gempa?',
    answer:
      'Tidak selalu. Meski cakupannya lebih luas dari FLEXAS, banjir, gempa bumi, dan angin topan pada sebagian besar polis All Risk tetap tercantum sebagai pengecualian standar dan perlu ditambahkan sebagai perluasan jaminan tersendiri.',
  },
  {
    question: 'Bisakah FLEXAS ditingkatkan agar cakupannya mendekati All Risk?',
    answer:
      'Bisa sebagian, dengan menambahkan perluasan jaminan seperti SRCC, banjir, gempa bumi, dan tanggung jawab hukum pihak ketiga. Namun secara prinsip, FLEXAS tetap named perils sehingga risiko yang tidak disebutkan dalam polis maupun perluasannya tidak akan ditanggung.',
  },
  {
    question: 'Untuk gudang logistik di Batu Ampar, mana yang lebih disarankan?',
    answer:
      'Untuk gudang dengan nilai stok tinggi dan aktivitas bongkar-muat yang rentan risiko tak terduga, Property All Risk umumnya lebih sesuai. Tono dapat membandingkan simulasi premi keduanya berdasarkan nilai pertanggungan gudang Anda.',
  },
  {
    question: 'Apakah premi Property All Risk selalu jauh lebih mahal?',
    answer:
      'Selisihnya bervariasi tergantung profil risiko properti. Untuk bangunan dengan risiko rendah, selisih premi antara FLEXAS plus perluasan dan Property All Risk bisa jadi tidak terlalu jauh — Tono dapat membantu membandingkan keduanya secara konkret.',
  },
]

export default function ArtikelPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Properti', url: '/produk/asuransi-properti' },
          { name: 'FLEXAS vs Property All Risk', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Perbandingan cakupan FLEXAS dan Property All Risk untuk membantu memilih polis properti yang tepat di Batam.',
          path: PATH,
          datePublished: '2026-07-31',
          dateModified: '2026-07-31',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Properti', href: '/produk/asuransi-properti' },
          { label: 'FLEXAS vs Property All Risk' },
        ]}
      />

      <ArticleHero
        warna="orange"
        kategori="Perbandingan"
        icon={GitCompare}
        title={JUDUL}
        intro="Dua istilah ini paling sering membingungkan calon nasabah properti. Simak perbedaan cakupan, harga, dan gambaran cocok untuk jenis properti seperti apa."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="flexas-vs-property-all-risk"
            variant="header"
            warna="orange"
            aspect="wide"
            label="Foto pabrik/gudang di kawasan industri Batam atau ilustrasi perbandingan dua polis"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Saat mengajukan asuransi properti, klien Tono di Batam sering dihadapkan pada dua
            istilah teknis: FLEXAS dan Property All Risk (PAR). Keduanya sama-sama melindungi
            bangunan dari kerugian fisik, tetapi cara kerja dan luas cakupannya cukup berbeda —
            dan perbedaan ini berdampak langsung pada premi yang dibayar serta apa saja yang
            benar-benar ditanggung saat klaim.
          </p>
          <p>
            Secara sederhana, FLEXAS bekerja dengan prinsip <em>named perils</em>: hanya risiko
            yang disebutkan secara eksplisit dalam polis yang dijamin. Property All Risk bekerja
            sebaliknya, menjamin semua risiko kecuali yang secara khusus dikecualikan. Tabel di
            bawah merangkum perbedaan utamanya.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="orange"
            title="FLEXAS vs Property All Risk"
            headers={['Aspek', 'FLEXAS', 'Property All Risk (PAR)']}
            rows={tabelPerbandingan}
            caption="Cakupan detail tetap mengikuti wording polis masing-masing perusahaan asuransi."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="orange"
            title="Pabrik Elektronik di Batamindo Memilih Property All Risk"
          >
            <p>
              Sebuah pabrik perakitan komponen elektronik di Kawasan Industri Batamindo semula
              mempertimbangkan FLEXAS dengan beberapa perluasan untuk menekan premi. Namun setelah
              Tono memaparkan bahwa kerusakan mesin akibat gangguan tegangan listrik — yang cukup
              sering terjadi pada instalasi pabrik — tidak otomatis termasuk dalam FLEXAS maupun
              perluasannya, pemilik pabrik memutuskan beralih ke Property All Risk.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: untuk properti dengan mesin produksi bernilai tinggi, cakupan yang lebih
              luas sering kali lebih penting daripada selisih premi.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="orange"
            title="Hal-hal yang Perlu Diketahui Sebelum Memilih"
            items={[
              'FLEXAS lebih cocok untuk properti dengan anggaran premi terbatas dan profil risiko sederhana, seperti rumah tinggal.',
              'Property All Risk lebih relevan untuk bangunan usaha dengan mesin, stok, atau peralatan bernilai tinggi.',
              'Baik FLEXAS maupun PAR sama-sama memerlukan perluasan terpisah untuk banjir dan gempa bumi.',
              'Bandingkan bukan hanya premi, tapi juga daftar pengecualian (exclusion) di masing-masing polis.',
              'Tono dapat membantu simulasi premi kedua jenis polis berdasarkan profil properti Anda sebelum memutuskan.',
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
        title="Pertanyaan Seputar FLEXAS dan Property All Risk"
        intro="Pertanyaan yang sering muncul saat klien Tono membandingkan kedua jenis polis ini."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="orange"
        produkSlug="asuransi-properti"
        currentSlug="flexas-vs-property-all-risk"
      />

      <CTABanner
        heading="Masih Ragu Pilih FLEXAS atau Property All Risk?"
        subheading="Ceritakan jenis dan penggunaan properti Anda ke Tono untuk dibantu membandingkan cakupan dan simulasi premi keduanya."
        waMessage="Halo Tono, saya ingin dibantu membandingkan FLEXAS dan Property All Risk untuk properti saya di Batam."
      />

      <Footer />
    </main>
  )
}
