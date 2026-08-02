import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const PATH = '/kebijakan-privasi'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi - Batam Proteksi',
  description:
    'Kebijakan privasi Batam Proteksi: data apa yang kami kumpulkan lewat formulir kontak dan WhatsApp, serta bagaimana data tersebut digunakan.',
  alternates: { canonical: `https://batamproteksi.biz.id${PATH}` },
  openGraph: {
    title: 'Kebijakan Privasi - Batam Proteksi',
    description: 'Bagaimana Batam Proteksi mengumpulkan dan menggunakan data Anda.',
    url: `https://batamproteksi.biz.id${PATH}`,
    type: 'website',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function KebijakanPrivasiPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Kebijakan Privasi
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Terakhir diperbarui: Agustus 2026</p>

          <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-6">
            <p>
              Batam Proteksi adalah layanan konsultasi asuransi personal yang dijalankan oleh
              Tono di Batam. Halaman ini menjelaskan data apa saja yang kami kumpulkan dari
              pengunjung situs <strong>batamproteksi.biz.id</strong> dan bagaimana data tersebut
              digunakan.
            </p>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Data yang Kami Kumpulkan</h2>
              <p>Kami hanya mengumpulkan data yang Anda berikan secara langsung, yaitu:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nama, alamat email, dan nomor WhatsApp/telepon yang Anda isi di formulir kontak.</li>
                <li>Isi pesan atau pertanyaan yang Anda tuliskan.</li>
                <li>Riwayat percakapan yang terjadi jika Anda menghubungi kami lewat WhatsApp.</li>
              </ul>
              <p className="mt-2">
                Kami tidak menggunakan cookie pelacakan pihak ketiga maupun skrip analitik iklan
                pada situs ini.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Bagaimana Data Digunakan</h2>
              <p>Data yang Anda kirimkan melalui formulir kontak digunakan semata-mata untuk:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Menghubungi Anda kembali melalui WhatsApp, telepon, atau email terkait pertanyaan asuransi Anda.</li>
                <li>Menyiapkan estimasi premi atau simulasi perlindungan yang Anda minta.</li>
              </ul>
              <p className="mt-2">
                Kami <strong>tidak menjual atau membagikan</strong> data pribadi Anda kepada pihak
                ketiga untuk kepentingan pemasaran.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Keamanan Data</h2>
              <p>
                Kami berupaya menjaga kerahasiaan data yang Anda berikan dan hanya
                menggunakannya untuk keperluan konsultasi asuransi yang Anda ajukan sendiri.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Hak Anda</h2>
              <p>
                Anda berhak meminta data pribadi Anda dihapus dari catatan kami kapan saja
                dengan menghubungi kami melalui WhatsApp atau email yang tercantum di halaman{' '}
                <Link href="/#kontak" className="text-primary underline">
                  Kontak
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-8 mb-3">Perubahan Kebijakan</h2>
              <p>
                Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan tercermin
                pada tanggal &ldquo;Terakhir diperbarui&rdquo; di atas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
