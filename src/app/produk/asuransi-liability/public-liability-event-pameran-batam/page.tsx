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
import { PartyPopper } from 'lucide-react'

const PATH = '/produk/asuransi-liability/public-liability-event-pameran-batam'
const JUDUL = 'Asuransi Public Liability untuk Event & Pameran di Batam'

export const metadata: Metadata = {
  title: 'Public Liability untuk Event & Pameran Batam | Batam Proteksi',
  description:
    'Kenapa pengelola gedung dan venue di Batam kerap mensyaratkan Public Liability sebelum event atau pameran boleh berlangsung, dan cara mengurusnya.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description:
      'Panduan Public Liability bagi penyelenggara event dan pameran di Batam, termasuk syarat venue.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
    images: ['/og-image.png'],
  },
}

const tabelLimit = [
  [
    'Event kecil — gathering/komunitas',
    'Acara komunitas, gathering internal, launching kecil',
    'Rp 500 Juta - 1 Miliar',
  ],
  [
    'Event menengah — expo/bazaar',
    'Pameran UMKM, job fair, bazaar akhir pekan',
    'Rp 1 - 3 Miliar',
  ],
  [
    'Event besar — konser/exhibition skala besar',
    'Konser, pameran dagang skala besar, exhibition multi-hari',
    'Rp 3 - 10 Miliar atau sesuai syarat venue',
  ],
]

