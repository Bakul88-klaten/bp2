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
import { Store } from 'lucide-react'

const PATH = '/produk/asuransi-liability/public-liability-ruko-toko-ritel-batam'
const JUDUL = 'Asuransi Public Liability untuk Ruko & Toko Ritel di Batam'

export const metadata: Metadata = {
  title: 'Public Liability untuk Ruko & Toko Ritel Batam | Batam Proteksi',
  description:
    'Perlindungan tanggung jawab hukum untuk pemilik ruko dan toko ritel di Batam dari risiko cedera pengunjung dan kerusakan properti tetangga.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description:
      'Risiko liability yang dihadapi pemilik ruko dan toko ritel di Batam, dan cara melindunginya.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
    images: ['/og-image.png'],
  },
}

const tabelLimit = [
  ['Toko kecil — 1 lantai, area terbatas', 'Toko kelontong, kios pakaian kecil', 'Rp 500 Juta - 1 Miliar'],
  [
    'Toko/ruko menengah — 2-3 lantai atau gudang belakang',
    'Minimarket, toko bangunan, toko elektronik',
    'Rp 1 - 2 Miliar',
  ],
  [
    'Ruko deret/toko besar — traffic tinggi, berdekatan dengan unit lain',
    'Ruko di kawasan komersial padat, toko dengan area parkir sendiri',
    'Rp 2 - 5 Miliar',
  ],
]

