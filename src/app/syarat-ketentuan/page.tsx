import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const PATH = '/syarat-ketentuan'

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan - Batam Proteksi',
  description:
    'Syarat dan ketentuan penggunaan situs Batam Proteksi, termasuk sifat konten edukasi dan proses konsultasi asuransi bersama Tono.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: 'Syarat & Ketentuan - Batam Proteksi',
    description: 'Syarat dan ketentuan penggunaan situs dan layanan konsultasi Batam Proteksi.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'website',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function SyaratKetentuanPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Syarat &amp; Ketentuan
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Terakhir diperbarui: Agustus 2026</p>

          <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-6">
            <p>
              Dengan mengakses dan menggunakan situs <strong>batamproteksi.biz.id</strong>,
              Anda dianggap menyetujui syarat dan ketentuan berikut.
            </p>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Sifat Layanan</h2>
              <p>
                Batam Proteksi adalah layanan konsultasi asuransi personal yang dijalankan oleh
                Tono. Situs ini bukan situs perusahaan asuransi resmi, melainkan kanal informasi
                dan konsultasi menuju produk asuransi dari perusahaan penanggung yang bekerja
                sama dengan Tono.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Sifat Konten</h2>
              <p>
                Seluruh artikel, panduan, dan estimasi premi di situs ini bersifat edukasi dan
                simulasi umum. Angka premi yang ditampilkan adalah <strong>estimasi</strong> dan
                dapat berbeda dari premi final yang ditetapkan oleh perusahaan asuransi setelah
                proses underwriting. Konten di situs ini bukan merupakan polis, penawaran resmi,
                atau nasihat keuangan/hukum yang mengikat.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Proses Konsultasi</h2>
              <p>
                Pengajuan pertanyaan melalui formulir kontak atau WhatsApp di situs ini tidak
                secara otomatis menerbitkan polis asuransi. Penerbitan polis tetap mengikuti
                proses aplikasi, underwriting, dan persetujuan dari perusahaan asuransi terkait.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Tautan ke Pihak Lain</h2>
              <p>
                Situs ini dapat menyebut nama produk atau jenis polis (mis. Contractor&rsquo;s
                All Risk, Institute Cargo Clauses) sebagai referensi umum industri, bukan sebagai
                afiliasi atau dukungan resmi dari pemilik merek/istilah tersebut.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Perubahan Ketentuan</h2>
              <p>
                Syarat dan ketentuan ini dapat diperbarui sewaktu-waktu tanpa pemberitahuan
                sebelumnya. Perubahan akan tercermin pada tanggal &ldquo;Terakhir diperbarui&rdquo;
                di atas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Kontak</h2>
              <p>
                Pertanyaan mengenai syarat dan ketentuan ini dapat disampaikan melalui halaman{' '}
                <Link href="/#kontak" className="text-primary underline">
                  Kontak
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
