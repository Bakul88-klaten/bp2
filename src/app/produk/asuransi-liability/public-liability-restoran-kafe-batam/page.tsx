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
import { UtensilsCrossed } from 'lucide-react'

const PATH = '/produk/asuransi-liability/public-liability-restoran-kafe-batam'
const JUDUL = 'Asuransi Public Liability untuk Restoran & Kafe di Batam: Kenapa Penting?'

export const metadata: Metadata = {
  title: 'Public Liability untuk Restoran & Kafe Batam | Batam Proteksi',
  description:
    'Risiko tanggung jawab hukum yang sering terlewat pemilik restoran dan kafe di Batam — lantai licin, dapur terbuka, hingga insiden di area makan pelanggan.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description:
      'Risiko liability yang sering terlewat pemilik restoran dan kafe di Batam, dan cara melindunginya.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
    images: ['/og-image.png'],
  },
}

const tabelLimit = [
  ['Warung/kafe kecil — tempat duduk terbatas', 'Warung kopi, kedai kecil di ruko', 'Rp 500 Juta - 1 Miliar'],
  [
    'Restoran/kafe menengah — traffic harian ramai',
    'Restoran keluarga, kafe dengan indoor & outdoor seating',
    'Rp 1 - 2 Miliar',
  ],
  [
    'Restoran besar — kapasitas tinggi, ada live music/event',
    'Resto dengan banquet hall, kafe dengan panggung musik',
    'Rp 2 - 5 Miliar',
  ],
]

