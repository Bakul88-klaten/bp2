'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const benefits = [
  'Konsultasi gratis tanpa komitmen',
  'Pelayanan personal langsung dari Rio',
  'Bantuan proses klaim hingga selesai',
]

const whatsappNumber = '628131556592'

export default function Hero() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20tentang%20asuransi`, '_blank')
  }

  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 z-10" />
        <Image
          src="/hero-image.png"
          alt="Konsultasi Asuransi Profesional"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6"
            >
              <span className="text-sm font-medium text-primary">
                Broker Asuransi Profesional
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6"
            >
              Halo, Saya{' '}
              <span className="text-primary">Rio Mardiansyah</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Sebagai mitra asuransi Anda, saya siap membantu menemukan perlindungan terbaik 
              untuk kendaraan, properti, bisnis, dan diri Anda. Dapatkan konsultasi gratis 
              dan layanan personal yang Anda butuhkan.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-3 mb-6 md:mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base md:text-lg px-6 md:px-8" onClick={handleWhatsApp}>
                Konsultasi via WhatsApp
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 border-primary/20 hover:bg-primary/5" onClick={handleWhatsApp}>
                <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                0813-1556-592
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary/10"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">100+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Klien Puas</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">5+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">4</div>
                <div className="text-xs md:text-sm text-muted-foreground">Produk Asuransi</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Card for larger screens */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -rotate-3" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-primary/10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Produk Asuransi Tersedia</h3>
                  <p className="text-muted-foreground">
                    Saya menyediakan berbagai pilihan asuransi untuk kebutuhan Anda
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">🚗 Asuransi Kendaraan</span>
                    <span className="text-sm text-primary font-semibold">Tersedia</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">🔥 Asuransi Kebakaran</span>
                    <span className="text-sm text-primary font-semibold">Tersedia</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">🚢 Asuransi Kargo</span>
                    <span className="text-sm text-primary font-semibold">Tersedia</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">🛡️ Asuransi Kecelakaan</span>
                    <span className="text-sm text-primary font-semibold">Tersedia</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800 text-center font-medium">
                    ✅ Konsultasi Gratis via WhatsApp!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
