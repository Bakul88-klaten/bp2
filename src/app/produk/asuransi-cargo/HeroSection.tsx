'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Ship, MessageCircle, Anchor, Container, Globe2 } from 'lucide-react'

const whatsappNumber = '6287781658231'

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        'Halo Tono, saya ingin konsultasi tentang Asuransi Cargo untuk pengiriman barang saya.'
      )}`,
      '_blank'
    )
  }

  return (
    <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-br from-cyan-50 via-white to-white overflow-hidden">
      <div className="absolute top-12 right-[10%] w-40 h-40 bg-cyan-100 rounded-full blur-2xl opacity-70 -z-0" />
      <div className="absolute bottom-0 left-[6%] w-56 h-56 bg-cyan-50 rounded-full blur-3xl opacity-70 -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full text-sm font-medium text-cyan-700 mb-5">
              <Ship className="w-4 h-4" />
              Asuransi Cargo Laut, Udara & Darat
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Kawal Barang Kiriman Anda dari dan ke Batam
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Sebagai kawasan perdagangan bebas dengan arus ekspor-impor padat, barang Anda
              melewati banyak titik risiko sejak keluar gudang hingga sampai tujuan. Tono bantu
              memastikan setiap pengiriman tetap terlindungi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-xl border border-cyan-100 p-8 md:p-10">
              <div className="w-20 h-20 bg-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Container className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-cyan-50 rounded-xl">
                  <Anchor className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    Batu Ampar, Kabil, Sekupang & Batam Center
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-cyan-50 rounded-xl">
                  <Globe2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <span className="text-sm text-foreground">Domestik maupun rute Singapura & Malaysia</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-cyan-50 rounded-xl">
                  <Ship className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <span className="text-sm text-foreground">Cocok untuk UKM hingga eksportir besar</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-100 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
