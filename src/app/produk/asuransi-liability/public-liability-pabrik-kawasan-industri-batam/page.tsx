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
import CoverageList from '@/components/artikel/CoverageList'
import ArticleCrossLinks from '@/components/artikel/ArticleCrossLinks'
import { breadcrumbSchema, articleSchema, faqSchema } from '@/lib/schema'
import { Factory } from 'lucide-react'

const PATH = '/produk/asuransi-liability/public-liability-pabrik-kawasan-industri-batam'
const JUDUL = 'Asuransi Public Liability untuk Pabrik di Kawasan Industri Batam'

export const metadata: Metadata = {
  title: 'Public Liability untuk Pabrik & Kawasan Industri Batam | Batam Proteksi',
  description:
    'Perlindungan tanggung jawab hukum saat buyer, auditor, atau tamu asing cedera selama kunjungan ke pabrik di Batamindo, Kabil, dan Panbil.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description:
      'Risiko liability dari kunjungan buyer dan auditor asing ke pabrik-pabrik di kawasan industri Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
    images: ['/og-image.png'],
  },
}

const tabelLimit = [
  [
    'Pabrik kecil/UKM — kunjungan tamu jarang',
    'Workshop kecil, home industry skala menengah',
    'Rp 1 - 2 Miliar',
  ],
  [
    'Pabrik menengah — kunjungan buyer rutin',
    'Pabrik manufaktur dengan lini produksi aktif',
    'Rp 2 - 5 Miliar',
  ],
  [
    'Pabrik besar — kunjungan auditor/buyer asing intensif',
    'Pabrik ekspor skala besar di Batamindo, Kabil, Panbil',
    'Rp 5 - 10 Miliar atau sesuai syarat buyer',
  ],
]

