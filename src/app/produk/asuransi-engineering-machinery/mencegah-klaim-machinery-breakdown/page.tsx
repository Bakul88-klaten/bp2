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
import { Cog } from 'lucide-react'

const PATH = '/produk/asuransi-engineering-machinery/mencegah-klaim-machinery-breakdown'
const JUDUL = 'Mencegah & Mengklaim Machinery Breakdown di Kawasan Industri Batam'

export const metadata: Metadata = {
  title: 'Mencegah & Klaim Machinery Breakdown di Batam | Batam Proteksi',
  description:
    'Penyebab umum kerusakan mesin produksi, langkah pencegahan, dan cara mengajukan klaim machinery breakdown untuk pabrik di kawasan industri Batam.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Penyebab, pencegahan, dan cara klaim machinery breakdown untuk pabrik di Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelPenyebab = [
  [
    'Keausan komponen jangka panjang',
    'Kerusakan bearing atau gear akibat pemakaian normal bertahun-tahun',
    'Umumnya tidak ditanggung — termasuk pengecualian standar (wear and tear)',
  ],
  [
    'Kesalahan pengoperasian (human error)',
    'Operator lupa prosedur shut down atau salah mengoperasikan mesin',
    'Umumnya ditanggung, selama bukan kelalaian yang disengaja',
  ],
  [
    'Lonjakan atau gangguan listrik',
    'Tegangan tidak stabil merusak motor atau komponen elektronik',
    'Umumnya ditanggung sebagai risiko machinery breakdown',
  ],
  [
    'Kurangnya pelumasan/perawatan',
    'Mesin overheat akibat jadwal perawatan berkala yang terlewat',
    'Berisiko ditolak jika terbukti akibat kelalaian perawatan',
  ],
]

