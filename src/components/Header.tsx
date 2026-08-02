import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'
import { Shield } from 'lucide-react'
import HeaderActions from '@/components/HeaderActions'
import { navItems } from '@/lib/nav-items'

/**
 * Logo gambar (opsional): /public/logo.png
 * Selama file belum ada, header memakai lockup ikon + wordmark seperti sekarang.
 * Begitu logo.png diunggah ke /public, header otomatis memakainya — tanpa ubah kode.
 */
function hasLogoImage() {
  return fs.existsSync(path.join(process.cwd(), 'public', 'logo.png'))
}

export default function Header() {
  const hasLogo = hasLogoImage()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/10 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            {hasLogo ? (
              <Image
                src="/logo.png"
                alt="Batam Proteksi"
                width={168}
                height={48}
                priority
                className="h-9 md:h-11 w-auto object-contain"
              />
            ) : (
              <>
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg md:text-xl font-bold text-primary tracking-tight">
                    Batam Proteksi
                  </span>
                  <span className="text-[10px] md:text-xs text-muted-foreground mt-1">Tono</span>
                </div>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <HeaderActions hasLogo={hasLogo} />
        </div>
      </div>
    </header>
  )
}
