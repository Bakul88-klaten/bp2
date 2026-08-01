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
import { ClipboardList } from 'lucide-react'

const PATH = '/produk/asuransi-kendaraan/panduan-klaim-kecelakaan-kendaraan'
const JUDUL = 'Panduan Lengkap Klaim Kecelakaan Mobil di Batam: Tunggal, Ganda, sampai Kehilangan'

export const metadata: Metadata = {
  title: 'Panduan Klaim Kecelakaan Mobil di Batam | Batam Proteksi',
  description:
    'Langkah dan dokumen yang dibutuhkan untuk klaim kecelakaan tunggal, ganda, dan kehilangan kendaraan di Batam, termasuk jalur padat menuju kawasan industri dan pelabuhan.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Panduan klaim kecelakaan tunggal, ganda, dan kehilangan kendaraan di Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelJenisKlaim = [
  [
    'Kecelakaan Tunggal',
    'Foto lokasi & kerusakan, SIM, STNK, kronologi kejadian',
    'Tidak melibatkan pihak ketiga; proses relatif lebih cepat untuk polis All Risk',
  ],
  [
    'Kecelakaan Ganda (Tabrakan)',
    'Dokumen di atas, ditambah data kendaraan & identitas pihak lain, laporan polisi bila diperlukan',
    'Tanggung jawab hukum berlaku jika kendaraan Anda dinilai sebagai penyebab kecelakaan',
  ],
  [
    'Pencurian / Kehilangan',
    'Laporan Polisi (LP) wajib, STNK & BPKB asli, kunci kendaraan',
    'Umumnya melalui masa tunggu tertentu sebelum diproses sebagai klaim Total Loss',
  ],
  [
    'Kerusakan akibat Banjir',
    'Foto genangan & kerusakan, laporan kejadian',
    'Hanya ditanggung bila polis memiliki perluasan jaminan banjir',
  ],
]