const faqItems = [
  {
    question: 'Apakah kasus keracunan makanan termasuk yang dijamin Public Liability?',
    answer:
      'Umumnya tidak. Kerugian akibat produk makanan yang sudah dikonsumsi pelanggan biasanya masuk ranah Product Liability, bukan Public Liability. Public Liability berfokus pada insiden yang terjadi karena kondisi fisik lokasi usaha, seperti pelanggan yang cedera akibat lantai licin atau perabot yang tidak aman. Diskusikan dengan Tono bila ingin cakupan yang lebih menyeluruh.',
  },
  {
    question: 'Warung kecil dengan tempat duduk terbatas, apa masih perlu Public Liability?',
    answer:
      'Selama ada pelanggan yang datang dan duduk di lokasi Anda, eksposur risiko tetap ada meski skalanya kecil. Untuk usaha kecil, limit pertanggungan yang dipilih biasanya juga lebih rendah, sehingga preminya pun lebih terjangkau dibanding restoran besar.',
  },
  {
    question: 'Apakah insiden di area parkir resto termasuk yang dijamin?',
    answer:
      'Bisa termasuk, selama area parkir tersebut merupakan bagian dari lokasi usaha yang Anda kelola atau kuasai, dan insiden terjadi akibat kondisi area tersebut — misalnya lubang yang tidak ditandai atau penerangan yang kurang.',
  },
  {
    question: 'Bagaimana dengan insiden yang melibatkan konsep dapur terbuka (open kitchen)?',
    answer:
      'Konsep dapur terbuka membuat pelanggan berada lebih dekat dengan aktivitas memasak, sehingga risiko seperti percikan minyak panas atau asap yang mengenai pengunjung perlu dipertimbangkan khusus saat menentukan cakupan dan limit polis.',
  },
  {
    question: 'Apakah premi dipengaruhi ada tidaknya live music atau event di resto?',
    answer:
      'Bisa. Aktivitas tambahan seperti live music, area bermain anak, atau event khusus menambah eksposur risiko dibanding restoran dengan operasional standar, sehingga dapat memengaruhi penilaian premi.',
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
          { name: 'Public Liability Restoran & Kafe', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Risiko tanggung jawab hukum yang sering terlewat pemilik restoran dan kafe di Batam, dan cara melindunginya dengan Public Liability.',
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
          { label: 'Public Liability Restoran & Kafe' },
        ]}
      />

      <ArticleHero
        warna="purple"
        kategori="Panduan"
        icon={UtensilsCrossed}
        title={JUDUL}
        intro="Restoran dan kafe menerima puluhan hingga ratusan pengunjung setiap hari — setiap kunjungan membawa eksposur risiko yang sering luput dari perhatian pemiliknya sampai insiden benar-benar terjadi."
        lastUpdated="8 Agustus 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="public-liability-restoran-kafe-batam"
            variant="header"
            warna="purple"
            aspect="wide"
            label="Foto interior restoran/kafe di Batam dengan area makan pelanggan"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Kawasan kuliner Batam — dari deretan kafe di Nagoya hingga resto keluarga di sekitar
            Batam Center — ramai oleh pengunjung lokal maupun wisatawan dari Singapura yang
            datang di akhir pekan. Semakin ramai sebuah tempat, semakin besar pula peluang
            terjadinya insiden yang berujung tuntutan ganti rugi terhadap pemilik usaha.
          </p>
          <p>
            Banyak pemilik restoran dan kafe di Batam sudah punya asuransi properti untuk
            melindungi bangunan dan peralatan usahanya, tapi belum mempertimbangkan tanggung
            jawab hukum atas cedera yang dialami pelanggan sendiri di lokasi mereka.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="purple"
            title="Titik Rawan yang Sering Terlewat di Restoran & Kafe"
            items={[
              'Lantai licin di dekat wastafel, pintu masuk saat hujan, atau area dekat dapur.',
              'Kursi, meja, atau dekorasi gantung yang tidak terpasang dengan aman.',
              'Konsep dapur terbuka (open kitchen) yang menempatkan pengunjung lebih dekat dengan aktivitas memasak.',
              'Area outdoor seating dengan permukaan tidak rata atau penerangan kurang di malam hari.',
              'Tangga atau area mezzanine pada kafe bertingkat dengan lalu-lintas pengunjung tinggi.',
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
              'Cedera pelanggan akibat kondisi fisik lokasi, misalnya terpeleset lantai licin atau tertimpa perabot.',
              'Kerusakan barang milik pelanggan (kendaraan di parkiran, barang bawaan) akibat kelalaian pengelolaan lokasi.',
              'Biaya pembelaan hukum saat resto/kafe digugat pelanggan atau pihak ketiga lain.',
              'Biaya pertolongan pertama/medis darurat di lokasi.',
            ]}
            tidakDitanggung={[
              'Keracunan makanan atau reaksi alergi dari menu yang dikonsumsi — ranah Product Liability.',
              'Cedera karyawan resto sendiri saat bekerja — ranah BPJS Ketenagakerjaan/Employers Liability.',
              'Kerusakan pada peralatan dapur atau bangunan resto milik sendiri — ranah asuransi properti.',
              'Kerugian akibat kelalaian yang disengaja atau pelanggaran standar keselamatan yang sudah diperingatkan sebelumnya.',
            ]}
          />
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="purple"
            title="Ilustrasi Limit Berdasarkan Skala Resto/Kafe"
            headers={['Skala Usaha', 'Contoh', 'Limit yang Umum Dipilih']}
            rows={tabelLimit}
            caption="Angka bersifat ilustratif untuk gambaran umum, bukan penawaran resmi. Limit final tergantung profil risiko dan penilaian underwriting perusahaan asuransi."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="purple"
            title="Pelanggan Terpeleset di Dekat Wastafel Kafe Area Nagoya"
          >
            <p>
              Sebuah kafe dengan konsep outdoor seating di kawasan Nagoya cukup ramai dikunjungi
              saat akhir pekan. Suatu malam, lantai dekat area wastafel basah akibat tumpahan air
              yang belum sempat dikeringkan staf karena kondisi sedang ramai.
            </p>
            <p>
              Seorang pelanggan terpeleset saat berjalan menuju toilet, mengalami cedera pada
              pergelangan tangan, dan memerlukan penanganan medis. Pelanggan tersebut kemudian
              mengajukan tuntutan ganti rugi biaya pengobatan kepada pemilik kafe.
            </p>
            <p className="font-medium text-foreground">
              Karena kafe memiliki polis Public Liability, biaya pengobatan dan proses negosiasi
              ganti rugi ditangani oleh pihak asuransi, sehingga operasional kafe tetap berjalan
              normal tanpa menanggung beban finansial mendadak.
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
        title="Pertanyaan Seputar Public Liability untuk Restoran & Kafe"
        intro="Pertanyaan yang sering muncul dari pemilik restoran dan kafe di Batam."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="purple"
        produkSlug="asuransi-liability"
        currentSlug="public-liability-restoran-kafe-batam"
      />

      <CTABanner
        heading="Punya Restoran atau Kafe di Batam?"
        subheading="Ceritakan kapasitas dan konsep tempat usaha Anda ke Tono untuk mendapat rekomendasi limit Public Liability yang sesuai."
        waMessage="Halo Tono, saya punya restoran/kafe di Batam dan ingin konsultasi Public Liability."
      />

      <Footer />
    </main>
  )
}
