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
import { PackageSearch } from 'lucide-react'

const PATH = '/produk/asuransi-cargo/panduan-klaim-cargo-rusak-hilang'
const JUDUL = 'Panduan Klaim Asuransi Cargo: Barang Rusak, Basah, atau Hilang di Pelabuhan'

export const metadata: Metadata = {
  title: 'Panduan Klaim Cargo Rusak & Hilang di Pelabuhan Batam | Batam Proteksi',
  description:
    'Dokumen dan tahapan klaim saat barang kiriman rusak, basah, kurang jumlah, atau hilang di Pelabuhan Batu Ampar dan sekitar Batam.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Panduan klaim cargo rusak, basah, atau hilang di Pelabuhan Batu Ampar.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelKondisi = [
  [
    'Rusak fisik (penyok, pecah)',
    'Foto kemasan & isi sebelum dibongkar penuh; catat ketidaksesuaian pada delivery note',
    'Foto, notasi kerusakan di delivery order, packing list',
  ],
  [
    'Basah / terkena air',
    'Pisahkan dari barang lain, foto kondisi, simpan sampel bila memungkinkan',
    'Foto, invoice, laporan kondisi pelayaran bila tersedia',
  ],
  [
    'Kekurangan jumlah (short landed)',
    'Cocokkan jumlah fisik dengan packing list & bill of lading saat bongkar di pelabuhan',
    'Berita acara bongkar, packing list, bill of lading',
  ],
  [
    'Hilang total / tidak sampai',
    'Konfirmasi ke forwarder atau perusahaan pelayaran, laporkan ke Tono segera',
    'Bill of lading, korespondensi dengan pengangkut, invoice',
  ],
]

