'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

const whatsappNumber = '6287781658231'
const whatsappDisplay = '0877-8165-8231'

export default function CTABanner({
  heading,
  subheading,
  waMessage,
}: {
  heading: string
  subheading: string
  waMessage: string
}) {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`, '_blank')
  }

  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-56 h-56 bg-white/10 rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-white/5 rounded-full" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            {heading}
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
            {subheading}
          </p>
          <div className="flex flex-col items-center justify-center gap-3">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto px-8"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Konsultasi Gratis via WhatsApp
            </Button>
            <button
              onClick={handleWhatsApp}
              className="text-white/80 hover:text-white text-sm font-medium underline-offset-4 hover:underline"
            >
              atau chat langsung ke {whatsappDisplay}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
