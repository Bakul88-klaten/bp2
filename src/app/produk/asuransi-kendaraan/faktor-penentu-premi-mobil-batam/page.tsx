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
import { Gauge } from 'lucide-react'

const PATH = '/produk/asuransi-kendaraan/faktor-penentu-premi-mobil-batam'
const JUDUL = 'Faktor Penentu Premi Asuransi Mobil di Batam & Simulasi Perhitungannya'

export const metadata: Metadata = {
  title: 'Faktor Penentu Premi Asuransi Mobil di Batam | Batam Proteksi',
  description:
    'Faktor-faktor yang memengaruhi besaran premi asuransi mobil All Risk dan TLO di Batam, lengkap dengan ilustrasi perbandingan dua profil pemilik kendaraan.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Faktor penentu premi asuransi mobil All Risk dan TLO di Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelFaktor = [
  [
    'Jenis pertanggungan',
    'All Risk mencakup lebih banyak risiko sehingga rate premi lebih tinggi dari TLO',
    'Mobil operasional harian umumnya All Risk; mobil cadangan sering cukup TLO',
  ],
  [
    'Usia & harga kendaraan',
    'Rate mengikuti kisaran harga acuan; kendaraan baru dan mahal punya rate persentase berbeda dari kendaraan tua',
    'Mobil keluaran 3 tahun terakhir vs mobil berusia 8 tahun',
  ],
  [
    'Penggunaan kendaraan',
    'Pemakaian komersial (armada usaha, ojek/taksi online) dinilai berisiko lebih tinggi dari pemakaian pribadi',
    'Mobil untuk layanan antar-jemput vs mobil pribadi harian',
  ],
  [
    'Wilayah/domisili',
    'Zona wilayah tempat kendaraan terdaftar memengaruhi rate premi dasar',
    'Kendaraan terdaftar dan beroperasi di Batam, Kepulauan Riau',
  ],
  [
    'Riwayat klaim',
    'Rekam klaim bersih pada polis sebelumnya (No Claim Bonus) dapat menurunkan premi perpanjangan',
    'Tahun pertama tanpa klaim vs tahun dengan beberapa kali klaim',
  ],
]

const faqItems = [
  {
    question: 'Apakah premi asuransi mobil bisa ditawar?',
    answer:
      'Rate dasar premi kendaraan bermotor mengacu pada tarif acuan yang ditetapkan regulator berdasarkan zona wilayah dan kisaran harga kendaraan, sehingga tidak bisa ditawar sembarangan. Namun Anda tetap bisa membandingkan penawaran dari beberapa mitra asuransi serta menyesuaikan deductible untuk mendapatkan premi paling sesuai.',
  },
  {
    question: 'Apakah ada batas usia kendaraan untuk All Risk?',
    answer:
      'Sebagian besar perusahaan asuransi membatasi usia kendaraan untuk All Risk, umumnya di bawah 10 tahun sejak tahun pembuatan. Kendaraan yang lebih tua biasanya masih bisa diasuransikan dengan skema TLO atau syarat khusus.',
  },
  {
    question: 'Apa itu No Claim Bonus dan bagaimana pengaruhnya ke premi?',
    answer:
      'No Claim Bonus adalah rekam jejak tidak mengajukan klaim selama periode polis berjalan. Rekam jejak ini menjadi salah satu pertimbangan perusahaan asuransi saat menentukan premi perpanjangan, meski penerapannya bisa berbeda antar perusahaan.',
  },
  {
    question: 'Apakah menambah pengemudi cadangan memengaruhi premi?',
    answer:
      'Umumnya tidak secara langsung, karena polis kendaraan di Indonesia biasanya melekat pada kendaraan (bukan pengemudi tertentu). Yang lebih berpengaruh adalah jenis penggunaan kendaraan itu sendiri — pribadi atau komersial.',
  },
  {
    question: 'Apakah pemasangan GPS tracker bisa menurunkan premi?',
    answer:
      'Pada sebagian mitra asuransi, fitur keamanan tambahan seperti GPS tracker atau alarm dapat menjadi pertimbangan positif saat penilaian risiko, meski besarannya bervariasi. Tanyakan ke Tono untuk mitra yang mempertimbangkan faktor ini.',
  },
]