const faqItems = [
  {
    question: 'Berapa lama batas waktu melapor setelah kecelakaan terjadi?',
    answer:
      'Sebagian besar polis mensyaratkan pelaporan dalam 3x24 jam sejak kejadian. Semakin cepat Anda melapor ke Tono dan mendokumentasikan lokasi kejadian, semakin lancar proses verifikasinya.',
  },
  {
    question: 'Apa bedanya klaim sendiri dan klaim pihak ketiga?',
    answer:
      'Klaim sendiri (own damage) berlaku untuk kerusakan kendaraan Anda sendiri, sedangkan klaim tanggung jawab pihak ketiga (TJH/TPL) berlaku jika kendaraan Anda menyebabkan kerugian pada kendaraan, properti, atau orang lain — umumnya tersedia sebagai perluasan jaminan.',
  },
  {
    question: 'Apakah SIM yang sudah mati masa berlakunya memengaruhi klaim?',
    answer:
      'Bisa. Pengemudi yang tidak memiliki SIM yang berlaku saat kejadian berisiko membuat klaim ditolak, karena dianggap melanggar ketentuan pengemudi yang sah dalam polis.',
  },
  {
    question: 'Bagaimana proses klaim jika kecelakaan terjadi di jalur menuju kawasan industri?',
    answer:
      'Prosesnya sama seperti kecelakaan pada umumnya. Yang membedakan biasanya adalah kepadatan lalu lintas pada jam berangkat dan pulang kerja di jalur seperti Simpang Kabil dan Batu Ampar, sehingga dokumentasi lokasi dan saksi di sekitar menjadi lebih penting untuk memperjelas kronologi.',
  },
  {
    question: 'Apakah kendaraan boleh langsung dipindahkan setelah tabrakan?',
    answer:
      'Untuk tabrakan ganda, sebaiknya foto posisi kendaraan terlebih dahulu sebelum dipindahkan, kecuali menghalangi arus lalu lintas dan membahayakan keselamatan. Dokumentasi posisi awal membantu proses verifikasi kronologi oleh surveyor.',
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
          { name: 'Panduan Klaim Kecelakaan', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Langkah dan dokumen yang dibutuhkan untuk klaim kecelakaan tunggal, ganda, dan kehilangan kendaraan di Batam.',
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
          { label: 'Asuransi Kendaraan', href: '/produk/asuransi-kendaraan' },
          { label: 'Panduan Klaim Kecelakaan' },
        ]}
      />

      <ArticleHero
        warna="blue"
        kategori="Panduan"
        icon={ClipboardList}
        title={JUDUL}
        intro="Setiap jenis klaim kendaraan punya dokumen dan alur yang sedikit berbeda. Berikut panduan praktisnya, agar Anda tidak bingung saat kejadian benar-benar terjadi."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="panduan-klaim-kecelakaan-kendaraan"
            variant="header"
            warna="blue"
            aspect="wide"
            label="Foto kondisi lalu lintas Batam atau ilustrasi dokumentasi kecelakaan"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Lalu lintas Batam punya karakter tersendiri: jalur padat menuju kawasan industri
            seperti Batamindo dan Kabil pada jam berangkat kerja, arus kendaraan logistik menuju
            Pelabuhan Batu Ampar, hingga jalan Barelang yang berkelok menuju pulau-pulau
            penghubung. Masing-masing punya risiko kecelakaan yang berbeda karakter.
          </p>
          <p>
            Apa pun jenis kejadiannya, kecepatan dan kelengkapan dokumentasi di awal sangat
            menentukan lancar-tidaknya proses klaim. Berikut rangkuman dokumen yang perlu
            disiapkan untuk masing-masing jenis klaim kendaraan.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="blue"
            title="Dokumen per Jenis Klaim Kendaraan"
            headers={['Jenis Klaim', 'Dokumen yang Dibutuhkan', 'Catatan']}
            rows={tabelJenisKlaim}
            caption="Persyaratan detail dapat berbeda tipis antar perusahaan asuransi mitra."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="panduan-klaim-kecelakaan-kendaraan"
            variant="inline"
            warna="blue"
            aspect="video"
            label="Foto dokumentasi kecelakaan (kronologi, STNK, lokasi) sebagai ilustrasi langkah klaim"
          />
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox warna="blue" title="Tabrakan Beruntun Menjelang Simpang Kabil Saat Jam Berangkat Kerja">
            <p>
              Seorang karyawan pabrik yang berangkat menuju kawasan industri Kabil mengalami
              tabrakan beruntun ringan akibat pengereman mendadak di jalur padat menjelang
              simpang. Karena buru-buru, kendaraan sempat dipindahkan ke bahu jalan tanpa
              dokumentasi posisi awal.
            </p>
            <p>
              Saat proses klaim, surveyor sempat kesulitan memverifikasi kronologi karena posisi
              kendaraan sudah berubah dan tidak ada foto awal. Prosesnya akhirnya tetap berjalan,
              namun butuh waktu lebih lama karena harus mengumpulkan keterangan tambahan dari
              pihak-pihak yang terlibat.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: sesibuk apa pun situasinya, luangkan waktu sejenak untuk memotret posisi
              kendaraan sebelum dipindahkan, selama tidak membahayakan keselamatan.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="blue"
            title="Hal-hal yang Perlu Diketahui Saat Klaim Kecelakaan"
            items={[
              'Dokumentasikan lokasi, posisi kendaraan, dan kerusakan sebelum kendaraan dipindahkan.',
              'Laporkan kejadian ke Tono secepat mungkin, idealnya dalam 3x24 jam.',
              'Untuk kecelakaan ganda, catat data kendaraan dan identitas pihak lain di lokasi kejadian.',
              'Simpan STNK, SIM yang masih berlaku, dan dokumen kendaraan lain di tempat yang mudah dijangkau.',
              'Untuk kasus kehilangan, laporan polisi (LP) menjadi dokumen wajib yang tidak bisa diwakilkan.',
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
        title="Pertanyaan Seputar Klaim Kecelakaan Kendaraan"
        intro="Pertanyaan yang sering muncul saat klien Tono mengalami kecelakaan atau kehilangan kendaraan."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="blue"
        produkSlug="asuransi-kendaraan"
        currentSlug="panduan-klaim-kecelakaan-kendaraan"
      />

      <CTABanner
        heading="Baru Saja Mengalami Kecelakaan?"
        subheading="Hubungi Tono untuk didampingi sejak pelaporan awal hingga proses klaim kendaraan Anda selesai."
        waMessage="Halo Tono, mobil saya baru saja mengalami kecelakaan di Batam dan saya butuh bantuan proses klaim."
      />

      <Footer />
    </main>
  )
}
