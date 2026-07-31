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
import { Anchor } from 'lucide-react'

const PATH = '/produk/asuransi-marine/hull-machinery-vs-protection-indemnity'
const JUDUL = 'Hull & Machinery vs Protection & Indemnity (P&I): Dua Pilar Asuransi Kapal'

export const metadata: Metadata = {
  title: 'Hull & Machinery vs P&I untuk Kapal di Batam | Batam Proteksi',
  description:
    'Perbedaan cakupan Hull & Machinery dan Protection & Indemnity (P&I) untuk kapal niaga, tongkang, dan ferry yang beroperasi di perairan Batam hingga ZEE Indonesia.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Perbedaan Hull & Machinery dan P&I untuk kapal yang beroperasi dari Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelHMPI = [
  [
    'Objek pertanggungan',
    'Kerusakan fisik pada badan kapal, mesin, dan perlengkapan',
    'Tanggung jawab hukum terhadap pihak ketiga: awak kapal, penumpang, pencemaran, kerusakan fasilitas pelabuhan',
  ],
  [
    'Contoh risiko',
    'Tabrakan, kandas, kebakaran, kerusakan akibat cuaca buruk',
    'Cedera awak/penumpang, tumpahan bahan bakar, kerusakan dermaga',
  ],
  [
    'Sifat kepesertaan',
    'Umumnya disyaratkan pemberi pembiayaan kapal, meski tidak selalu wajib secara hukum',
    'Sering disyaratkan otoritas pelabuhan/syahbandar, terutama kapal niaga dan ferry',
  ],
  [
    'Paling relevan untuk',
    'Pemilik kapal niaga, tongkang, dan kapal wisata',
    'Operator kapal niaga & ferry penumpang, termasuk rute internasional seperti Batam-Singapura',
  ],
]

const faqItems = [
  {
    question: 'Apakah kapal wajib memiliki Hull & Machinery dan P&I sekaligus?',
    answer:
      'Tidak selalu wajib secara hukum untuk semua jenis kapal, namun untuk kapal niaga dan ferry penumpang yang beroperasi secara komersial, memiliki keduanya sangat disarankan karena keduanya menutupi risiko yang berbeda dan saling melengkapi.',
  },
  {
    question: 'Bagaimana P&I menangani kasus pencemaran akibat tumpahan bahan bakar?',
    answer:
      'P&I umumnya mencakup biaya pembersihan dan tanggung jawab hukum akibat pencemaran yang ditimbulkan kapal, termasuk denda atau tuntutan dari otoritas maupun pihak yang terdampak, sesuai ketentuan polis yang berlaku.',
  },
  {
    question: 'Apakah jangkauan pelayaran hingga ZEE Indonesia memengaruhi premi Hull & Machinery?',
    answer:
      'Bisa. Polis kapal biasanya mencantumkan batas wilayah pelayaran (trading limits). Kapal yang beroperasi hingga Zona Ekonomi Eksklusif (ZEE) atau perairan internasional umumnya memiliki eksposur risiko dan jarak tempuh lebih jauh, yang turut dipertimbangkan dalam penilaian premi.',
  },
  {
    question: 'Apakah penyedia P&I sama dengan perusahaan asuransi Hull & Machinery?',
    answer:
      'Bisa sama, bisa juga berbeda. P&I secara tradisional banyak disediakan melalui P&I Club (asosiasi mutual), sementara Hull & Machinery umumnya diterbitkan oleh perusahaan asuransi konvensional. Tono dapat membantu menghubungkan kebutuhan Anda ke mitra yang sesuai.',
  },
  {
    question: 'Apakah kapal nelayan kecil tetap membutuhkan P&I?',
    answer:
      'Untuk kapal nelayan skala kecil, kebutuhan P&I bergantung pada jumlah awak dan area operasi. Tono dapat membantu menilai apakah cakupan dasar sudah memadai atau perlu ditambah proteksi tanggung jawab hukum.',
  },
]

