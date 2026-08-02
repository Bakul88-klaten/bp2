'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Menu,
  X,
  Shield,
  Phone,
  MessageCircle,
  Home,
  ShieldCheck,
  User,
  Star,
  Mail,
  type LucideIcon,
} from 'lucide-react'
import { navItems, type NavItem } from '@/lib/nav-items'

const iconMap: Record<NavItem['icon'], LucideIcon> = {
  home: Home,
  produk: ShieldCheck,
  tentang: User,
  testimoni: Star,
  kontak: Mail,
}

const whatsappNumber = '6287781658231'
const whatsappDisplay = '0877-8165-8231'

export default function HeaderActions({ hasLogo }: { hasLogo: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Halo%20Tono,%20saya%20ingin%20konsultasi%20tentang%20asuransi`,
      '_blank'
    )
  }

  return (
    <>
      {/* Desktop CTA */}
      <div className="hidden lg:flex items-center gap-2 pl-2 ml-2 border-l border-primary/10">
        <Button
          variant="ghost"
          className="rounded-full text-primary hover:bg-primary/5 hover:text-primary"
          onClick={handleWhatsApp}
        >
          <Phone className="w-4 h-4 mr-2" />
          {whatsappDisplay}
        </Button>
        <Button
          className="rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Konsultasi Gratis
        </Button>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="rounded-full" aria-label="Buka menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[380px] flex flex-col">
          <div className="flex items-center gap-2.5 pb-5 border-b border-primary/10">
            {hasLogo ? (
              <Image
                src="/logo.png"
                alt="Batam Proteksi"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <>
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-bold text-primary tracking-tight">Batam Proteksi</span>
                  <span className="text-xs text-muted-foreground mt-1">Tono</span>
                </div>
              </>
            )}
          </div>

          <nav className="flex flex-col gap-1 py-5">
            {navItems.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </span>
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-5 mt-auto border-t border-primary/10">
            <Button
              variant="outline"
              className="w-full justify-start rounded-full"
              onClick={handleWhatsApp}
            >
              <Phone className="w-4 h-4 mr-2" />
              {whatsappDisplay}
            </Button>
            <Button
              className="w-full rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Konsultasi Gratis via WhatsApp
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
