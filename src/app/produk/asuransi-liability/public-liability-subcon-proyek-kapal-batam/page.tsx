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
import { ShieldCheck } from 'lucide-react'

const PATH = '/produk/asuransi-liability/public-liability-subcon-proyek-kapal-batam'
const JUDUL =
  'Asuransi Public Liability untuk Subcon Proyek Kapal di Batam: Berapa Nilai Pertanggungan yang Ideal?'

export const metadata: Metadata = {
  title: 'Public Liability untuk Subcon Proyek Kapal Batam | Batam Proteksi',
  description:
    'Panduan Public Liability untuk subkontraktor pengerjaan bagian kapal di galangan Batam — apa yang dijamin dan tidak, contoh kasus, serta gambaran nilai pertanggungan Rp 3 miliar.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: JUDUL,
    description:
      'Panduan Public Liability untuk subcon proyek kapal di Batam, termasuk gambaran nilai pertanggungan Rp 3 miliar.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'article',
  },
}

const tabelNilaiPertanggungan = [
  [
    'Kecil — pekerjaan ringan, durasi singkat',
    'Perbaikan kecil, pengecatan ulang bagian kapal',
    'Rp 1 - 2 Miliar',
  ],
  [
    'Menengah — pekerjaan panas/fabrikasi',
    'Pengelasan, fabrikasi, reparasi komponen bagian kapal',
    'Rp 3 - 5 Miliar',
  ],
  [
    'Besar — proyek kompleks, durasi panjang',
    'Instalasi sistem atau mesin kapal skala besar',
    'Rp 5 - 10 Miliar atau lebih',
  ],
]