const faqItems = [
  {
    question: 'Apakah machinery breakdown mencakup kerusakan akibat mati listrik total (blackout)?',
    answer:
      'Bergantung pada penyebab kerusakannya. Jika mati listrik total menyebabkan kerusakan fisik pada komponen mesin (misalnya akibat lonjakan saat listrik kembali menyala), umumnya masih dapat diklaim. Namun kerugian akibat proses produksi terhenti perlu jaminan business interruption terpisah.',
  },
  {
    question: 'Berapa lama proses klaim machinery breakdown biasanya berlangsung?',
    answer:
      'Bergantung pada kompleksitas kerusakan dan ketersediaan suku cadang untuk keperluan survei teknis. Tono mendampingi sejak pelaporan awal hingga proses survei dan pencairan selesai agar prosesnya berjalan sesingkat mungkin.',
  },
  {
    question: 'Apakah mesin yang sudah berusia tua tetap bisa diasuransikan machinery breakdown?',
    answer:
      'Bisa, meski sebagian perusahaan asuransi memberi syarat tambahan seperti hasil inspeksi kondisi mesin terlebih dahulu untuk mesin berusia lanjut, agar penilaian risiko dan premi lebih akurat.',
  },
  {
    question: 'Apa bedanya machinery breakdown dengan garansi pabrikan mesin?',
    answer:
      'Garansi pabrikan biasanya hanya berlaku dalam periode terbatas dan untuk cacat produksi tertentu. Machinery breakdown melindungi lebih luas dan lebih lama, mencakup kerusakan operasional yang terjadi setelah masa garansi pabrikan berakhir.',
  },
  {
    question: 'Apakah wajib ada laporan perawatan berkala untuk mengajukan klaim?',
    answer:
      'Sangat disarankan meski tidak selalu menjadi syarat mutlak. Catatan perawatan berkala menjadi bukti penting bahwa kerusakan bukan disebabkan kelalaian, sehingga mempercepat proses verifikasi klaim.',
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
          { name: 'Mencegah Klaim Machinery Breakdown', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Penyebab umum kerusakan mesin produksi, langkah pencegahan, dan cara mengajukan klaim machinery breakdown di kawasan industri Batam.',
          path: PATH,
          datePublished: '2026-07-31',
          dateModified: '2026-07-31',
        })}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Engineering & Machinery', href: '/produk/asuransi-engineering-machinery' },
          { label: 'Mencegah Klaim Machinery Breakdown' },
        ]}
      />

      <ArticleHero
        warna="slate"
        kategori="Panduan"
        icon={Cog}
        title={JUDUL}
        intro="Mesin produksi berhenti mendadak berarti kerugian ganda: biaya perbaikan dan hilangnya waktu produksi. Kenali penyebab umum kerusakan mesin dan cara mengklaimnya."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            warna="slate"
            aspect="wide"
            label="Foto mesin produksi di pabrik kawasan industri Batam atau ilustrasi perawatan mesin"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Pabrik-pabrik di kawasan industri Batam, dari Batamindo hingga Kabil, sangat
            bergantung pada mesin produksi yang beroperasi terus-menerus. Sayangnya, gangguan
            pasokan listrik yang tidak stabil dan intensitas pemakaian tinggi membuat risiko
            machinery breakdown menjadi ancaman nyata bagi kelangsungan produksi.
          </p>
          <p>
            Tidak semua jenis kerusakan mesin otomatis ditanggung asuransi. Memahami penyebab mana
            yang termasuk risiko yang dijamin — dan mana yang termasuk pengecualian seperti
            keausan wajar — membantu Anda menyiapkan langkah pencegahan sekaligus proses klaim
            yang lebih lancar.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="slate"
            title="Penyebab Umum Kerusakan Mesin & Status Pertanggungan"
            headers={['Penyebab', 'Contoh Kejadian', 'Status Umum Pertanggungan']}
            rows={tabelPenyebab}
            caption="Ilustrasi umum. Keputusan akhir klaim tetap berdasarkan hasil survei teknis dan wording polis."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="slate"
            title="Mesin Produksi Elektronik Rusak Akibat Lonjakan Listrik di Batamindo"
          >
            <p>
              Sebuah pabrik perakitan elektronik di Kawasan Industri Batamindo mengalami kerusakan
              pada beberapa unit mesin produksi setelah terjadi lonjakan tegangan listrik singkat.
              Beberapa komponen elektronik presisi pada mesin tersebut rusak dan produksi harus
              dihentikan sementara.
            </p>
            <p>
              Karena pabrik memiliki catatan perawatan berkala yang lengkap dan penyebab kerusakan
              teridentifikasi jelas sebagai gangguan listrik — bukan keausan atau kelalaian
              perawatan — klaim machinery breakdown dapat diproses tanpa kendala berarti.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: dokumentasi perawatan berkala yang rapi mempercepat proses verifikasi
              klaim, karena membuktikan kerusakan bukan akibat kelalaian pemilik mesin.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="slate"
            title="Langkah Pencegahan untuk Mengurangi Risiko"
            items={[
              'Jadwalkan perawatan berkala sesuai rekomendasi pabrikan dan dokumentasikan setiap sesi perawatan.',
              'Pertimbangkan stabilizer atau UPS untuk mesin yang sensitif terhadap gangguan tegangan listrik.',
              'Berikan pelatihan prosedur operasional standar (SOP) kepada operator mesin secara berkala.',
              'Segera hentikan mesin dan laporkan begitu muncul tanda-tanda kerusakan, untuk mencegah kerusakan lanjutan.',
              'Diskusikan dengan Tono apakah proteksi business interruption diperlukan untuk menutup kerugian akibat produksi terhenti.',
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
        title="Pertanyaan Seputar Machinery Breakdown"
        intro="Pertanyaan yang sering muncul saat klien Tono mengasuransikan mesin produksi di kawasan industri."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="slate"
        produkSlug="asuransi-engineering-machinery"
        currentSlug="mencegah-klaim-machinery-breakdown"
      />

      <CTABanner
        heading="Ingin Melindungi Mesin Produksi Pabrik Anda?"
        subheading="Ceritakan jenis dan jumlah mesin produksi Anda ke Tono untuk dibantu menyusun proteksi machinery breakdown yang sesuai."
        waMessage="Halo Tono, saya ingin konsultasi asuransi machinery breakdown untuk mesin produksi pabrik saya di Batam."
      />

      <Footer />
    </main>
  )
}
