import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Scale, UtensilsCrossed, Store, Factory, PartyPopper, Ship } from 'lucide-react'
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
import CoverageList from '@/components/artikel/CoverageList'
import KeyPointsBox from '@/components/artikel/KeyPointsBox'
import ArticleCrossLinks from '@/components/artikel/ArticleCrossLinks'
import { breadcrumbSchema, insuranceServiceSchema, faqSchema } from '@/lib/schema'
import { warnaClass } from '@/lib/produk-data'

const PATH = '/produk/asuransi-liability/asuransi-public-liability-batam'
const JUDUL = 'Asuransi Public Liability Batam: Panduan Lengkap Cakupan, Premi, dan Klaim'
const c = warnaClass.purple

export const metadata: Metadata = {
  title: 'Asuransi Public Liability Batam — Panduan Lengkap | Batam Proteksi',
  description:
    'Panduan lengkap Asuransi Public Liability di Batam: apa yang dijamin, gambaran premi, cara memilih nilai pertanggungan, dan langkah klaim. Konsultasi gratis bersama Tono.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description:
      'Panduan lengkap Public Liability untuk pelaku usaha di Batam — cakupan, premi, dan klaim.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'website',
    images: ['/og-image.png'],
  },
}

const segmenUsaha = [
  {
    icon: UtensilsCrossed,
    title: 'Restoran & Kafe',
    desc: 'Lantai licin, area dapur terbuka, dan pengunjung yang terus berganti setiap hari.',
    href: '/produk/asuransi-liability/public-liability-restoran-kafe-batam',
  },
  {
    icon: Store,
    title: 'Ruko & Toko Ritel',
    desc: 'Rak barang, area parkir, dan kedekatan fisik dengan ruko/toko tetangga.',
    href: '/produk/asuransi-liability/public-liability-ruko-toko-ritel-batam',
  },
  {
    icon: Factory,
    title: 'Pabrik & Kawasan Industri',
    desc: 'Kunjungan rutin buyer, auditor, dan mitra asing ke area produksi.',
    href: '/produk/asuransi-liability/public-liability-pabrik-kawasan-industri-batam',
  },
  {
    icon: PartyPopper,
    title: 'Event & Pameran',
    desc: 'Venue yang mensyaratkan bukti asuransi sebelum acara boleh berlangsung.',
    href: '/produk/asuransi-liability/public-liability-event-pameran-batam',
  },
  {
    icon: Ship,
    title: 'Subcon Proyek Kapal',
    desc: 'Galangan yang mensyaratkan Certificate of Insurance sebelum SPK diteken.',
    href: '/produk/asuransi-liability/public-liability-subcon-proyek-kapal-batam',
  },
]

const tabelLimit = [
  [
    'Usaha kecil — traffic pengunjung rendah',
    'Warung, toko kelontong, kios kecil',
    'Rp 500 Juta - 1 Miliar',
  ],
  [
    'Usaha menengah — traffic pengunjung harian ramai',
    'Restoran, ruko ritel, kantor jasa dengan tamu rutin',
    'Rp 1 - 3 Miliar',
  ],
  [
    'Usaha besar/berisiko tinggi — traffic tinggi atau kunjungan pihak asing',
    'Pabrik dengan kunjungan buyer, venue event, kawasan industri',
    'Rp 3 - 10 Miliar atau sesuai syarat kontrak',
  ],
]