const faqItems = [
  {
    question: 'Apakah Public Liability wajib secara hukum untuk subcon proyek kapal di Batam?',
    answer:
      'Tidak selalu diwajibkan oleh undang-undang secara umum. Namun banyak galangan dan pemilik proyek kapal di Batam mensyaratkannya secara kontraktual sebagai bagian dari syarat tender atau Surat Perintah Kerja (SPK), sebelum subcon diizinkan mulai bekerja di lokasi mereka.',
  },
  {
    question: 'Kenapa nilai pertanggungan yang diminta biasanya di kisaran Rp 3 miliar?',
    answer:
      'Angka ini umum diminta untuk pekerjaan subcon skala menengah seperti pengelasan atau fabrikasi bagian kapal, mengingat potensi kerugian pada kapal atau fasilitas pihak ketiga di lingkungan galangan bisa cukup bernilai tinggi. Limit final tetap mengikuti syarat kontrak dari masing-masing principal atau galangan.',
  },
  {
    question: 'Apakah polis ini juga menjamin pekerja subcon sendiri jika cedera saat bekerja?',
    answer:
      'Tidak. Public Liability berfokus pada kerugian pihak ketiga di luar hubungan kerja subcon. Cedera pada pekerja subcon sendiri berada di ranah BPJS Ketenagakerjaan atau Employers Liability, yang idealnya dimiliki secara terpisah.',
  },
  {
    question: 'Berapa lama proses penerbitan sertifikat asuransi untuk keperluan tender?',
    answer:
      'Bervariasi tergantung kelengkapan dokumen proyek, namun umumnya dapat diproses dalam waktu singkat. Sampaikan tenggat submission tender ke Tono sejak awal agar penerbitan Certificate of Insurance dapat dikejar tepat waktu.',
  },
  {
    question: 'Apakah premi dipengaruhi jenis pekerjaan, misalnya pengelasan dibanding pekerjaan ringan?',
    answer:
      'Bisa. Pekerjaan berisiko lebih tinggi seperti pengelasan atau pekerjaan panas (hot work) umumnya dinilai berbeda dari pekerjaan ringan seperti pembersihan atau pengecatan, karena eksposur risikonya terhadap pihak ketiga juga berbeda.',
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
          { name: 'Public Liability Subcon Proyek Kapal', url: PATH },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: JUDUL,
          description:
            'Panduan Public Liability untuk subkontraktor pengerjaan bagian kapal di Batam, termasuk gambaran nilai pertanggungan Rp 3 miliar.',
          path: PATH,
          datePublished: '2026-08-01',
          dateModified: '2026-08-01',
        })}
      />
      <JsonLd
        data={faqSchema(faqItems)}
      />
      <Header />
      <ProductBreadcrumb
        items={[
          { label: 'Produk Asuransi', href: '/produk' },
          { label: 'Asuransi Liability', href: '/produk/asuransi-liability' },
          { label: 'Public Liability Subcon Proyek Kapal' },
        ]}
      />

      <ArticleHero
        warna="purple"
        kategori="Panduan"
        icon={ShieldCheck}
        title={JUDUL}
        intro="Semakin banyak galangan dan pemilik proyek kapal di Batam mensyaratkan bukti Public Liability sebelum subkontraktor boleh mulai bekerja. Berikut yang perlu diketahui, termasuk gambaran nilai pertanggungan Rp 3 miliar yang sering diminta."
        lastUpdated="1 Agustus 2026"
        estimasiBaca="7 menit baca"
      />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleImageSlot
            articleSlug="public-liability-subcon-proyek-kapal-batam"
            variant="header"
            warna="purple"
            aspect="wide"
            label="Foto aktivitas pengerjaan/pengelasan bagian kapal di galangan Batam atau ilustrasi sertifikat asuransi"
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Beberapa waktu terakhir, permintaan konsultasi Public Liability yang masuk ke Tono
            didominasi satu profil klien yang sama: perusahaan subkontraktor yang mengerjakan
            bagian kapal — mulai dari pengelasan lambung, fabrikasi komponen, hingga reparasi —
            untuk galangan atau pemilik kapal di kawasan seperti Tanjung Uncang dan sekitarnya.
          </p>
          <p>
            Polanya hampir selalu sama: principal (galangan atau pemilik proyek) mensyaratkan
            bukti Public Liability dengan nilai pertanggungan tertentu — sering kali di kisaran
            Rp 3 miliar — sebagai syarat administrasi sebelum kontrak kerja atau Surat Perintah
            Kerja (SPK) bisa diteken. Artikel ini merangkum apa yang perlu dipahami subcon
            sebelum mengajukan polis untuk kebutuhan tersebut.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="purple"
            title="Kenapa Syarat Ini Makin Sering Diminta di Batam"
            items={[
              'Proyek perkapalan melibatkan banyak pihak sekaligus — subcon las, subcon cat, subcon instalasi — bekerja berdampingan di satu area galangan atau dermaga.',
              'Principal ingin memastikan ada pihak yang menanggung jika pekerjaan subcon menyebabkan kerugian pada kapal atau fasilitas milik pihak lain.',
              'Memiliki Certificate of Insurance mempercepat proses lolos syarat administrasi tender maupun kontrak kerja.',
              'Galangan yang melayani klien atau kapal asing umumnya menerapkan standar due diligence yang lebih ketat terhadap kontraktor dan subkontraktornya.',
            ]}
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Apa yang Dijamin dan Tidak Dijamin
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Kesalahpahaman paling umum adalah menganggap Public Liability menanggung segala
            bentuk kerugian selama proyek berlangsung. Berikut gambaran cakupannya secara lebih
            spesifik untuk pekerjaan subcon bagian kapal.
          </p>
          <CoverageList
            warna="purple"
            ditanggung={[
              'Cedera pihak ketiga (pekerja galangan lain, tamu, surveyor) akibat aktivitas pekerjaan subcon di lokasi proyek.',
              'Kerusakan pada kapal atau bagian kapal milik pihak ketiga akibat kelalaian pekerjaan subcon, misalnya percikan las yang mengenai kapal di sebelahnya.',
              'Kerusakan fasilitas dermaga atau galangan akibat aktivitas kerja subcon.',
              'Biaya pembelaan hukum (legal defense cost) saat subcon digugat pihak ketiga.',
              'Biaya pertolongan pertama/medis darurat untuk pihak ketiga yang cedera di lokasi kerja.',
            ]}
            tidakDitanggung={[
              'Cedera pekerja subcon sendiri — ranah BPJS Ketenagakerjaan atau Employers Liability terpisah.',
              'Cacat atau kegagalan mutu hasil pekerjaan subcon itu sendiri, bukan kerugian pihak ketiga.',
              'Denda keterlambatan proyek (liquidated damages) sesuai kontrak kerja.',
              'Kerugian akibat pelanggaran hukum yang disengaja.',
              'Kerugian yang timbul di luar lokasi atau lingkup pekerjaan yang disepakati dalam kontrak.',
            ]}
          />
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ComparisonTable
            warna="purple"
            title="Ilustrasi Nilai Pertanggungan Sesuai Skala Proyek"
            headers={['Skala Proyek Subcon', 'Contoh Pekerjaan', 'Limit yang Umum Diminta Principal']}
            rows={tabelNilaiPertanggungan}
            caption="Angka bersifat ilustratif untuk gambaran umum. Limit final tetap ditentukan oleh syarat kontrak/tender principal dan penilaian risiko pekerjaan oleh perusahaan asuransi."
          />
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contoh Kasus</h2>
          <CaseStudyBox
            warna="purple"
            title="Percikan Las Merusak Kapal Tetangga Saat Reparasi di Tanjung Uncang"
          >
            <p>
              Sebuah perusahaan subcon mengerjakan pengelasan bagian lambung kapal untuk proyek
              reparasi di sebuah galangan kawasan Tanjung Uncang. Sesuai syarat kontrak, principal
              mensyaratkan Public Liability dengan nilai pertanggungan Rp 3 miliar sebelum
              pekerjaan boleh dimulai.
            </p>
            <p>
              Saat proses pengelasan berlangsung, percikan api menyambar ke arah kapal lain yang
              sedang docking berdampingan, menyebabkan kerusakan pada bagian cat dan sejumlah
              komponen elektronik kapal tersebut. Pemilik kapal yang terdampak mengajukan klaim
              kerugian sekitar Rp 800 juta.
            </p>
            <p className="font-medium text-foreground">
              Karena limit pertanggungan Rp 3 miliar jauh mencukupi, seluruh proses ganti rugi
              dapat diproses tanpa subcon perlu menanggung sendiri — dan hubungan kerja dengan
              principal tetap terjaga karena syarat kontrak sudah dipenuhi sejak awal proyek.
            </p>
          </CaseStudyBox>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeyPointsBox
            warna="purple"
            title="Proses Mendapatkan Sertifikat Asuransi untuk Tender"
            items={[
              'Siapkan data proyek: lingkup pekerjaan, lokasi, estimasi durasi, dan nilai kontrak.',
              'Sampaikan limit pertanggungan yang diminta principal — biasanya tercantum di dokumen tender atau kontrak — ke Tono.',
              'Proses penerbitan polis dan Certificate of Insurance dapat diajukan sebelum kontrak/SPK ditandatangani.',
              'Simpan salinan sertifikat untuk diserahkan ke bagian procurement atau HSE principal sebagai syarat administrasi.',
              'Perbarui atau perpanjang polis jika durasi proyek ternyata melebihi masa berlaku polis awal.',
            ]}
          />
        </div>
      </section>

      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ExpertBox lastUpdated="1 Agustus 2026" />
        </div>
      </section>

      <FAQSection
        title="Pertanyaan Seputar Public Liability untuk Subcon Kapal"
        intro="Pertanyaan yang sering muncul dari subcon yang sedang menyiapkan dokumen tender proyek kapal di Batam."
        items={faqItems}
      />

      <ArticleCrossLinks
        warna="purple"
        produkSlug="asuransi-liability"
        currentSlug="public-liability-subcon-proyek-kapal-batam"
      />

      <CTABanner
        heading="Sedang Menyiapkan Dokumen Tender Proyek Kapal?"
        subheading="Sampaikan lingkup pekerjaan dan limit yang diminta principal ke Tono untuk dibantu menerbitkan polis dan Certificate of Insurance tepat waktu."
        waMessage="Halo Tono, saya subcon proyek kapal di Batam dan butuh Public Liability untuk syarat tender/kontrak."
      />

      <Footer />
    </main>
  )
}
