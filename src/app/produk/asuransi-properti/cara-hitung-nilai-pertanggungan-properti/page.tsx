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
import { Calculator } from 'lucide-react'

const PATH = '/produk/asuransi-properti/cara-hitung-nilai-pertanggungan-properti'
const JUDUL = 'Cara Menghitung Nilai Pertanggungan Properti agar Tidak Rugi Saat Klaim'

export const metadata: Metadata = {
  title: 'Cara Hitung Nilai Pertanggungan Properti Batam | Batam Proteksi',
  description:
    'Panduan menghitung nilai pertanggungan rumah, ruko, dan gudang di Batam agar terhindar dari prinsip average (under-insurance) saat klaim kebakaran.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description:
      'Panduan menghitung nilai pertanggungan properti di Batam agar klaim tidak dipotong prinsip average.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelAverage = [
  ['Ruko A — Pertanggungan Sesuai', 'Rp 2 Miliar', 'Rp 2 Miliar (100%)', 'Rp 500 Juta', 'Rp 500 Juta (ganti penuh)'],
  ['Ruko B — Under-Insurance', 'Rp 2 Miliar', 'Rp 1 Miliar (50%)', 'Rp 500 Juta', '± Rp 250 Juta (dipotong proporsional)'],
]

const faqItems = [
  {
    question: 'Apa itu prinsip average dalam asuransi properti?',
    answer:
      'Prinsip average (underinsurance) adalah ketentuan yang memotong ganti rugi secara proporsional apabila nilai pertanggungan di polis lebih rendah daripada nilai sebenarnya dari properti saat kejadian. Semakin besar selisihnya, semakin besar pula potongan klaim yang diterima.',
  },
  {
    question: 'Berapa kali sebaiknya nilai pertanggungan ditinjau ulang?',
    answer:
      'Idealnya ditinjau setiap tahun saat perpanjangan polis, dan segera diperbarui setiap kali ada renovasi, penambahan lantai, atau pembelian mesin/peralatan baru yang meningkatkan nilai properti secara signifikan.',
  },
  {
    question: 'Apakah nilai tanah termasuk dalam nilai pertanggungan?',
    answer:
      'Tidak. Asuransi properti hanya menanggung nilai bangunan beserta isinya (mesin, peralatan, stok), karena tanah tidak bisa hilang atau rusak akibat kebakaran. Nilai pertanggungan sebaiknya dihitung dari estimasi biaya membangun ulang, bukan harga jual tanah dan bangunan.',
  },
  {
    question: 'Bagaimana jika saya tidak yakin menghitung nilai bangunan sendiri?',
    answer:
      'Tono dapat membantu memberi estimasi kasar berdasarkan luas bangunan, jenis konstruksi, dan lokasi, atau merekomendasikan penilai independen untuk properti bernilai besar seperti pabrik dan gudang.',
  },
  {
    question: 'Apakah nilai pertanggungan yang lebih tinggi berarti premi jauh lebih mahal?',
    answer:
      'Premi memang naik seiring nilai pertanggungan, namun kenaikannya proporsional dan relatif kecil dibanding risiko kehilangan sebagian besar hak klaim akibat under-insurance. Tono dapat membantu menyeimbangkan nilai pertanggungan yang wajar dengan anggaran premi Anda.',
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
          { name: 'Cara Hitung Nilai Pertanggungan', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Panduan menghitung nilai pertanggungan rumah, ruko, dan gudang di Batam agar terhindar dari under-insurance saat klaim.',
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
          { label: 'Cara Hitung Nilai Pertanggungan' },
        ]}
      />

      <ArticleHero
        warna="orange"
        kategori="Panduan"
        icon={Calculator}
        title={JUDUL}
        intro="Banyak pemilik ruko dan gudang di Batam baru menyadari nilai pertanggungan polisnya terlalu rendah setelah klaim cair jauh dari yang dibayangkan. Berikut cara menghitungnya agar tidak terulang."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            warna="orange"
            aspect="wide"
            label="Foto ruko/gudang di Batam atau infografis komponen nilai pertanggungan"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Nilai pertanggungan (Total Sum Insured/TSI) adalah angka yang Anda tulis di aplikasi
            polis sebagai perkiraan nilai properti yang diasuransikan. Masalahnya, banyak pemilik
            ruko di Nagoya atau gudang di Batu Ampar menetapkan angka ini berdasarkan harga beli
            bertahun-tahun lalu, atau bahkan asal tebak agar premi terasa murah. Padahal, angka
            inilah yang menjadi acuan utama saat perusahaan asuransi menghitung ganti rugi.
          </p>
          <p>
            Ketika nilai pertanggungan lebih rendah dari nilai properti yang sebenarnya, perusahaan
            asuransi berhak menerapkan <em>prinsip average</em> — memotong ganti rugi secara
            proporsional sesuai selisih tersebut. Bagian berikut menjelaskan cara menghitung nilai
            pertanggungan yang wajar, dan dampaknya bila diabaikan.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Dua Komponen yang Perlu Dihitung Terpisah
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Nilai pertanggungan properti umumnya terdiri dari dua komponen yang sebaiknya dihitung
            dan dicantumkan terpisah, agar keduanya mendapat proteksi yang cukup:
          </p>
          <KeyPointsBox
            warna="orange"
            title="Komponen Nilai Pertanggungan"
            items={[
              'Nilai bangunan — estimasi biaya membangun ulang (reinstatement value) dari nol dengan spesifikasi dan luas yang sama, bukan harga jual di pasar properti.',
              'Nilai isi/peralatan usaha — mesin produksi, rak gudang, peralatan kantor, hingga stok barang dagangan yang tersimpan di dalam bangunan.',
              'Untuk ruko sewa, penyewa hanya perlu mengasuransikan isi dan kepentingannya sendiri, sementara pemilik bangunan mengasuransikan strukturnya.',
              'Nilai pertanggungan sebaiknya ditinjau ulang setiap perpanjangan polis, terutama setelah renovasi atau penambahan mesin baru.',
            ]}
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="orange"
            title="Ilustrasi Dampak Prinsip Average pada Klaim"
            headers={[
              'Skenario',
              'Nilai Bangunan Sebenarnya',
              'Nilai Pertanggungan di Polis',
              'Kerugian Akibat Kebakaran',
              'Estimasi Ganti Rugi',
            ]}
            rows={tabelAverage}
            caption="Ilustrasi umum untuk memudahkan pemahaman. Perhitungan aktual mengikuti syarat polis dan hasil survei kerugian oleh perusahaan asuransi."
          />
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Contoh Kasus di Lapangan
          </h2>
          <CaseStudyBox
            warna="orange"
            title="Ruko Percetakan di Nagoya: Nilai Pertanggungan Tak Pernah Diperbarui"
          >
            <p>
              Pemilik usaha percetakan mengasuransikan ruko dua lantainya lima tahun lalu, saat
              usaha baru berjalan dengan satu mesin cetak sederhana. Seiring berkembangnya usaha,
              dua mesin cetak digital baru ditambahkan dan lantai dua direnovasi menjadi gudang
              kertas — namun nilai pertanggungan di polis tidak pernah diperbarui.
            </p>
            <p>
              Saat korsleting listrik menyebabkan kebakaran di lantai dua, kerugian ditaksir jauh
              di atas nilai pertanggungan awal. Karena selisihnya cukup besar, perusahaan asuransi
              menerapkan prinsip average sehingga ganti rugi yang diterima jauh dari cukup untuk
              memulihkan mesin dan stok kertas yang terbakar.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: peninjauan nilai pertanggungan setiap kali ada penambahan aset sama
              pentingnya dengan memilih jenis polis itu sendiri.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="pb-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="31 Juli 2026" />
        </div>
      </section>

      <FAQSection
        title="Pertanyaan Seputar Nilai Pertanggungan Properti"
        intro="Hal-hal yang sering ditanyakan klien Tono saat menentukan nilai pertanggungan yang tepat."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="orange"
        produkSlug="asuransi-properti"
        currentSlug="cara-hitung-nilai-pertanggungan-properti"
      />

      <CTABanner
        heading="Belum Yakin Berapa Nilai Pertanggungan yang Tepat?"
        subheading="Ceritakan kondisi properti Anda ke Tono — bangunan, isi, dan riwayat renovasi — untuk mendapat estimasi nilai pertanggungan yang wajar."
        waMessage="Halo Tono, saya ingin konsultasi menghitung nilai pertanggungan properti saya di Batam."
      />

      <Footer />
    </main>
  )
}
