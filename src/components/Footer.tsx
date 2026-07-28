'use client'

import { Shield, Phone, Mail, MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Produk', href: '#produk-unggulan' },
  { label: 'Tentang Saya', href: '#tentang' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

const products = [
  { label: 'Asuransi Kendaraan', href: '#produk-unggulan' },
  { label: 'Asuransi Kebakaran', href: '#produk-unggulan' },
  { label: 'Asuransi Kargo', href: '#produk-unggulan' },
]

const legal = [
  { label: 'Kebijakan Privasi', href: '#' },
  { label: 'Syarat & Ketentuan', href: '#' },
]

const whatsappNumber = '628131556592'
const whatsappDisplay = '0813-1556-592'

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20tentang%20asuransi`, '_blank')
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Dunia Asuransi</span>
                <span className="text-xs text-gray-400 -mt-1">Rio Mardiansyah</span>
              </div>
            </a>
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
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href={product.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Rio</h3>
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
                    href="mailto:info@duniaasuransi.com"
                    className="text-sm text-white hover:text-primary transition-colors"
                  >
                    info@duniaasuransi.com
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
            © {new Date().getFullYear()} Dunia Asuransi - Rio Mardiansyah. Broker Asuransi Profesional.
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
