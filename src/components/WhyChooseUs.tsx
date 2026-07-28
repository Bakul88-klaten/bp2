'use client'

import { motion } from 'framer-motion'
import { 
  Clock, 
  HeadphonesIcon, 
  UserCheck, 
  Shield, 
  FileCheck, 
  HeartHandshake
} from 'lucide-react'

const reasons = [
  {
    icon: UserCheck,
    title: 'Layanan Personal',
    description: 'Saya akan mendampingi Anda langsung dari konsultasi hingga proses klaim. Tidak ada robot atau call center, hanya saya yang melayani Anda.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Respon Cepat',
    description: 'Hubungi saya kapan saja via WhatsApp. Saya akan merespon pertanyaan Anda secepat mungkin, biasanya dalam hitungan jam.',
  },
  {
    icon: HeartHandshake,
    title: 'Konsultasi Gratis',
    description: 'Tidak perlu ragu untuk bertanya. Konsultasi awal gratis tanpa komitmen. Saya bantu cari solusi terbaik sesuai kebutuhan dan budget Anda.',
  },
  {
    icon: Shield,
    title: 'Partner Terpercaya',
    description: 'Saya bekerja sama dengan perusahaan asuransi terkemuka di Indonesia untuk memastikan perlindungan terbaik bagi Anda.',
  },
  {
    icon: FileCheck,
    title: 'Bantuan Klaim',
    description: 'Ketika terjadi risiko, saya akan membantu proses klaim Anda dari awal hingga dana cair. Tidak perlu repot mengurus sendiri.',
  },
  {
    icon: Clock,
    title: 'Proses Mudah',
    description: 'Semua proses administrasi dibantu dan dijelaskan dengan detail. Tidak ada istilah ribet atau membingungkan.',
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

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Mengapa Memilih Saya
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pelayanan Personal untuk{' '}
              <span className="text-primary">Perlindungan Anda</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              Sebagai agen asuransi, saya memahami bahwa setiap klien memiliki kebutuhan yang berbeda. 
              Saya berkomitmen memberikan layanan terbaik dengan pendekatan yang personal dan profesional.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="p-4 bg-primary/5 rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="p-4 bg-primary/5 rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">Fast</div>
                <div className="text-sm text-muted-foreground">Respon WhatsApp</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="p-4 bg-primary/5 rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">Gratis</div>
                <div className="text-sm text-muted-foreground">Konsultasi</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="p-4 bg-primary/5 rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">Full</div>
                <div className="text-sm text-muted-foreground">Bantuan Klaim</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Benefits Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-5 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
