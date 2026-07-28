'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Pemilik Bisnis',
    location: 'Jakarta',
    content: 'Pak Rio sangat membantu saya memilih asuransi kendaraan yang tepat untuk armada bisnis saya. Pelayanan personal dan sangat responsif. Klaim juga dibantu sampai selesai!',
    rating: 5,
    initials: 'BS',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    role: 'Ibu Rumah Tangga',
    location: 'Bandung',
    content: 'Senang bisa konsultasi langsung dengan Pak Rio. Penjelasannya sangat mudah dipahami dan tidak ada tekanan untuk langsung beli. Highly recommended!',
    rating: 5,
    initials: 'SR',
  },
  {
    id: 3,
    name: 'Ahmad Wijaya',
    role: 'Pengusaha Logistik',
    location: 'Surabaya',
    content: 'Sebagai pemilik usaha logistik, asuransi kargo sangat penting. Pak Rio membantu mencari polis yang sesuai dengan kebutuhan bisnis saya dengan premi yang kompetitif.',
    rating: 5,
    initials: 'AW',
  },
  {
    id: 4,
    name: 'Dewi Kusuma',
    role: 'Karyawan Swasta',
    location: 'Medan',
    content: 'Proses klaim asuransi kecelakaan saya dibantu langsung oleh Pak Rio dari awal sampai dana cair. Sangat profesional dan bertanggung jawab!',
    rating: 5,
    initials: 'DK',
  },
  {
    id: 5,
    name: 'Rudi Hartono',
    role: 'Dokter',
    location: 'Yogyakarta',
    content: 'Saya sudah merekomendasikan Dunia Asuransi ke keluarga dan teman-teman. Pelayanan dari Pak Rio sangat memuaskan dan selalu siap membantu kapan saja.',
    rating: 5,
    initials: 'RH',
  },
  {
    id: 6,
    name: 'Linda Permata',
    role: 'Wiraswasta',
    location: 'Semarang',
    content: 'Pengalaman yang luar biasa! Pak Rio sabar menjelaskan semua detail polis tanpa ada biaya tersembunyi. Semuanya transparan dan profesional.',
    rating: 5,
    initials: 'LP',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 md:py-24 bg-gray-50">
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
            Testimoni
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Apa Kata{' '}
            <span className="text-primary">Klien Saya</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Dengarkan pengalaman langsung dari klien yang telah mempercayakan 
            perlindungan mereka melalui Dunia Asuransi.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="w-12 h-12 bg-primary/10">
                      <AvatarFallback className="text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-full shadow-md">
            <div className="flex -space-x-2">
              {['BS', 'SR', 'AW', 'DK'].map((initials, i) => (
                <Avatar key={i} className="w-8 h-8 border-2 border-white bg-primary/10">
                  <AvatarFallback className="text-xs text-primary">{initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">100+ klien</span> telah mempercayakan perlindungan mereka
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
