export interface ArtikelSilo {
  slug: string
  produkSlug: string
  kategori: string
  judul: string
  judulSingkat: string
  deskripsi: string
}

export const artikelSilo: ArtikelSilo[] = [
  // ===== Asuransi Properti =====
  {
    slug: 'cara-hitung-nilai-pertanggungan-properti',
    produkSlug: 'asuransi-properti',
    kategori: 'Panduan',
    judul: 'Cara Menghitung Nilai Pertanggungan Properti agar Tidak Rugi Saat Klaim',
    judulSingkat: 'Cara Hitung Nilai Pertanggungan Properti',
    deskripsi:
      'Panduan menghitung nilai pertanggungan rumah, ruko, dan gudang di Batam agar terhindar dari under-insurance saat klaim.',
  },
  {
    slug: 'flexas-vs-property-all-risk',
    produkSlug: 'asuransi-properti',
    kategori: 'Perbandingan',
    judul: 'FLEXAS vs Property All Risk: Pilih Mana untuk Properti Anda di Batam?',
    judulSingkat: 'FLEXAS vs Property All Risk',
    deskripsi:
      'Tabel perbandingan cakupan FLEXAS dan Property All Risk untuk membantu memilih polis properti yang tepat.',
  },

  // ===== Asuransi Kendaraan =====
  {
    slug: 'faktor-penentu-premi-mobil-batam',
    produkSlug: 'asuransi-kendaraan',
    kategori: 'Panduan',
    judul: 'Faktor Penentu Premi Asuransi Mobil di Batam & Simulasi Perhitungannya',
    judulSingkat: 'Faktor Penentu Premi Mobil',
    deskripsi:
      'Faktor-faktor yang memengaruhi besaran premi asuransi mobil All Risk dan TLO di Batam, lengkap dengan simulasi.',
  },
  {
    slug: 'panduan-klaim-kecelakaan-kendaraan',
    produkSlug: 'asuransi-kendaraan',
    kategori: 'Panduan',
    judul: 'Panduan Lengkap Klaim Kecelakaan Mobil di Batam: Tunggal, Ganda, sampai Kehilangan',
    judulSingkat: 'Panduan Klaim Kecelakaan Kendaraan',
    deskripsi:
      'Langkah dan dokumen yang dibutuhkan untuk klaim kecelakaan tunggal, ganda, dan kehilangan kendaraan di Batam.',
  },

  // ===== Asuransi Cargo =====
  {
    slug: 'institute-cargo-clauses-a-b-c',
    produkSlug: 'asuransi-cargo',
    kategori: 'Perbandingan',
    judul: 'Institute Cargo Clauses A, B, C: Pilih Proteksi Kargo yang Tepat untuk Batam',
    judulSingkat: 'ICC A vs B vs C',
    deskripsi:
      'Perbandingan cakupan Institute Cargo Clauses A, B, dan C untuk pengiriman ekspor-impor dari dan ke Batam.',
  },
  {
    slug: 'panduan-klaim-cargo-rusak-hilang',
    produkSlug: 'asuransi-cargo',
    kategori: 'Panduan',
    judul: 'Panduan Klaim Asuransi Cargo: Barang Rusak, Basah, atau Hilang di Pelabuhan',
    judulSingkat: 'Panduan Klaim Cargo',
    deskripsi:
      'Dokumen dan tahapan klaim saat barang kiriman rusak, basah, atau hilang di pelabuhan sekitar Batam.',
  },

  // ===== Asuransi Liability =====
  {
    slug: 'perbandingan-jenis-asuransi-liability',
    produkSlug: 'asuransi-liability',
    kategori: 'Perbandingan',
    judul: 'Public Liability vs Product Liability vs Professional Indemnity: Mana yang Anda Butuhkan?',
    judulSingkat: 'Perbandingan Jenis Asuransi Liability',
    deskripsi:
      'Tabel perbandingan Public Liability, Product Liability, dan Professional Indemnity beserta industri yang cocok.',
  },
  {
    slug: 'studi-kasus-klaim-liability-usaha',
    produkSlug: 'asuransi-liability',
    kategori: 'Studi Kasus',
    judul: 'Contoh Kasus Klaim Liability: Ketika Usaha di Batam Digugat Pihak Ketiga',
    judulSingkat: 'Studi Kasus Klaim Liability',
    deskripsi:
      'Tiga contoh kasus tuntutan pihak ketiga terhadap usaha di Batam dan bagaimana asuransi liability berperan.',
  },
  {
    slug: 'public-liability-subcon-proyek-kapal-batam',
    produkSlug: 'asuransi-liability',
    kategori: 'Panduan',
    judul:
      'Asuransi Public Liability untuk Subcon Proyek Kapal di Batam: Berapa Nilai Pertanggungan yang Ideal?',
    judulSingkat: 'Public Liability Subcon Proyek Kapal',
    deskripsi:
      'Panduan Public Liability untuk subkontraktor pengerjaan bagian kapal di Batam, termasuk gambaran nilai pertanggungan Rp 3 miliar.',
  },

  // ===== Asuransi Marine =====
  {
    slug: 'hull-machinery-vs-protection-indemnity',
    produkSlug: 'asuransi-marine',
    kategori: 'Perbandingan',
    judul: 'Hull & Machinery vs Protection & Indemnity (P&I): Dua Pilar Asuransi Kapal',
    judulSingkat: 'Hull & Machinery vs P&I',
    deskripsi:
      'Perbedaan cakupan Hull & Machinery dan Protection & Indemnity untuk kapal niaga dan ferry di perairan Batam.',
  },
  {
    slug: 'asuransi-kapal-masa-reparasi-galangan',
    produkSlug: 'asuransi-marine',
    kategori: 'Panduan',
    judul: 'Asuransi Kapal Selama di Galangan & Masa Reparasi: Apa yang Perlu Diketahui',
    judulSingkat: 'Asuransi Kapal di Galangan',
    deskripsi:
      'Risiko dan proteksi yang perlu dipertimbangkan pemilik kapal saat kapal menjalani perbaikan di galangan Batam.',
  },

  // ===== Asuransi Engineering & Machinery =====
  {
    slug: 'car-vs-ear-perbandingan',
    produkSlug: 'asuransi-engineering-machinery',
    kategori: 'Perbandingan',
    judul: "Contractor's All Risk vs Erection All Risk: Panduan Memilih untuk Proyek di Batam",
    judulSingkat: 'CAR vs EAR',
    deskripsi:
      "Perbandingan Contractor's All Risk dan Erection All Risk untuk proyek konstruksi dan instalasi mesin di Batam.",
  },
  {
    slug: 'mencegah-klaim-machinery-breakdown',
    produkSlug: 'asuransi-engineering-machinery',
    kategori: 'Panduan',
    judul: 'Mencegah & Mengklaim Machinery Breakdown di Kawasan Industri Batam',
    judulSingkat: 'Mencegah Klaim Machinery Breakdown',
    deskripsi:
      'Penyebab umum kerusakan mesin produksi, langkah pencegahan, dan cara mengajukan klaim machinery breakdown.',
  },
]

export function artikelByProduk(produkSlug: string): ArtikelSilo[] {
  return artikelSilo.filter((a) => a.produkSlug === produkSlug)
}

export function artikelSiblings(produkSlug: string, currentSlug: string): ArtikelSilo[] {
  return artikelSilo.filter((a) => a.produkSlug === produkSlug && a.slug !== currentSlug)
}
