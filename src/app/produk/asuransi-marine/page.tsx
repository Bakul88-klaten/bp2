import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductBreadcrumb from '@/components/produk/ProductBreadcrumb'
import ExpertBox from '@/components/produk/ExpertBox'
import FAQSection from '@/components/produk/FAQSection'
import RelatedProducts from '@/components/produk/RelatedProducts'
import RelatedArtikel from '@/components/produk/RelatedArtikel'
import CTABanner from '@/components/produk/CTABanner'
import JsonLd from '@/components/produk/JsonLd'
import { breadcrumbSchema, insuranceServiceSchema, faqSchema } from '@/lib/schema'
import { Sailboat, LifeBuoy, Fish, Wrench, Cog, Scale, Waves, Flame, Anchor } from 'lucide-react'
import HeroSection from './HeroSection'
import ProcessSteps from '../_shared/ProcessSteps'

const PATH = '/produk/asuransi-marine'

export const metadata: Metadata = {
  title: 'Asuransi Marine Batam — Kapal, Tongkang & Ferry | Batam Proteksi',
  description:
    'Lindungi kapal niaga, tongkang, ferry, hingga kapal di galangan Tanjung Uncang dari risiko kandas, tabrakan, dan kerusakan mesin. Konsultasi gratis bersama Tono.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: 'Asuransi Marine Batam - Batam Proteksi',
    description: 'Perlindungan kapal dan aktivitas pelayaran di perairan Batam.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'website',
  },
}

const jenisKapal = [
  {
    icon: Sailboat,
    title: 'Kapal Niaga & Tongkang',
    desc: 'Kapal pengangkut material antar pulau di perairan Kepulauan Riau, termasuk tug & barge pengangkut pasir, batu bara, dan bahan tambang lainnya.',
  },
  {
    icon: LifeBuoy,
    title: 'Kapal Ferry Penumpang',
    desc: 'Kapal yang melayani rute reguler dari Terminal Ferry Batam Center dan Sekupang menuju Singapura dan Johor, Malaysia.',
  },
  {
    icon: Fish,
    title: 'Kapal Wisata & Nelayan',
    desc: 'Kapal wisata bahari di sekitar Pulau Abang dan Pulau Petong, maupun kapal nelayan bernilai tinggi milik operator lokal.',
  },
  {
    icon: Wrench,
    title: 'Kapal dalam Perbaikan di Galangan',
    desc: "Perlindungan Builder's Risk maupun Ship Repairer's Liability untuk kapal yang sedang direparasi di galangan Tanjung Uncang.",
  },
]

const cakupan = [
  { icon: Cog, label: 'Kerusakan Lambung & Mesin (Hull & Machinery)' },
  { icon: Scale, label: 'Tanggung Jawab Hukum Pemilik Kapal (P&I)' },
  { icon: Waves, label: 'Kandas & Tabrakan Antar Kapal' },
  { icon: Flame, label: 'Kebakaran & Ledakan di Atas Kapal' },
  { icon: Anchor, label: 'General Average & Biaya Salvage' },
]

const langkahKlaim = [
  {
    title: 'Amankan Kapal & Awak',
    desc: 'Prioritaskan keselamatan awak kapal, lalu dokumentasikan kejadian melalui foto, video, dan catatan log pelayaran.',
  },
  {
    title: 'Lapor ke Syahbandar & Tono',
    desc: 'Laporkan insiden sesuai prosedur maritim ke otoritas pelabuhan, kemudian hubungi Tono untuk langkah selanjutnya.',
  },
  {
    title: 'Survei Marine',
    desc: 'Surveyor marine independen menilai kerusakan lambung, mesin, atau muatan yang terdampak.',
  },
  {
    title: 'Proses Ganti Rugi',
    desc: 'Tono mengawal proses klaim hingga tuntas, termasuk koordinasi dengan galangan bila kapal perlu diperbaiki.',
  },
]

const faqItems = [
  {
    question: 'Apa itu Hull & Machinery dan P&I?',
    answer:
      'Hull & Machinery menanggung kerusakan fisik pada lambung dan mesin kapal, sedangkan P&I (Protection & Indemnity) menanggung tanggung jawab hukum pemilik kapal terhadap pihak ketiga, termasuk awak kapal dan lingkungan.',
  },
  {
    question: 'Apakah kapal yang sedang direparasi di galangan juga bisa diasuransikan?',
    answer:
      "Bisa, menggunakan skema Builder's Risk atau Ship Repairer's Liability yang menanggung risiko selama proses perbaikan berlangsung di galangan seperti Tanjung Uncang.",
  },
  {
    question: 'Bagaimana dengan kapal ferry penumpang rute Batam-Singapura?',
    answer:
      'Kapal ferry penumpang bisa diasuransikan dengan kombinasi Hull & Machinery untuk kapalnya dan P&I untuk tanggung jawab terhadap penumpang selama pelayaran.',
  },
  {
    question: 'Apakah nelayan dengan kapal kecil bisa mengasuransikan kapalnya?',
    answer:
      'Bisa, terutama untuk kapal bernilai cukup tinggi. Tono akan membantu menyesuaikan jenis dan besaran jaminan dengan skala operasional kapal Anda.',
  },
  {
    question: 'Apa yang terjadi jika kapal tabrakan dengan kapal lain di Selat Singapura?',
    answer:
      'Jalur ini termasuk salah satu yang tersibuk di dunia, sehingga risiko tabrakan nyata. Selama insiden tercakup dalam polis, kerusakan kapal Anda maupun tanggung jawab hukum ke kapal lain dapat diklaim sesuai ketentuan polis.',
  },
]

