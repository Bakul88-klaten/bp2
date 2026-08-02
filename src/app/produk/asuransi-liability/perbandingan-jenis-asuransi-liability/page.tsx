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
import { Scale } from 'lucide-react'

const PATH = '/produk/asuransi-liability/perbandingan-jenis-asuransi-liability'
const JUDUL =
  'Public Liability vs Product Liability vs Professional Indemnity: Mana yang Anda Butuhkan?'

export const metadata: Metadata = {
  title: 'Perbandingan Jenis Asuransi Liability untuk Usaha Batam | Batam Proteksi',
  description:
    'Perbandingan Public Liability, Product Liability, dan Professional Indemnity beserta industri yang cocok, dari restoran, kawasan industri, hingga jasa konsultan di Batam.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Perbandingan tiga jenis utama asuransi liability untuk usaha di Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
    images: ['/og-image.png'],
  },
}

const tabelLiability = [
  [
    'Public Liability',
    'Cedera atau kerugian pihak ketiga akibat operasional atau lokasi usaha',
    'Restoran, ruko, gudang dengan akses publik/tamu',
    'Pengunjung terpeleset di lantai basah restoran',
  ],
  [
    'Product Liability',
    'Cedera atau kerugian akibat produk yang dijual atau diproduksi',
    'Manufaktur di kawasan industri, eksportir barang konsumsi',
    'Produk makanan terkontaminasi menyebabkan pembeli sakit',
  ],
  [
    'Professional Indemnity',
    'Kerugian akibat kesalahan atau kelalaian profesional dalam memberi jasa/saran',
    'Konsultan, kontraktor, arsitek, akuntan',
    'Kesalahan desain kontraktor menyebabkan kerugian proyek klien',
  ],
]

