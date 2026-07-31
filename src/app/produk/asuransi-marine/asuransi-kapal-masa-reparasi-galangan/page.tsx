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
import { Wrench } from 'lucide-react'

const PATH = '/produk/asuransi-marine/asuransi-kapal-masa-reparasi-galangan'
const JUDUL = 'Asuransi Kapal Selama di Galangan & Masa Reparasi: Apa yang Perlu Diketahui'

export const metadata: Metadata = {
  title: 'Asuransi Kapal Selama Reparasi di Galangan Batam | Batam Proteksi',
  description:
    'Risiko dan proteksi yang perlu dipertimbangkan pemilik kapal saat kapal menjalani perbaikan di galangan sekitar Batam, termasuk Tanjung Uncang.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description: 'Yang perlu diperhatikan pemilik kapal saat kapal direparasi di galangan Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelFaseGalangan = [
  [
    'Sebelum masuk galangan',
    'Proses penarikan/pengangkutan kapal menuju galangan',
    'Pastikan status polis kapal tetap aktif selama proses mobilisasi',
  ],
  [
    'Selama docking & reparasi',
    'Kebakaran akibat pengelasan, jatuhnya alat berat, kerusakan akibat pekerjaan pihak galangan',
    "Pahami pembagian tanggung jawab antara ship repairer's liability milik galangan dan polis Hull & Machinery kapal Anda",
  ],
  [
    'Uji coba (sea trial) setelah reparasi',
    'Kegagalan mesin atau sistem yang baru diperbaiki saat uji coba di perairan',
    'Konfirmasi apakah periode sea trial tetap tercakup dalam polis yang sama',
  ],
  [
    'Setelah kapal kembali beroperasi',
    'Kesalahan pekerjaan reparasi yang baru terdeteksi setelah beberapa waktu',
    'Tanyakan masa garansi pekerjaan galangan, terpisah dari cakupan polis asuransi kapal',
  ],
]

const faqItems = [
  {
    question: "Apa itu ship repairer's liability dan bedanya dengan asuransi kapal milik pemilik kapal?",
    answer:
      "Ship repairer's liability adalah asuransi yang dimiliki pihak galangan untuk menanggung kerugian yang timbul akibat kelalaian mereka selama proses reparasi. Ini terpisah dari Hull & Machinery milik pemilik kapal, yang menanggung kerugian kapal itu sendiri secara umum. Idealnya kedua polis ini saling melengkapi, bukan tumpang tindih atau justru meninggalkan celah.",
  },
  {
    question: 'Apakah premi kapal berubah selama masa reparasi di galangan?',
    answer:
      'Profil risiko kapal saat berada di galangan berbeda dari saat berlayar, sehingga sebagian perusahaan asuransi menyesuaikan syarat atau premi untuk periode tersebut. Informasikan jadwal docking ke Tono agar polis tetap sesuai kondisi kapal.',
  },
  {
    question: 'Siapa yang bertanggung jawab jika kebakaran terjadi akibat kelalaian pekerja galangan?',
    answer:
      "Jika penyebabnya terbukti kelalaian pihak galangan, tanggung jawab utamanya berada pada ship repairer's liability milik galangan tersebut. Namun proses klaim dan koordinasi antar pihak tetap perlu didampingi agar tidak ada kerugian yang terlewat dari cakupan mana pun.",
  },
  {
    question: 'Apakah sea trial setelah reparasi perlu pemberitahuan khusus ke asuransi?',
    answer:
      'Sebaiknya iya. Sea trial melibatkan pengoperasian kapal di perairan terbuka meski dalam kondisi uji coba, sehingga penting memastikan periode ini masih tercakup dalam polis yang berlaku, bukan dianggap sebagai periode "di luar layanan".',
  },
  {
    question: 'Berapa lama biasanya reparasi kapal di galangan Batam memengaruhi periode polis?',
    answer:
      'Bervariasi tergantung skala pekerjaan, dari beberapa hari untuk perawatan ringan hingga berminggu-minggu untuk reparasi besar. Sampaikan estimasi durasi ke Tono di awal agar penyesuaian polis dapat direncanakan sejak sebelum kapal masuk galangan.',
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
          { name: 'Asuransi Kapal di Galangan', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Risiko dan proteksi yang perlu dipertimbangkan pemilik kapal saat kapal menjalani perbaikan di galangan Batam.',
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
          { label: 'Asuransi Kapal di Galangan' },
        ]}
      />

      <ArticleHero
        warna="teal"
        kategori="Panduan"
        icon={Wrench}
        title={JUDUL}
        intro="Batam dikenal dengan industri galangan kapalnya, termasuk kawasan Tanjung Uncang. Namun periode kapal berada di galangan sering luput dari perhatian dalam pengaturan polis asuransi."
        lastUpdated="31 Juli 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="asuransi-kapal-masa-reparasi-galangan"
            variant="header"
            warna="teal"
            aspect="wide"
            label="Foto kapal dalam proses docking/reparasi di galangan Tanjung Uncang atau ilustrasi tahapan reparasi"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Sebagai salah satu pusat industri galangan kapal terbesar di Indonesia, kawasan
            Tanjung Uncang di Batam setiap harinya menangani proses docking dan reparasi berbagai
            jenis kapal — dari tongkang, kapal niaga, hingga kapal wisata. Namun banyak pemilik
            kapal baru menyadari bahwa periode berada di galangan memiliki profil risiko yang
            cukup berbeda dari saat kapal berlayar normal.
          </p>
          <p>
            Risiko seperti kebakaran akibat pengelasan atau kerusakan akibat pekerjaan pihak
            galangan perlu dipahami pembagian tanggung jawabnya sejak awal, agar tidak ada celah
            perlindungan saat insiden benar-benar terjadi.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="teal"
            title="Risiko per Fase Selama Kapal di Galangan"
            headers={['Fase', 'Risiko Utama', 'Yang Perlu Diperhatikan']}
            rows={tabelFaseGalangan}
            caption="Pembagian tanggung jawab detail tetap mengikuti kontrak kerja dengan galangan dan wording polis asuransi kapal."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="teal"
            title="Kapal Wisata Mengalami Kebakaran Ringan Saat Pengelasan di Galangan"
          >
            <p>
              Sebuah kapal wisata menjalani reparasi rutin di galangan kawasan Tanjung Uncang.
              Proses pengelasan pada bagian lambung memicu percikan api yang menyambar material
              mudah terbakar di dekatnya, menyebabkan kebakaran ringan yang merusak sebagian
              interior kapal.
            </p>
            <p>
              Karena penyebabnya terkait langsung dengan pekerjaan galangan, klaim awal diarahkan
              ke ship repairer&apos;s liability milik galangan tersebut. Pemilik kapal, yang telah
              menginformasikan jadwal docking ke Tono sejak awal, turut terbantu memastikan polis
              Hull & Machinery miliknya tetap berlaku sebagai lapisan perlindungan tambahan.
            </p>
            <p className="font-medium text-foreground">
              Pelajaran: menginformasikan jadwal dan durasi docking ke perusahaan asuransi sejak
              awal membantu memperjelas pembagian tanggung jawab saat insiden terjadi.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="teal"
            title="Hal-hal yang Perlu Diketahui Sebelum Kapal Masuk Galangan"
            items={[
              'Informasikan jadwal dan estimasi durasi docking ke Tono sebelum kapal masuk galangan.',
              "Tanyakan ke pihak galangan apakah mereka memiliki ship repairer's liability sendiri.",
              'Jangan berasumsi seluruh risiko selama di galangan otomatis tercakup polis kapal Anda tanpa konfirmasi.',
              'Periksa apakah periode sea trial pasca-reparasi termasuk dalam cakupan polis yang sama.',
              'Simpan dokumentasi kontrak kerja dan laporan pekerjaan galangan sebagai referensi bila terjadi klaim.',
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
        title="Pertanyaan Seputar Asuransi Kapal di Galangan"
        intro="Pertanyaan yang sering muncul saat klien Tono mempersiapkan kapal untuk reparasi di galangan."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="teal"
        produkSlug="asuransi-marine"
        currentSlug="asuransi-kapal-masa-reparasi-galangan"
      />

      <CTABanner
        heading="Kapal Anda Akan Menjalani Reparasi di Galangan?"
        subheading="Informasikan jadwal docking Anda ke Tono agar polis kapal tetap sesuai selama masa reparasi hingga sea trial."
        waMessage="Halo Tono, kapal saya akan menjalani reparasi di galangan Batam dan saya ingin konsultasi soal asuransinya."
      />

      <Footer />
    </main>
  )
}
