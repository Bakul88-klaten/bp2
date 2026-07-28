'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  Heart, 
  Award,
  ArrowRight,
  User,
  MessageCircle
} from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Visi Saya',
    description: 'Menjadi mitra asuransi terpercaya yang membantu setiap klien mendapatkan perlindungan terbaik sesuai kebutuhan dan kemampuan finansial mereka.',
  },
  {
    icon: Heart,
    title: 'Misi Saya',
    description: 'Memberikan pelayanan personal, transparan, dan profesional. Saya ingin setiap klien merasa didampingi dan dipahami kebutuhan asuransinya.',
  },
  {
    icon: Award,
    title: 'Komitmen',
    description: 'Saya berkomitmen untuk selalu siap membantu, memberikan informasi jujur, dan mendampingi klien hingga proses klaim selesai.',
  },
]

const whatsappNumber = '628131556592'

export default function About() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20tentang%20asuransi`, '_blank')
  }

  return (
    <section id="tentang" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            Tentang Saya
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Kenali{' '}
            <span className="text-primary">Rio Mardiansyah</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Mitra asuransi Anda yang siap membantu memberikan solusi perlindungan terbaik 
            untuk diri, keluarga, dan bisnis Anda.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-primary/10">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Rio Mardiansyah</h3>
                  <p className="text-primary font-medium">Broker Asuransi Profesional</p>
                  <p className="text-sm text-muted-foreground">Dunia Asuransi</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Saya adalah agen asuransi yang berdedikasi untuk membantu Anda menemukan 
                perlindungan yang tepat. Dengan pengalaman di industri asuransi, saya 
                memahami bahwa setiap orang memiliki kebutuhan yang unik. Itulah mengapa 
                saya memberikan layanan personal untuk setiap klien.
              </p>

              {/* Key Points */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Konsultasi gratis via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Bekerja sama dengan asuransi terkemuka</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Pendampingan hingga proses klaim selesai</span>
                </div>
              </div>

              {/* Contact CTA */}
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi Saya via WhatsApp
              </Button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full -z-10" />
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-primary/5"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Additional CTA */}
            <div className="pt-4">
              <p className="text-muted-foreground text-sm mb-4">
                Punya pertanyaan tentang produk asuransi? Jangan ragu untuk menghubungi saya.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleWhatsApp}>
                Mulai Konsultasi
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Klien Terlayani</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">4</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Jenis Produk</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Tersedia via WA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
