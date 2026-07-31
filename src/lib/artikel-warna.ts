import type { WarnaProduk } from './produk-data'

/**
 * Kelas Tailwind tambahan khusus halaman artikel silo.
 * Ditulis literal (bukan template string) agar tetap terdeteksi Tailwind JIT.
 */
export const artikelWarna: Record<
  WarnaProduk,
  {
    gradientFrom: string
    solidHover: string
    ring: string
    dashedBorder: string
    softBg: string
  }
> = {
  orange: {
    gradientFrom: 'from-orange-50',
    solidHover: 'hover:bg-orange-700',
    ring: 'ring-orange-200',
    dashedBorder: 'border-orange-300',
    softBg: 'bg-orange-50/60',
  },
  blue: {
    gradientFrom: 'from-blue-50',
    solidHover: 'hover:bg-blue-700',
    ring: 'ring-blue-200',
    dashedBorder: 'border-blue-300',
    softBg: 'bg-blue-50/60',
  },
  cyan: {
    gradientFrom: 'from-cyan-50',
    solidHover: 'hover:bg-cyan-700',
    ring: 'ring-cyan-200',
    dashedBorder: 'border-cyan-300',
    softBg: 'bg-cyan-50/60',
  },
  purple: {
    gradientFrom: 'from-purple-50',
    solidHover: 'hover:bg-purple-700',
    ring: 'ring-purple-200',
    dashedBorder: 'border-purple-300',
    softBg: 'bg-purple-50/60',
  },
  teal: {
    gradientFrom: 'from-teal-50',
    solidHover: 'hover:bg-teal-700',
    ring: 'ring-teal-200',
    dashedBorder: 'border-teal-300',
    softBg: 'bg-teal-50/60',
  },
  slate: {
    gradientFrom: 'from-slate-100',
    solidHover: 'hover:bg-slate-800',
    ring: 'ring-slate-300',
    dashedBorder: 'border-slate-400',
    softBg: 'bg-slate-100/60',
  },
}