const faqItems = [
  {
    question: 'Apakah semua venue di Batam mensyaratkan bukti Public Liability?',
    answer:
      'Tidak semua, namun venue yang lebih formal seperti gedung pertemuan, ballroom hotel, atau exhibition hall cenderung mensyaratkannya sebagai bagian dari syarat administrasi penyewaan, terutama untuk event berskala menengah ke atas atau yang melibatkan banyak pengunjung.',
  },
  {
    question: 'Berapa lama proses penerbitan Certificate of Insurance untuk event mendadak?',
    answer:
      'Bervariasi tergantung kelengkapan data acara, namun umumnya bisa diproses dalam waktu relatif singkat. Sampaikan tanggal acara dan tenggat submission dari venue ke Tono sejak awal agar penerbitan sertifikat tidak menjadi penghambat jadwal acara.',
  },
  {
    question: 'Apakah cakupan ini termasuk insiden saat proses setup dan bongkar booth?',
    answer:
      'Bisa termasuk, karena masa setup dan bongkar merupakan bagian dari periode penyelenggaraan event yang melibatkan aktivitas fisik dengan risiko tersendiri, seperti alat berat atau material booth yang sedang dipasang/dibongkar.',
  },
  {
    question: 'Siapa yang bertanggung jawab jika insiden terjadi di booth peserta pameran, bukan penyelenggara?',
    answer:
      'Tergantung sumber kelalaiannya. Bila insiden murni akibat kelalaian peserta pameran di booth mereka sendiri, tanggung jawab utamanya biasanya berada di pihak peserta tersebut — sehingga sebagian penyelenggara turut mensyaratkan peserta pameran juga memiliki Public Liability sendiri.',
  },
  {
    question: 'Apakah event outdoor (di luar gedung) juga membutuhkan Public Liability?',
    answer:
      'Sangat disarankan, bahkan risikonya bisa lebih beragam dibanding event indoor — mulai dari kondisi cuaca, permukaan tanah tidak rata, hingga akses kendaraan yang lebih terbuka untuk umum.',
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
          { name: 'Public Liability Event & Pameran', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Kenapa pengelola gedung dan venue di Batam kerap mensyaratkan Public Liability sebelum event atau pameran boleh berlangsung.',
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
          { label: 'Public Liability Event & Pameran' },
        ]}
      />

      <ArticleHero
        warna="purple"
        kategori="Panduan"
        icon={PartyPopper}
        title={JUDUL}
        intro="Semakin banyak gedung pertemuan dan venue di Batam mensyaratkan bukti Public Liability sebelum sebuah event atau pameran diizinkan berlangsung. Berikut yang perlu dipahami penyelenggara sebelum acara berjalan."
        lastUpdated="8 Agustus 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="public-liability-event-pameran-batam"
            variant="header"
            warna="purple"
            aspect="wide"
            label="Foto suasana event/pameran atau ballroom venue di Batam"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Penyelenggaraan event dan pameran — dari bazaar UMKM, job fair, hingga exhibition
            skala besar — semakin marak di Batam. Sejalan dengan itu, pengelola venue seperti
            gedung pertemuan dan ballroom hotel juga semakin ketat menerapkan syarat administrasi
            sebelum mengizinkan sebuah acara berlangsung di tempat mereka.
          </p>
          <p>
            Pola ini mirip dengan yang terjadi di sektor konstruksi maupun proyek galangan kapal:
            pemilik venue ingin memastikan ada pihak yang menanggung apabila terjadi insiden yang
            merugikan pengunjung atau merusak fasilitas mereka selama acara berlangsung.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="purple"
            title="Kenapa Venue Sering Meminta Bukti Asuransi"
            items={[
              'Event mengundang orang dalam jumlah besar yang tidak familier dengan tata letak venue.',
              'Ada aktivitas fisik berisiko selama setup dan bongkar booth/panggung, termasuk penggunaan alat berat.',
              'Venue ingin memastikan kerusakan fasilitas mereka selama acara ada pihak yang bertanggung jawab menanggungnya.',
              'Memiliki Certificate of Insurance mempercepat proses persetujuan sewa venue, terutama untuk venue formal.',
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
              'Cedera pengunjung event akibat kondisi venue atau kelalaian penyelenggaraan acara.',
              'Kerusakan fasilitas venue (lantai, dinding, instalasi) akibat aktivitas setup, acara, atau bongkar.',
              'Biaya pembelaan hukum saat penyelenggara digugat pengunjung atau pemilik venue.',
              'Biaya pertolongan pertama/medis darurat untuk pengunjung yang cedera di lokasi acara.',
            ]}
            tidakDitanggung={[
              'Kerugian akibat pembatalan acara (event cancellation) — perlu produk asuransi terpisah bila dibutuhkan.',
              'Kehilangan barang milik peserta/pengunjung yang bukan akibat kelalaian penyelenggara.',
              'Cedera kru/panitia acara sendiri saat bekerja — ranah BPJS Ketenagakerjaan/Employers Liability.',
              'Kerugian di booth peserta pameran yang murni akibat kelalaian peserta itu sendiri.',
            ]}
          />
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="purple"
            title="Ilustrasi Limit Berdasarkan Skala Event"
            headers={['Skala Event', 'Contoh', 'Limit yang Umum Dipilih']}
            rows={tabelLimit}
            caption="Angka bersifat ilustratif untuk gambaran umum, bukan penawaran resmi. Limit final tergantung syarat venue dan penilaian underwriting perusahaan asuransi."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="purple"
            title="Booth Pameran Roboh Saat Bazaar UMKM di Sebuah Ballroom Hotel"
          >
            <p>
              Sebuah komunitas UMKM menyelenggarakan bazaar akhir pekan di ballroom sebuah hotel
              di Batam. Sesuai syarat penyewaan, pihak hotel mensyaratkan penyelenggara
              melampirkan bukti Public Liability sebelum acara disetujui.
            </p>
            <p>
              Di tengah acara, salah satu booth peserta yang dirakit kurang kokoh roboh akibat
              tersenggol kerumunan pengunjung yang sedang ramai. Salah satu pengunjung mengalami
              cedera ringan akibat tertimpa rangka booth.
            </p>
            <p className="font-medium text-foreground">
              Karena penyelenggara memiliki Public Liability, biaya penanganan medis pengunjung
              dan proses klaim dapat ditangani tanpa mengganggu jalannya acara — dan hubungan
              baik dengan pihak hotel tetap terjaga untuk penyelenggaraan acara berikutnya.
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
        title="Pertanyaan Seputar Public Liability untuk Event & Pameran"
        intro="Pertanyaan yang sering muncul dari penyelenggara event dan pameran di Batam."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="purple"
        produkSlug="asuransi-liability"
        currentSlug="public-liability-event-pameran-batam"
      />

      <CTABanner
        heading="Sedang Menyiapkan Event atau Pameran di Batam?"
        subheading="Sampaikan tanggal dan skala acara Anda ke Tono agar Certificate of Insurance bisa diproses tepat waktu."
        waMessage="Halo Tono, saya sedang menyiapkan event/pameran di Batam dan butuh Public Liability untuk syarat venue."
      />

      <Footer />
    </main>
  )
}
