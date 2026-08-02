export interface NavItem {
  label: string
  href: string
  icon: 'home' | 'produk' | 'tentang' | 'testimoni' | 'kontak'
}

export const navItems: NavItem[] = [
  { label: 'Beranda', href: '/#beranda', icon: 'home' },
  { label: 'Produk', href: '/produk', icon: 'produk' },
  { label: 'Tentang Saya', href: '/#tentang', icon: 'tentang' },
  { label: 'Testimoni', href: '/#testimoni', icon: 'testimoni' },
  { label: 'Kontak', href: '/#kontak', icon: 'kontak' },
]
