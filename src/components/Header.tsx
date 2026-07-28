'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Shield, Phone } from 'lucide-react'

const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Produk', href: '#produk-unggulan' },
  { label: 'Tentang Saya', href: '#tentang' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

const whatsappNumber = '628131556592'
const whatsappDisplay = '0813-1556-592'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20tentang%20asuransi`, '_blank')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-primary">Dunia Asuransi</span>
              <span className="text-[10px] md:text-xs text-muted-foreground -mt-1">Rio Mardiansyah</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-primary" onClick={handleWhatsApp}>
              <Phone className="w-4 h-4 mr-2" />
              {whatsappDisplay}
            </Button>
            <Button className="bg-primary hover:bg-primary/90" onClick={handleWhatsApp}>
              Konsultasi Gratis
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 pb-4 border-b">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-primary">Dunia Asuransi</span>
                    <span className="text-xs text-muted-foreground">Rio Mardiansyah</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Button variant="outline" className="w-full justify-start" onClick={handleWhatsApp}>
                    <Phone className="w-4 h-4 mr-2" />
                    {whatsappDisplay}
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleWhatsApp}>
                    Konsultasi Gratis via WhatsApp
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