const faqItems = [
  {
    question: 'Apa bedanya Public Liability ini dengan Employers Liability yang sudah dibahas di halaman utama Liability?',
    answer:
      "Public Liability menanggung cedera pihak luar seperti buyer, auditor, atau tamu yang berkunjung ke pabrik. Employers' Liability menanggung cedera karyawan pabrik itu sendiri di luar cakupan BPJS Ketenagakerjaan. Keduanya berbeda ranah dan idealnya dimiliki terpisah oleh pabrik dengan aktivitas kunjungan tamu yang tinggi.",
  },
  {
    question: 'Apakah kontraktor atau vendor yang sedang bekerja di pabrik termasuk pihak ketiga yang dilindungi?',
    answer:
      'Kontraktor/vendor eksternal yang mengalami cedera akibat kondisi lokasi pabrik Anda (bukan akibat pekerjaan mereka sendiri) umumnya termasuk pihak ketiga yang dapat dilindungi Public Liability. Namun bila kontraktor tersebut membawa tim kerja sendiri dengan risiko dari pekerjaan mereka, sebaiknya mereka juga punya Public Liability sendiri untuk pekerjaan tersebut.',
  },
  {
    question: 'Apakah buyer/auditor asing biasanya meminta bukti asuransi sebelum kunjungan?',
    answer:
      'Sebagian buyer dan auditor internasional, terutama yang menerapkan standar due diligence ketat, memang dapat menanyakan atau mensyaratkan bukti perlindungan liability sebagai bagian dari audit kepatuhan pabrik, meski ini tidak selalu berlaku universal untuk semua buyer.',
  },
  {
    question: 'Apakah insiden yang terjadi di area produksi (bukan kantor/lobby) tetap dijamin?',
    answer:
      'Tetap dapat dijamin selama tamu berada di area tersebut dengan izin/sepengetahuan pabrik, misalnya saat safety walk atau plant tour yang memang menjadi bagian dari kunjungan resmi mereka.',
  },
  {
    question: 'Bagaimana proses klaim jika tamu asing yang cedera sudah kembali ke negaranya?',
    answer:
      'Proses klaim tetap bisa dilanjutkan melalui korespondensi dan dokumen medis, meski koordinasinya membutuhkan waktu lebih lama dibanding klaim dengan pihak yang berdomisili di Indonesia. Sampaikan kronologi dan dokumentasi kejadian ke Tono sesegera mungkin agar proses tidak tertunda.',
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
          { name: 'Public Liability Pabrik & Kawasan Industri', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Perlindungan tanggung jawab hukum saat buyer, auditor, atau tamu asing cedera selama kunjungan ke pabrik di kawasan industri Batam.',
          path: PATH,
          datePublished: '2026-08-08',
          dateModified: '2026-08-08',
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Liability', href: '/produk/asuransi-liability' },
          { label: 'Public Liability Pabrik & Kawasan Industri' },
        ]}
      />

      <ArticleHero
        warna="purple"
        kategori="Panduan"
        icon={Factory}
        title={JUDUL}
        intro="Pabrik-pabrik ekspor di Batamindo, Kabil, dan Panbil rutin menerima kunjungan buyer, auditor, dan mitra bisnis dari luar negeri. Setiap kunjungan membawa tanggung jawab hukum yang perlu diperhitungkan pabrik, bukan cuma soal keramahtamahan."
        lastUpdated="8 Agustus 2026"
        estimasiBaca="7 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="public-liability-pabrik-kawasan-industri-batam"
            variant="header"
            warna="purple"
            aspect="wide"
            label="Foto area produksi pabrik atau kunjungan tamu/buyer di kawasan industri Batam"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Sebagai salah satu pusat manufaktur ekspor terbesar di Indonesia, pabrik-pabrik di
            kawasan industri Batam menjadi tujuan kunjungan rutin buyer internasional, auditor
            kepatuhan (compliance audit), hingga mitra bisnis yang datang langsung meninjau
            fasilitas produksi sebelum menandatangani kontrak.
          </p>
          <p>
            Kunjungan semacam ini penting secara bisnis, tapi juga membawa eksposur risiko: area
            produksi bukan lingkungan yang sepenuhnya bebas risiko bagi orang yang tidak
            terbiasa dengan kondisi lapangan pabrik sehari-hari.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="purple"
            title="Titik Rawan Saat Kunjungan Tamu ke Area Pabrik"
            items={[
              'Lantai produksi yang licin akibat oli, cairan produksi, atau sisa material.',
              'Area dengan mesin aktif yang dilalui tamu saat plant tour tanpa jalur khusus pengunjung.',
              'Material atau komponen yang disimpan di jalur lalu-lalang tanpa penandaan yang jelas.',
              'Area parkir dan bongkar-muat yang juga dilalui kendaraan tamu/buyer.',
              'Kebisingan dan area terbatas yang membuat komunikasi keselamatan dengan tamu asing kurang optimal.',
            ]}
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Apa yang Dijamin dan Tidak Dijamin
          </h2>
          <CoverageList
            warna="purple"
            ditanggung={[
              'Cedera buyer, auditor, atau tamu bisnis lain akibat kondisi area pabrik saat kunjungan resmi.',
              'Kerusakan kendaraan tamu di area parkir pabrik akibat kelalaian pengelolaan lokasi.',
              'Biaya pembelaan hukum saat pabrik digugat oleh tamu yang cedera.',
              'Biaya pertolongan pertama/medis darurat untuk tamu yang cedera di lokasi.',
            ]}
            tidakDitanggung={[
              "Cedera karyawan pabrik sendiri saat bekerja — ranah BPJS Ketenagakerjaan/Employers' Liability.",
              'Kerugian akibat produk hasil produksi yang bermasalah di tangan buyer — ranah Product Liability.',
              'Kerusakan mesin atau fasilitas produksi milik pabrik sendiri — ranah asuransi properti/engineering.',
              'Cedera yang terjadi di area yang secara jelas ditandai terlarang bagi pengunjung tanpa izin resmi.',
            ]}
          />
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="purple"
            title="Ilustrasi Limit Berdasarkan Skala Pabrik"
            headers={['Skala Usaha', 'Contoh', 'Limit yang Umum Dipilih']}
            rows={tabelLimit}
            caption="Angka bersifat ilustratif untuk gambaran umum, bukan penawaran resmi. Limit final tergantung profil risiko dan penilaian underwriting perusahaan asuransi, serta bisa mengikuti syarat khusus dari buyer."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="purple"
            title="Auditor Asing Terpeleset Saat Plant Tour di Pabrik Kawasan Kabil"
          >
            <p>
              Sebuah pabrik manufaktur ekspor di kawasan Kabil kedatangan tim auditor dari mitra
              buyer luar negeri untuk melakukan compliance audit tahunan. Rombongan diajak
              meninjau langsung area lini produksi sebagai bagian dari proses audit.
            </p>
            <p>
              Saat berjalan melewati salah satu titik lini produksi, lantai dalam kondisi sedikit
              licin akibat sisa cairan proses yang belum sepenuhnya dibersihkan. Salah satu
              anggota tim auditor terpeleset dan mengalami cedera pada pergelangan kaki.
            </p>
            <p className="font-medium text-foreground">
              Karena pabrik memiliki Public Liability, biaya penanganan medis dan proses
              komunikasi dengan pihak buyer terkait insiden ini dapat ditangani secara profesional
              — membantu menjaga hubungan kerja sama dengan buyer tetap berjalan baik.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="8 Agustus 2026" />
        </div>
      </section>

      <FAQSection
        title="Pertanyaan Seputar Public Liability untuk Pabrik & Kawasan Industri"
        intro="Pertanyaan yang sering muncul dari pengelola pabrik di kawasan industri Batam."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="purple"
        produkSlug="asuransi-liability"
        currentSlug="public-liability-pabrik-kawasan-industri-batam"
      />

      <CTABanner
        heading="Pabrik Anda Rutin Menerima Kunjungan Buyer atau Auditor?"
        subheading="Diskusikan pola kunjungan tamu di pabrik Anda dengan Tono untuk menentukan limit Public Liability yang sesuai."
        waMessage="Halo Tono, pabrik saya di Batam rutin menerima kunjungan buyer/auditor dan ingin konsultasi Public Liability."
      />

      <Footer />
    </main>
  )
}