const faqItems = [
  {
    question: 'Berapa lama batas waktu mengajukan klaim setelah barang diterima?',
    answer:
      'Umumnya klaim perlu diajukan sesegera mungkin, dan kerusakan tersembunyi (concealed damage) tetap harus dilaporkan dalam batas waktu tertentu setelah penerimaan sesuai ketentuan polis. Semakin cepat dilaporkan ke Tono, semakin besar peluang klaim diproses lancar.',
  },
  {
    question: 'Bagaimana jika kerusakan baru terlihat setelah kemasan dibuka di kawasan industri?',
    answer:
      'Segera foto kondisi kemasan asli (jika masih ada) dan isi yang rusak, lalu laporkan ke Tono. Kerusakan tersembunyi tetap bisa diklaim, namun pelaporan yang lebih lambat berisiko menyulitkan proses verifikasi penyebab kerusakan.',
  },
  {
    question: 'Siapa yang mengajukan klaim jika pembelian menggunakan incoterm CIF?',
    answer:
      'Pada incoterm CIF, penjual yang membeli polis, namun hak klaim biasanya beralih ke pembeli begitu barang dikirim. Pembeli sebagai penerima di Batam yang mengajukan klaim, dengan polis dan dokumen pengiriman dari penjual sebagai dasar.',
  },
  {
    question: 'Bolehkah barang langsung digunakan sebelum proses klaim selesai disurvei?',
    answer:
      'Sebaiknya tidak, terutama untuk kerusakan yang signifikan. Simpan barang dalam kondisi apa adanya hingga surveyor melakukan pemeriksaan, agar penyebab dan besar kerugian dapat diverifikasi dengan akurat.',
  },
  {
    question: 'Apa yang terjadi jika tanda terima ditandatangani tanpa mencatat kerusakan?',
    answer:
      'Menandatangani tanda terima tanpa catatan (clean receipt) dapat mempersulit klaim, karena dianggap barang diterima dalam kondisi baik. Selalu catat ketidaksesuaian pada dokumen serah terima sebelum menandatangani, sekecil apa pun kerusakannya.',
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
          { name: 'Panduan Klaim Cargo', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Dokumen dan tahapan klaim saat barang kiriman rusak, basah, atau hilang di Pelabuhan Batu Ampar dan sekitar Batam.',
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
          { label: 'Panduan Klaim Cargo' },
        ]}
      />

      <ArticleHero
        warna="cyan"
        kategori="Panduan"
        icon={PackageSearch}
        title={JUDUL}
        intro="Setiap kondisi barang bermasalah punya langkah penanganan yang sedikit berbeda. Kenali dokumen dan tindakan awal yang perlu disiapkan agar klaim cargo Anda berjalan lancar."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            warna="cyan"
            aspect="wide"
            label="Foto kontainer/gudang transit di Pelabuhan Batu Ampar atau ilustrasi proses klaim"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Barang yang melewati Pelabuhan Batu Ampar menjalani proses panjang: bongkar dari
            kapal, penyimpanan sementara di area pelabuhan, hingga pengangkutan lanjutan menuju
            kawasan industri seperti Kabil atau Panbil. Di setiap tahap ini, ada peluang barang
            mengalami kerusakan, basah, atau bahkan kekurangan jumlah dari yang tercatat di
            dokumen pengiriman.
          </p>
          <p>
            Kabar baiknya, sebagian besar kondisi ini bisa diklaim selama polis dan klausul yang
            dipilih mencakupnya. Yang membedakan lancar-tidaknya proses klaim biasanya adalah
            seberapa cepat dan lengkap dokumentasi yang dilakukan begitu masalah ditemukan.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="cyan"
            title="Langkah Awal per Kondisi Barang"
            headers={['Kondisi Barang', 'Langkah Segera', 'Dokumen Pendukung']}
            rows={tabelKondisi}
            caption="Persyaratan detail dapat berbeda tipis antar perusahaan asuransi dan klausul (ICC A/B/C) yang dipilih."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="cyan"
            title="Bahan Baku Basah Saat Penyimpanan Sementara di Area Pelabuhan"
          >
            <p>
              Sebuah pabrik di Kawasan Industri Kabil mengimpor bahan baku yang transit sementara
              di area penyimpanan Pelabuhan Batu Ampar sebelum diangkut ke pabrik. Hujan deras
              menyebabkan sebagian kemasan bocor dan bahan baku di dalamnya basah.
            </p>
            <p>
              Karena polis yang digunakan adalah ICC A, kerusakan akibat kebocoran ini tetap
              tertanggung meski penyebabnya bukan risiko yang secara eksplisit disebutkan —
              sesuai prinsip all risks pada ICC A. Tim Tono membantu mendampingi proses survei dan
              pengajuan dokumen hingga klaim disetujui.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: cakupan yang lebih luas seperti ICC A memberi ruang perlindungan untuk
              kejadian yang sulit diprediksi sebelumnya, seperti kondisi cuaca saat penyimpanan
              sementara di pelabuhan.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="cyan"
            title="Hal-hal yang Perlu Diketahui Saat Mengajukan Klaim"
            items={[
              'Jangan menandatangani tanda terima tanpa mencatat ketidaksesuaian, sekecil apa pun.',
              'Simpan kemasan asli dan barang yang rusak apa adanya hingga proses survei selesai.',
              'Laporkan ke Tono sesegera mungkin — jangan menunggu barang diteruskan ke lokasi berikutnya.',
              'Lengkapi dokumen pengiriman: invoice, packing list, dan bill of lading sejak awal.',
              'Untuk barang yang rutin transit di pelabuhan, pertimbangkan klausul dengan cakupan lebih luas seperti ICC A.',
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
        title="Pertanyaan Seputar Klaim Asuransi Cargo"
        intro="Pertanyaan yang sering muncul saat klien Tono mengalami kendala barang kiriman di pelabuhan."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="cyan"
        produkSlug="asuransi-cargo"
        currentSlug="panduan-klaim-cargo-rusak-hilang"
      />

      <CTABanner
        heading="Barang Kiriman Anda Bermasalah di Pelabuhan?"
        subheading="Hubungi Tono segera agar proses dokumentasi dan klaim cargo Anda dapat didampingi sejak awal."
        waMessage="Halo Tono, barang kiriman saya bermasalah di pelabuhan dan saya butuh bantuan proses klaim cargo."
      />

      <Footer />
    </main>
  )
}