const faqItems = [
  {
    question: 'Apakah Public Liability berlaku untuk kejadian di luar lokasi usaha, misalnya saat event?',
    answer:
      'Bisa, selama tercantum dalam polis. Untuk usaha yang sering mengikuti pameran atau menyelenggarakan acara di luar lokasi utama, sebaiknya sampaikan hal ini ke Tono agar cakupannya turut mempertimbangkan lokasi-lokasi tersebut.',
  },
  {
    question: 'Berapa limit pertanggungan liability yang ideal untuk usaha kecil-menengah?',
    answer:
      'Tidak ada angka baku, karena bergantung pada skala usaha, jumlah pengunjung/pekerja, dan potensi besar tuntutan di industri Anda. Tono dapat membantu menghitung limit yang wajar berdasarkan profil usaha Anda.',
  },
  {
    question: 'Apakah Professional Indemnity berlaku surut untuk pekerjaan yang sudah selesai bertahun-tahun lalu?',
    answer:
      'Umumnya polis Professional Indemnity berbasis "claims made", artinya menanggung tuntutan yang diajukan selama polis aktif, meski pekerjaan penyebabnya sudah selesai — dengan syarat tanggal retroaktif yang disepakati di awal polis.',
  },
  {
    question: 'Bisakah satu polis mencakup lebih dari satu jenis liability sekaligus?',
    answer:
      'Bisa. Banyak pelaku usaha di Batam menggabungkan Public Liability dan Product Liability dalam satu paket, terutama usaha manufaktur yang juga memiliki area publik seperti showroom.',
  },
  {
    question: 'Apakah usaha rumahan atau skala kecil tetap perlu asuransi liability?',
    answer:
      'Tetap perlu dipertimbangkan, terutama jika usaha menerima tamu, pelanggan, atau menjual produk yang dikonsumsi/digunakan langsung. Besaran premi untuk skala kecil umumnya proporsional dengan risiko dan omzet usaha.',
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
          { name: 'Perbandingan Jenis Liability', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Perbandingan Public Liability, Product Liability, dan Professional Indemnity beserta industri yang cocok di Batam.',
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
          { label: 'Asuransi Liability', href: '/produk/asuransi-liability' },
          { label: 'Perbandingan Jenis Liability' },
        ]}
      />

      <ArticleHero
        warna="purple"
        kategori="Perbandingan"
        icon={Scale}
        title={JUDUL}
        intro="Ketiga jenis liability ini sering tertukar karena sama-sama soal tanggung jawab hukum. Padahal pemicu klaim dan industri yang cocok untuk masing-masing cukup berbeda."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="perbandingan-jenis-asuransi-liability"
            variant="header"
            warna="purple"
            aspect="wide"
            label="Foto area usaha dengan akses publik (restoran/ruko) di Batam atau ilustrasi tiga jenis liability"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Pelaku usaha di Batam — mulai dari restoran di Nagoya, pabrik di kawasan industri
            Panbil, hingga kontraktor proyek di Kabil — sama-sama menghadapi risiko digugat pihak
            ketiga. Namun penyebab gugatan yang mungkin muncul berbeda-beda tergantung jenis
            usahanya, dan di sinilah pentingnya memahami perbedaan Public Liability, Product
            Liability, dan Professional Indemnity.
          </p>
          <p>
            Ketiganya sama-sama masuk kategori asuransi tanggung jawab hukum, tetapi memiliki
            pemicu klaim (trigger) yang berbeda. Memilih jenis yang tepat — atau kombinasi
            keduanya — akan menentukan apakah usaha Anda benar-benar terlindungi saat menghadapi
            tuntutan.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="purple"
            title="Perbandingan Tiga Jenis Asuransi Liability"
            headers={['Jenis', 'Pemicu Klaim', 'Industri yang Cocok', 'Contoh Kejadian']}
            rows={tabelLiability}
            caption="Cakupan detail dan pengecualian tetap mengikuti wording polis masing-masing perusahaan asuransi."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="purple"
            title="Kantin di Kawasan Industri Panbil Digugat Setelah Insiden Keracunan Ringan"
          >
            <p>
              Sebuah kantin yang melayani karyawan pabrik di Kawasan Industri Panbil menghadapi
              keluhan dari beberapa karyawan yang mengalami gangguan pencernaan setelah makan
              siang. Pihak pabrik meminta pertanggungjawaban atas hari kerja yang hilang akibat
              insiden tersebut.
            </p>
            <p>
              Karena kantin memiliki polis yang mencakup Product Liability, biaya penanganan
              tuntutan dan kompensasi yang wajar dapat dibantu oleh asuransi, sehingga usaha
              kantin tidak perlu menanggung sendiri seluruh beban finansialnya.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: usaha kuliner berskala kecil sekalipun tetap berisiko digugat jika
              produknya dikonsumsi banyak orang sekaligus, seperti karyawan pabrik dalam satu
              kawasan.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="purple"
            title="Hal-hal yang Perlu Diketahui Sebelum Memilih"
            items={[
              'Liability tidak otomatis melekat pada polis properti atau kendaraan — perlu diajukan sebagai polis atau perluasan tersendiri.',
              'Usaha dengan akses publik seperti restoran dan ruko idealnya minimal memiliki Public Liability.',
              'Usaha manufaktur atau ekspor sebaiknya menambah Product Liability karena tanggung jawab produk bisa berlanjut lama setelah barang terjual.',
              'Penyedia jasa profesional lebih relevan dengan Professional Indemnity dibanding Public Liability.',
              'Limit pertanggungan sebaiknya disesuaikan dengan skala usaha dan potensi besar tuntutan di industri Anda.',
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
        title="Pertanyaan Seputar Jenis Asuransi Liability"
        intro="Pertanyaan yang sering muncul saat klien Tono menentukan jenis liability yang sesuai usahanya."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="purple"
        produkSlug="asuransi-liability"
        currentSlug="perbandingan-jenis-asuransi-liability"
      />

      <CTABanner
        heading="Belum Yakin Liability Mana yang Sesuai Usaha Anda?"
        subheading="Ceritakan jenis dan skala usaha Anda ke Tono untuk dibantu menentukan kombinasi liability yang tepat."
        waMessage="Halo Tono, saya ingin konsultasi memilih jenis asuransi liability yang sesuai untuk usaha saya di Batam."
      />

      <Footer />
    </main>
  )
}