const faqItems = [
  {
    question: 'Apa itu asuransi Public Liability secara sederhana?',
    answer:
      'Public Liability adalah proteksi yang menanggung tanggung jawab hukum usaha Anda apabila pihak ketiga (pengunjung, tamu, atau masyarakat umum) mengalami cedera atau kerugian properti akibat aktivitas usaha atau kondisi lokasi Anda.',
  },
  {
    question: 'Siapa saja yang paling membutuhkan Public Liability di Batam?',
    answer:
      'Usaha yang secara rutin menerima kunjungan pihak luar paling berisiko terpapar tuntutan pihak ketiga — mulai dari restoran dan toko ritel, pabrik dengan kunjungan buyer/auditor, penyelenggara event, hingga subkontraktor proyek yang bekerja di lokasi milik pihak lain.',
  },
  {
    question: 'Berapa kisaran premi Public Liability untuk usaha kecil di Batam?',
    answer:
      'Premi dipengaruhi banyak faktor: nilai pertanggungan, jenis usaha, tingkat traffic pengunjung, dan riwayat klaim. Sebagai gambaran umum saja, premi tahunan untuk usaha kecil dengan limit sekitar Rp 1 miliar biasanya berada di kisaran jutaan rupiah per tahun — namun ini estimasi kasar dan bukan penawaran resmi. Nilai final ditentukan lewat proses underwriting oleh perusahaan asuransi.',
  },
  {
    question: 'Apa bedanya Public Liability dengan asuransi properti usaha?',
    answer:
      'Asuransi properti melindungi aset fisik milik usaha Anda sendiri (bangunan, isi toko) dari risiko seperti kebakaran. Public Liability justru sebaliknya — melindungi Anda dari tuntutan ganti rugi pihak ketiga akibat cedera atau kerugian yang mereka alami di lokasi atau akibat aktivitas usaha Anda. Banyak pelaku usaha membutuhkan keduanya sekaligus, bukan salah satu saja.',
  },
  {
    question: 'Apakah nilai pertanggungan bisa disesuaikan setiap tahun saat perpanjangan?',
    answer:
      'Bisa, dan sebaiknya memang ditinjau ulang setiap perpanjangan polis — terutama jika ada perubahan skala usaha, lokasi baru, atau syarat kontrak dari mitra/venue yang meminta limit lebih tinggi dari tahun sebelumnya.',
  },
]

