'use client'

import Link from 'next/link'
import { Shield, Phone, Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon, FacebookIcon, LinkedinIcon } from '@/components/icons/social'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { label: 'Beranda', href: '/#beranda' },
  { label: 'Produk', href: '/produk' },
  { label: 'Tentang Saya', href: '/#tentang' },
  { label: 'Testimoni', href: '/#testimoni' },
  { label: 'Kontak', href: '/#kontak' },
]

const products = [
  { label: 'Asuransi Properti', href: '/produk/asuransi-properti' },
  { label: 'Asuransi Kendaraan', href: '/produk/asuransi-kendaraan' },
  { label: 'Asuransi Cargo', href: '/produk/asuransi-cargo' },
  { label: 'Lihat Semua Produk', href: '/produk' },
]

const legal = [
  { label: 'Kebijakan Privasi', href: '#' },
  { label: 'Syarat & Ketentuan', href: '#' },
]

const whatsappNumber = '6287781658231'
const whatsappDisplay = '0877-8165-8231'

const socialLinks = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Tono,%20saya%20ingin%20konsultasi%20tentang%20asuransi`, '_blank')
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Batam Proteksi</span>
                <span className="text-xs text-gray-400 -mt-1">Tono</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Partner asuransi terpercaya Anda. Kami siap membantu menemukan 
              perlindungan terbaik untuk kendaraan, properti, bisnis, dan diri Anda 
              dengan layanan profesional.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produk Asuransi</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Tono</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-primary transition-colors"
                  >
                    {whatsappDisplay}
                  </a>
                  <p className="text-xs text-gray-400">WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href={`tel:+${whatsappNumber}`}
                    className="text-sm text-white hover:text-primary transition-colors"
                  >
                    {whatsappDisplay}
                  </a>
                  <p className="text-xs text-gray-400">Telepon</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="mailto:tono@batamproteksi.biz.id"
                    className="text-sm text-white hover:text-primary transition-colors"
                  >
                    tono@batamproteksi.biz.id
                  </a>
                  <p className="text-xs text-gray-400">Email</p>
                </div>
              </li>
            </ul>
            
            {/* WhatsApp CTA */}
            <Button 
              className="w-full mt-6 bg-green-500 hover:bg-green-600"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Batam Proteksi - Tono. Praktisi Asuransi Profesional.
          </p>
          <div className="flex gap-6">
            {legal.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