const faqItems = [
  {
    question: 'Bagaimana jika kebakaran di toko saya menjalar ke ruko sebelah?',
    answer:
      'Ini adalah salah satu skenario paling umum yang dilindungi Public Liability — kerusakan pada properti pihak ketiga (dalam hal ini ruko tetangga) akibat kejadian yang berasal dari lokasi usaha Anda. Cakupan ini terpisah dari asuransi properti yang melindungi bangunan toko Anda sendiri.',
  },
  {
    question: 'Apakah rak barang yang roboh menimpa pengunjung termasuk yang dijamin?',
    answer:
      'Ya, selama insiden terjadi akibat kelalaian dalam pengelolaan lokasi usaha, seperti rak yang tidak dipasang dengan aman atau barang yang ditumpuk berlebihan.',
  },
  {
    question: 'Toko saya tidak punya area parkir sendiri, apakah tetap perlu Public Liability?',
    answer:
      'Tetap perlu. Risiko tidak hanya datang dari area parkir — di dalam toko sendiri pun ada risiko seperti lantai licin, barang jatuh, atau pengunjung yang tersandung display produk.',
  },
  {
    question: 'Apakah berlaku untuk toko yang menyewa ruko, bukan milik sendiri?',
    answer:
      'Berlaku. Public Liability melindungi tanggung jawab hukum penyelenggara usaha (Anda sebagai penyewa/pengelola toko), terlepas dari status kepemilikan bangunan. Status sewa-beli bangunan biasanya lebih relevan untuk asuransi properti, bukan liability.',
  },
  {
    question: 'Apakah premi lebih murah untuk toko yang berada di dalam mall/pusat perbelanjaan?',
    answer:
      'Bisa bervariasi. Beberapa mall sudah punya liability coverage sendiri di level pengelola gedung, namun ini umumnya tidak otomatis mencakup tenant secara individual — sebaiknya dikonfirmasi ke pengelola gedung, dan tetap didiskusikan dengan Tono untuk memastikan tidak ada celah perlindungan.',
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
          { name: 'Public Liability Ruko & Toko Ritel', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Perlindungan tanggung jawab hukum untuk pemilik ruko dan toko ritel di Batam dari risiko cedera pengunjung dan kerusakan properti tetangga.',
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
          { label: 'Public Liability Ruko & Toko Ritel' },
        ]}
      />

      <ArticleHero
        warna="purple"
        kategori="Panduan"
        icon={Store}
        title={JUDUL}
        intro="Ruko dan toko ritel di kawasan komersial padat seperti Nagoya, Batam Center, dan Bengkong berdiri berdempetan satu sama lain — kondisi ini membuat risiko yang berasal dari toko Anda bisa berdampak langsung ke tetangga sebelah."
        lastUpdated="8 Agustus 2026"
        estimasiBaca="6 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="public-liability-ruko-toko-ritel-batam"
            variant="header"
            warna="purple"
            aspect="wide"
            label="Foto deretan ruko atau interior toko ritel di Batam"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Ruko-ruko di kawasan komersial Batam umumnya berdiri berderet rapat, berbagi dinding
            atau setidaknya berjarak sangat dekat dengan unit di sebelahnya. Kondisi ini membuat
            risiko yang muncul dari satu toko — kebakaran, kebocoran, atau insiden lain — punya
            potensi berdampak ke properti tetangga, bukan cuma toko itu sendiri.
          </p>
          <p>
            Di sisi lain, toko ritel juga menerima pengunjung dalam jumlah besar setiap harinya,
            yang berarti eksposur terhadap risiko cedera pengunjung di dalam toko juga tidak
            kalah nyata.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="purple"
            title="Titik Rawan yang Sering Terlewat di Ruko & Toko Ritel"
            items={[
              'Rak atau etalase pajangan yang berpotensi roboh menimpa pengunjung.',
              'Lantai licin di area masuk, terutama toko yang berdekatan langsung dengan trotoar atau jalan.',
              'Area parkir sempit yang membuat kendaraan pengunjung berisiko rusak akibat kelalaian pengelolaan (misalnya portal otomatis).',
              'Kedekatan fisik dengan ruko tetangga yang membuat risiko kebakaran/kebocoran berdampak lintas unit.',
              'Gudang belakang atau area tumpukan stok yang menjadi jalur lalu-lalang staf maupun pengunjung.',
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
              'Cedera pengunjung akibat kondisi fisik toko, misalnya rak roboh atau lantai licin.',
              'Kerusakan properti ruko tetangga akibat kejadian yang berasal dari lokasi usaha Anda.',
              'Kerusakan kendaraan pengunjung di area parkir akibat kelalaian pengelolaan lokasi.',
              'Biaya pembelaan hukum saat toko digugat pihak ketiga.',
            ]}
            tidakDitanggung={[
              'Kerusakan pada bangunan atau isi toko milik sendiri — ranah asuransi properti.',
              'Cedera karyawan toko sendiri saat bekerja — ranah BPJS Ketenagakerjaan/Employers Liability.',
              'Kerugian akibat produk yang dijual dan bermasalah di tangan pembeli — ranah Product Liability.',
              'Pencurian atau kehilangan barang dagangan — bukan cakupan liability.',
            ]}
          />
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="purple"
            title="Ilustrasi Limit Berdasarkan Skala Toko/Ruko"
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
            title="Etalase Roboh Menimpa Pengunjung di Toko Elektronik"
          >
            <p>
              Sebuah toko elektronik di kawasan ruko padat memajang unit televisi di atas rak
              pajangan yang cukup tinggi. Suatu hari, seorang pengunjung yang sedang melihat-lihat
              produk tidak sengaja menyenggol rak tersebut hingga sebagian etalase roboh.
            </p>
            <p>
              Pengunjung mengalami luka pada bagian kaki akibat tertimpa unit yang jatuh dan
              memerlukan perawatan medis. Pengunjung tersebut kemudian menuntut ganti rugi biaya
              pengobatan kepada pemilik toko, dengan alasan penataan rak yang kurang aman.
            </p>
            <p className="font-medium text-foreground">
              Karena toko memiliki Public Liability, biaya pengobatan dan proses negosiasi
              ditangani pihak asuransi. Pemilik toko juga menggunakan kejadian ini untuk menata
              ulang tinggi maksimal pajangan demi mencegah insiden serupa.
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
        title="Pertanyaan Seputar Public Liability untuk Ruko & Toko Ritel"
        intro="Pertanyaan yang sering muncul dari pemilik ruko dan toko ritel di Batam."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="purple"
        produkSlug="asuransi-liability"
        currentSlug="public-liability-ruko-toko-ritel-batam"
      />

      <CTABanner
        heading="Punya Ruko atau Toko Ritel di Batam?"
        subheading="Ceritakan lokasi dan skala toko Anda ke Tono untuk mendapat rekomendasi limit Public Liability yang sesuai."
        waMessage="Halo Tono, saya punya ruko/toko ritel di Batam dan ingin konsultasi Public Liability."
      />

      <Footer />
    </main>
  )
}
