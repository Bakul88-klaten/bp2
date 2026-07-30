'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Building2, MessageCircle, ShieldCheck, Flame, Home } from 'lucide-react'

const whatsappNumber = '6287781658231'

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        'Halo Tono, saya ingin konsultasi tentang Asuransi Properti untuk properti saya di Batam.'
      )}`,
      '_blank'
    )
  }

  return (
    <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-br from-orange-50 via-white to-white overflow-hidden">
      <div className="absolute top-10 right-[8%] w-40 h-40 bg-orange-100 rounded-full blur-2xl opacity-70 -z-0" />
      <div className="absolute bottom-0 left-[5%] w-56 h-56 bg-orange-50 rounded-full blur-3xl opacity-70 -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-700 mb-5">
              <Building2 className="w-4 h-4" />
              Asuransi Properti &amp; Kebakaran
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Lindungi Rumah, Ruko, dan Gudang Anda di Batam
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Satu insiden kebakaran atau bencana bisa menghapus aset yang dibangun bertahun-tahun.
              Tono membantu Anda memilih polis properti yang sesuai risiko nyata di lapangan —
              bukan sekadar dokumen standar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
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
            <div className="relative bg-white rounded-3xl shadow-xl border border-orange-100 p-8 md:p-10">
              <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Flame className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-sm text-foreground">Klaim didampingi hingga tuntas</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                  <Home className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    Berlaku untuk rumah, ruko, gudang &amp; pabrik
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                  <Building2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-sm text-foreground">Premi disesuaikan kebutuhan Anda</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-100 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
