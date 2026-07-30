import { Building2, Car, Ship, Scale, Anchor, Cog, type LucideIcon } from 'lucide-react'

export type WarnaProduk = 'orange' | 'blue' | 'cyan' | 'purple' | 'teal' | 'slate'

export interface ProdukKategori {
  slug: string
  nama: string
  namaSingkat: string
  deskripsi: string
  icon: LucideIcon
  warna: WarnaProduk
  status: 'live' | 'segera'
}

export const produkKategori: ProdukKategori[] = [
  {
    slug: 'asuransi-properti',
    nama: 'Asuransi Properti',
    namaSingkat: 'Properti',
    deskripsi: 'Proteksi rumah, ruko, gudang, dan pabrik dari risiko kebakaran hingga bencana alam.',
    icon: Building2,
    warna: 'orange',
    status: 'live',
  },
  {
    slug: 'asuransi-kendaraan',
    nama: 'Asuransi Kendaraan',
    namaSingkat: 'Kendaraan',
    deskripsi: 'Perlindungan All Risk maupun TLO untuk mobil dan motor pribadi atau armada usaha.',
    icon: Car,
    warna: 'blue',
    status: 'live',
  },
  {
    slug: 'asuransi-cargo',
    nama: 'Asuransi Cargo',
    namaSingkat: 'Cargo',
    deskripsi: 'Perlindungan barang kiriman lewat laut, udara, dan darat dari dan menuju Batam.',
    icon: Ship,
    warna: 'cyan',
    status: 'live',
  },
  {
    slug: 'asuransi-liability',
    nama: 'Asuransi Liability',
    namaSingkat: 'Liability',
    deskripsi: 'Tanggung jawab hukum atas tuntutan pihak ketiga akibat operasional usaha Anda.',
    icon: Scale,
    warna: 'purple',
    status: 'live',
  },
  {
    slug: 'asuransi-marine',
    nama: 'Asuransi Marine',
    namaSingkat: 'Marine',
    deskripsi: 'Perlindungan kapal, tongkang, dan aktivitas pelayaran di perairan Batam & sekitarnya.',
    icon: Anchor,
    warna: 'teal',
    status: 'live',
  },
  {
    slug: 'asuransi-engineering-machinery',
    nama: 'Asuransi Engineering & Machinery',
    namaSingkat: 'Engineering & Machinery',
    deskripsi: 'Proteksi proyek konstruksi dan mesin produksi di kawasan industri Batam.',
    icon: Cog,
    warna: 'slate',
    status: 'live',
  },
]

export const warnaClass: Record<WarnaProduk, { bg: string; text: string; border: string }> = {
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
  slate: { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' },
}