export default function ArtikelPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Kendaraan', url: '/produk/asuransi-kendaraan' },
          { name: 'Faktor Penentu Premi Mobil', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Faktor-faktor yang memengaruhi besaran premi asuransi mobil All Risk dan TLO di Batam.',
          path: PATH,
          datePublished: '2026-07-31',
          dateModified: '2026-07-31',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Kendaraan', href: '/produk/asuransi-kendaraan' },
          { label: 'Faktor Penentu Premi Mobil' },
        ]}
      />

      <ArticleHero
        warna="blue"
        kategori="Panduan"
        icon={Gauge}
        title={JUDUL}
        intro="Dua mobil dengan merek dan tahun yang sama bisa punya premi berbeda jauh. Berikut faktor-faktor yang membentuk angka premi asuransi mobil Anda di Batam."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            warna="blue"
            aspect="wide"
            label="Foto mobil pribadi/armada usaha di jalan Batam atau infografis faktor premi"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Pertanyaan paling umum dari calon nasabah kendaraan di Batam adalah &ldquo;kenapa
            premi mobil saya berbeda dari punya tetangga, padahal mobilnya sama?&rdquo; Jawabannya
            terletak pada beberapa faktor yang dinilai bersamaan oleh perusahaan asuransi, bukan
            hanya jenis dan tahun kendaraan.
          </p>
          <p>
            Memahami faktor-faktor ini membantu Anda menyiapkan ekspektasi premi yang realistis,
            sekaligus mengetahui bagian mana yang masih bisa disesuaikan agar polis lebih sesuai
            anggaran tanpa mengorbankan perlindungan yang dibutuhkan.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="blue"
            title="Faktor yang Memengaruhi Premi Kendaraan"
            headers={['Faktor', 'Pengaruh terhadap Premi', 'Contoh di Batam']}
            rows={tabelFaktor}
            caption="Ilustrasi umum. Rate premi akhir tetap mengikuti perhitungan masing-masing perusahaan asuransi mitra."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox warna="blue" title="Pemilik Mobil Rental Sempat Kaget dengan Selisih Premi">
            <p>
              Seorang klien membandingkan penawaran premi mobilnya dengan milik rekan yang
              kebetulan memiliki mobil sejenis dan sama-sama diajukan sebagai All Risk. Ia sempat
              heran karena preminya lebih tinggi, padahal mobilnya lebih muda.
            </p>
            <p>
              Setelah ditelusuri, perbedaan itu muncul karena mobil miliknya digunakan untuk
              layanan antar-jemput penumpang (penggunaan komersial), sementara mobil rekannya
              murni untuk pemakaian pribadi harian. Penggunaan komersial dinilai memiliki eksposur
              risiko yang lebih tinggi karena jam operasional dan jarak tempuh yang jauh lebih
              besar.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: selalu sampaikan penggunaan kendaraan yang sebenarnya sejak awal — selain
              memengaruhi premi, hal ini juga menentukan keabsahan klaim di kemudian hari.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="blue"
            title="Hal-hal yang Perlu Diketahui Soal Premi Kendaraan"
            items={[
              'Rate dasar premi All Risk dan TLO mengikuti tarif acuan berdasarkan zona wilayah dan kisaran harga kendaraan, bukan angka sembarangan.',
              'Sampaikan penggunaan kendaraan yang sebenarnya (pribadi/komersial) — menyembunyikan ini berisiko klaim ditolak di kemudian hari.',
              'Deductible atau risiko sendiri yang lebih tinggi biasanya menurunkan premi tahunan.',
              'Riwayat klaim pada polis sebelumnya dapat memengaruhi harga saat perpanjangan.',
              'Tono dapat membantu simulasi premi dari beberapa mitra asuransi sebelum Anda memutuskan.',
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
        title="Pertanyaan Seputar Premi Asuransi Mobil"
        intro="Hal-hal yang paling sering ditanyakan klien Tono soal perhitungan premi kendaraan."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="blue"
        produkSlug="asuransi-kendaraan"
        currentSlug="faktor-penentu-premi-mobil-batam"
      />

      <CTABanner
        heading="Ingin Tahu Estimasi Premi Mobil Anda?"
        subheading="Sampaikan jenis, tahun, dan penggunaan kendaraan Anda ke Tono untuk mendapat simulasi premi All Risk maupun TLO."
        waMessage="Halo Tono, saya ingin simulasi premi asuransi mobil saya di Batam."
      />

      <Footer />
    </main>
  )
}