export default function ArtikelPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Marine', url: '/produk/asuransi-marine' },
          { name: 'Hull & Machinery vs P&I', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Perbedaan cakupan Hull & Machinery dan Protection & Indemnity untuk kapal yang beroperasi dari Batam.',
          path: PATH,
          datePublished: '2026-07-31',
          dateModified: '2026-07-31',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Marine', href: '/produk/asuransi-marine' },
          { label: 'Hull & Machinery vs P&I' },
        ]}
      />

      <ArticleHero
        warna="teal"
        kategori="Perbandingan"
        icon={Anchor}
        title={JUDUL}
        intro="Kapal niaga dan ferry yang berlayar dari perairan Batam menghadapi dua kategori risiko berbeda: kerusakan pada kapal itu sendiri, dan tanggung jawab hukum terhadap pihak lain. Kenali perbedaan keduanya."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            warna="teal"
            aspect="wide"
            label="Foto kapal niaga/tongkang di perairan Batam atau ilustrasi dua jenis proteksi kapal"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Posisi Batam yang berbatasan langsung dengan jalur pelayaran internasional membuat
            kapal-kapal niaga, tongkang, dan ferry penumpang di sini menempuh rute yang bervariasi
            — dari pelayaran domestik antar pelabuhan, hingga rute internasional seperti
            Batam-Singapura yang melintasi Zona Ekonomi Eksklusif (ZEE) Indonesia.
          </p>
          <p>
            Dalam operasional sehari-hari, dua jenis proteksi utama biasanya berjalan
            berdampingan: Hull & Machinery untuk kerusakan pada kapal itu sendiri, dan Protection
            & Indemnity (P&I) untuk tanggung jawab hukum terhadap pihak ketiga. Memahami perbedaan
            keduanya penting agar tidak ada celah perlindungan yang terlewat.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="teal"
            title="Hull & Machinery vs Protection & Indemnity"
            headers={['Aspek', 'Hull & Machinery', 'Protection & Indemnity (P&I)']}
            rows={tabelHMPI}
            caption="Cakupan detail dan pengecualian tetap mengikuti wording polis masing-masing penyedia asuransi/P&I Club."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="teal"
            title="Tongkang Menabrak Fasilitas Dermaga Saat Proses Berlabuh"
          >
            <p>
              Sebuah tongkang pengangkut material menabrak sebagian fasilitas dermaga milik pihak
              ketiga saat proses berlabuh akibat arus yang kuat. Insiden ini menimbulkan dua jenis
              kerugian sekaligus: kerusakan pada bagian lambung tongkang, dan kerusakan pada
              fasilitas dermaga milik pihak lain.
            </p>
            <p>
              Kerusakan pada tongkang ditanggung melalui polis Hull & Machinery, sementara biaya
              perbaikan dermaga pihak ketiga ditanggung melalui P&I yang dimiliki operator kapal.
              Kedua klaim diproses secara terpisah namun saling melengkapi.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: satu insiden di perairan bisa menimbulkan dua jenis kerugian sekaligus —
              inilah mengapa Hull & Machinery dan P&I idealnya dimiliki bersamaan, bukan salah
              satu saja.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="teal"
            title="Hal-hal yang Perlu Diketahui Sebelum Memilih"
            items={[
              'Periksa batas wilayah pelayaran (trading limits) pada polis, terutama jika kapal beroperasi hingga ZEE atau perairan internasional.',
              'Laporkan setiap kali kapal menjalani reparasi di galangan, karena periode ini bisa memerlukan penyesuaian cakupan polis.',
              'P&I umumnya lebih relevan untuk kapal dengan banyak awak/penumpang atau yang berlayar di jalur padat seperti Selat Singapura.',
              'Nilai pertanggungan Hull & Machinery sebaiknya mencerminkan nilai kapal terkini, termasuk peningkatan mesin atau perlengkapan.',
              'Tono dapat membantu menyusun kombinasi Hull & Machinery dan P&I sesuai jenis dan rute operasional kapal Anda.',
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
        title="Pertanyaan Seputar Hull & Machinery dan P&I"
        intro="Pertanyaan yang sering muncul saat klien Tono menentukan kombinasi proteksi kapal yang tepat."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="teal"
        produkSlug="asuransi-marine"
        currentSlug="hull-machinery-vs-protection-indemnity"
      />

      <CTABanner
        heading="Ingin Tahu Kombinasi Proteksi yang Tepat untuk Kapal Anda?"
        subheading="Ceritakan jenis kapal, rute, dan jumlah awak/penumpang ke Tono untuk dibantu menyusun Hull & Machinery dan P&I yang sesuai."
        waMessage="Halo Tono, saya ingin konsultasi Hull & Machinery dan P&I untuk kapal saya di Batam."
      />

      <Footer />
    </main>
  )
}