export default function AsuransiMarinePage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Beranda', url: '/' },
          { name: 'Produk Asuransi', url: '/produk' },
          { name: 'Asuransi Marine', url: PATH },
        ])}
      />
      <JsonLd
        data={insuranceServiceSchema({
          name: 'Asuransi Marine Batam Proteksi',
          description:
            'Layanan asuransi kapal, tongkang, dan aktivitas pelayaran di perairan Batam dan sekitarnya.',
          path: PATH,
          serviceType: 'Asuransi Marine',
        })}
      />
      <JsonLd
        data={faqSchema(faqItems)}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Marine' },
        ]}
      />

      <HeroSection />

      {/* Konteks Lokal Batam */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Batam, Salah Satu Jantung Aktivitas Pelayaran di Indonesia
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Batam dikenal luas sebagai pusat industri galangan kapal (shipyard), terutama di
              kawasan Tanjung Uncang yang menjadi salah satu lokasi pembuatan dan reparasi kapal
              terbesar di Indonesia, termasuk untuk kapal-kapal penunjang industri minyak dan gas
              lepas pantai. Di tengah aktivitas ini, risiko selama proses pembangunan maupun
              perbaikan kapal menjadi hal yang tidak bisa diabaikan pemiliknya.
            </p>
            <p>
              Setiap hari, kapal ferry penumpang berangkat dari Terminal Ferry Internasional Batam
              Center dan Sekupang menuju Singapura dan Johor, Malaysia, melintasi Selat Singapura —
              salah satu jalur pelayaran tersibuk di dunia. Di jalur yang sama, tongkang pengangkut
              material tambang dan kapal niaga lain turut lalu-lalang antar pulau di Kepulauan
              Riau, membuat risiko tabrakan dan kandas menjadi pertimbangan nyata bagi setiap
              operator kapal.
            </p>
            <p>
              Di sisi lain, geliat pariwisata bahari di sekitar Pulau Abang dan Pulau Petong turut
              mendorong pertumbuhan kapal wisata dan kapal nelayan bernilai tinggi. Baik untuk
              kapal niaga besar maupun kapal wisata skala kecil, proteksi yang sesuai membantu
              pemiliknya tetap tenang menjalankan operasional di perairan Batam yang padat
              aktivitas ini.
            </p>
          </div>
        </div>
      </section>

      {/* Jenis Kapal */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-teal-50 rounded-full text-sm font-medium text-teal-600 mb-4">
              Jenis Kapal yang Dilindungi
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Dari Tongkang hingga Kapal di Galangan
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {jenisKapal.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-2xl border-2 border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-center text-sm font-medium text-muted-foreground mb-4">
              Cakupan jaminan yang tersedia
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {cakupan.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-teal-200 rounded-full text-sm text-foreground"
                >
                  <c.icon className="w-4 h-4 text-teal-600" />
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps
        title="Proses Klaim Asuransi Marine"
        subtitle="Keselamatan awak jadi prioritas pertama, baru proses klaim berjalan didampingi Tono."
        steps={langkahKlaim}
        accent="teal"
      />

      <section className="pb-14 md:pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="30 Juli 2026" />
        </div>
      </section>

      <RelatedArtikel produkSlug="asuransi-marine" warna="teal" />

      <FAQSection
        title="Pertanyaan Seputar Asuransi Marine"
        intro="Hal-hal yang sering ditanyakan pemilik dan operator kapal di perairan Batam."
        items={faqItems}
      />

      <RelatedProducts currentSlug="asuransi-marine" />

      <CTABanner
        heading="Punya Kapal yang Beroperasi di Perairan Batam?"
        subheading="Ceritakan jenis dan aktivitas kapal Anda ke Tono untuk menentukan cakupan Hull & Machinery atau P&I yang paling sesuai."
        waMessage="Halo Tono, saya ingin konsultasi tentang Asuransi Marine untuk kapal saya di Batam."
      />

      <Footer />
    </main>
  )
}