export default function PublicLiabilityHubPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Liability', url: '/produk/asuransi-liability' },
          { name: 'Asuransi Public Liability Batam', url: PATH },
        ])}
      />
      <JsonLd
        data={insuranceServiceSchema({
          name: 'Asuransi Public Liability Batam Proteksi',
          description:
            'Layanan asuransi Public Liability untuk restoran, ritel, pabrik, penyelenggara event, dan kontraktor di Batam.',
          path: PATH,
          serviceType: 'Asuransi Public Liability',
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Liability', href: '/produk/asuransi-liability' },
          { label: 'Asuransi Public Liability Batam' },
        ]}
      />

      <ArticleHero
        warna="purple"
        kategori="Panduan Utama"
        icon={Scale}
        title={JUDUL}
        intro="Public Liability adalah jenis liability yang paling sering dibutuhkan pelaku usaha di Batam — mulai dari restoran, ruko, pabrik, penyelenggara event, hingga subkontraktor proyek. Berikut panduan lengkapnya."
        lastUpdated="8 Agustus 2026"
        estimasiBaca="8 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="asuransi-public-liability-batam"
            variant="header"
            warna="purple"
            aspect="wide"
            label="Foto suasana usaha dengan pengunjung/tamu — misalnya area depan toko, restoran, atau pabrik di Batam"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Dari sekian jenis asuransi liability, Public Liability adalah yang paling relevan
            untuk hampir semua pelaku usaha — sederhananya, siapa pun yang lokasi atau
            aktivitas usahanya bersinggungan dengan orang luar (pelanggan, tamu, mitra) punya
            eksposur risiko ini. Batam yang padat dengan aktivitas ritel, manufaktur ekspor, dan
            kunjungan bisnis dari luar negeri membuat eksposur ini terasa nyata di berbagai jenis
            usaha, bukan cuma sektor tertentu saja.
          </p>
          <p>
            Halaman ini merangkum cakupan Public Liability secara umum. Untuk pembahasan yang
            lebih spesifik sesuai jenis usaha Anda, lihat panduan per segmen di bagian bawah.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Apa yang Dijamin dan Tidak Dijamin
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Cakupan tepatnya tetap mengikuti syarat polis masing-masing, namun secara umum
            begini gambarannya.
          </p>
          <CoverageList
            warna="purple"
            ditanggung={[
              'Cedera pihak ketiga (pelanggan, tamu, pengunjung) yang terjadi di lokasi usaha akibat kelalaian pihak usaha.',
              'Kerusakan properti milik pihak ketiga akibat aktivitas operasional usaha Anda.',
              'Biaya pembelaan hukum (legal defense cost) saat usaha Anda digugat pihak ketiga.',
              'Biaya pertolongan pertama/medis darurat untuk pihak ketiga yang cedera di lokasi.',
              'Penerbitan Certificate of Insurance bila diminta venue, principal, atau mitra kontrak.',
            ]}
            tidakDitanggung={[
              'Cedera karyawan sendiri — ranah BPJS Ketenagakerjaan atau Employers Liability terpisah.',
              'Kerugian akibat produk yang sudah berpindah tangan ke pembeli — ranah Product Liability.',
              'Kerusakan pada properti milik usaha Anda sendiri — ranah asuransi properti.',
              'Kerugian akibat pelanggaran hukum yang disengaja.',
              'Denda atau sanksi administratif dari pihak berwenang.',
            ]}
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="purple"
            title="Gambaran Nilai Pertanggungan Berdasarkan Skala Usaha"
            headers={['Skala Usaha', 'Contoh', 'Kisaran Limit yang Umum Dipilih']}
            rows={tabelLimit}
            caption="Angka bersifat ilustratif untuk gambaran umum, bukan penawaran resmi. Nilai final tergantung profil risiko usaha, syarat kontrak/venue, dan penilaian underwriting perusahaan asuransi."
          />
        </div>
      </section>

      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Public Liability Berdasarkan Jenis Usaha
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Risiko dan pertimbangan liability berbeda-beda tergantung jenis usaha. Pilih yang
              paling sesuai dengan usaha Anda.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {segmenUsaha.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group p-6 rounded-2xl border-2 ${c.border} bg-white shadow-md ${c.shadow} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                  <s.icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <h3 className="font-bold text-foreground mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <span className={`inline-flex items-center gap-1 text-sm font-medium ${c.text}`}>
                  Baca Panduannya
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="purple"
            title="Cara Menentukan Nilai Pertanggungan yang Tepat"
            items={[
              'Perhatikan traffic pengunjung harian — usaha dengan lalu-lintas orang lebih tinggi umumnya butuh limit lebih besar.',
              'Cek apakah ada pihak yang mensyaratkan limit tertentu secara kontraktual, misalnya venue event, principal proyek, atau mitra bisnis.',
              'Pertimbangkan nilai aset pihak ketiga yang berpotensi terdampak, bukan cuma nilai aset usaha Anda sendiri.',
              'Diskusikan riwayat insiden (jika ada) secara terbuka dengan Tono agar rekomendasi limit lebih akurat.',
              'Tinjau ulang limit setiap perpanjangan polis, terutama jika skala usaha bertambah.',
            ]}
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="8 Agustus 2026" />
        </div>
      </section>

      <FAQSection
        title="Pertanyaan Seputar Public Liability"
        intro="Pertanyaan umum yang sering ditanyakan sebelum mengambil proteksi Public Liability di Batam."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="purple"
        produkSlug="asuransi-liability"
        currentSlug="asuransi-public-liability-batam"
      />

      <CTABanner
        heading="Ingin Tahu Limit Public Liability yang Tepat untuk Usaha Anda?"
        subheading="Ceritakan jenis dan skala usaha Anda ke Tono untuk mendapat rekomendasi limit pertanggungan yang sesuai."
        waMessage="Halo Tono, saya ingin konsultasi tentang Asuransi Public Liability untuk usaha saya di Batam."
      />

      <Footer />
    </main>
  )
}
