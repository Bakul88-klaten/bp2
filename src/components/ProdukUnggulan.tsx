'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Car, 
  Flame, 
  Ship, 
  ArrowRight,
  CheckCircle,
  Calculator
} from 'lucide-react'
import KalkulatorKendaraanPopup from './KalkulatorKendaraanPopup'
import KalkulatorKebakaranPopup from './KalkulatorKebakaranPopup'
import { produkKategori, warnaClass } from '@/lib/produk-data'

const products = [
  {
    id: 'kendaraan',
    title: 'Asuransi Kendaraan',
    description: 'Perlindungan komprehensif untuk mobil dan sepeda motor Anda dari risiko kecelakaan, pencurian, dan kerusakan.',
    icon: Car,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    shadowColor: 'shadow-blue-300/60',
    features: [
      'Kerusakan akibat kecelakaan',
      'Pencurian dan perampokan',
      'Kerusakan akibat bencana alam',
      'Pilihan All Risk atau TLO',
    ],
    hasCalculator: true,
    detailHref: '/produk/asuransi-kendaraan',
  },
  {
    id: 'kebakaran',
    title: 'Asuransi Kebakaran',
    description: 'Proteksi properti dan bangunan Anda dari risiko kebakaran, petir, dan berbagai risiko lainnya.',
    icon: Flame,
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    shadowColor: 'shadow-orange-300/60',
    features: [
      'Kerusakan akibat kebakaran',
      'Kerusakan akibat petir',
      'Perluasan banjir & gempa',
      'Perlindungan isi bangunan',
    ],
    hasCalculator: true,
    detailHref: '/produk/asuransi-properti',
  },
  {
    id: 'kargo',
    title: 'Asuransi Kargo',
    description: 'Perlindungan barang kiriman dan logistik Anda selama perjalanan darat, laut, maupun udara.',
    icon: Ship,
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-200',
    shadowColor: 'shadow-cyan-300/60',
    features: [
      'Pengiriman via laut (Marine Cargo)',
      'Pengiriman via udara (Air Cargo)',
      'Pengiriman via darat (Land Cargo)',
      'Perlindungan door-to-door',
    ],
    hasCalculator: false,
    extraInfo: 'Asuransi kargo melindungi barang dari risiko kerusakan, kehilangan, atau kerusakan selama proses pengiriman baik melalui laut, udara, maupun darat. Hubungi kami untuk informasi lebih lanjut.',
    detailHref: '/produk/asuransi-cargo',
  },
]

// Kategori batch 2 yang belum punya kartu detail di beranda — ditampilkan ringkas di section "Produk Lainnya"
const slugSudahDetail = new Set(products.map((p) => p.detailHref.split('/').pop()))
const produkLainnya = produkKategori.filter((p) => !slugSudahDetail.has(p.slug))

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

export default function ProdukUnggulan() {
  const [openKendaraan, setOpenKendaraan] = useState(false)
  const [openKebakaran, setOpenKebakaran] = useState(false)

  const handleCalculatorOpen = (productId: string) => {
    if (productId === 'kendaraan') {
      setOpenKendaraan(true)
    } else if (productId === 'kebakaran') {
      setOpenKebakaran(true)
    }
  }

  return (
    <>
      <section id="produk-unggulan" className="py-16 md:py-24 bg-white">
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
              Produk Unggulan
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pilih Perlindungan{' '}
              <span className="text-primary">Terbaik Anda</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Tiga produk asuransi unggulan untuk melindungi kendaraan, properti, dan barang berharga Anda.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className={`h-full hover:shadow-2xl transition-all duration-300 border-2 ${product.borderColor} shadow-xl ${product.shadowColor} group`}>
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <product.icon className={`w-7 h-7 ${product.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Extra Info for Kargo */}
                    {product.extraInfo && (
                      <div className="bg-gray-50 p-3 rounded-lg mb-4 text-xs text-gray-600">
                        {product.extraInfo}
                      </div>
                    )}

                    {/* CTA Button */}
                    {product.hasCalculator ? (
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 group/btn"
                        onClick={() => handleCalculatorOpen(product.id)}
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Hitung Premi Anda
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    ) : (
                      <Button 
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/5"
                        onClick={() => window.open('https://wa.me/6287781658231?text=Halo%20Tono,%20saya%20tertarik%20dengan%20Asuransi%20Kargo.%20Mohon%20informasi%20lebih%20lanjut.', '_blank')}
                      >
                        Konsultasi via WhatsApp
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}

                    <Link
                      href={product.detailHref}
                      className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Lihat Detail Lengkap
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Produk Lainnya - kategori batch 2 */}
          {produkLainnya.length > 0 && (
            <div className="mt-16 md:mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                  Produk Lainnya
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Lengkapi Proteksi Usaha Anda
                </h3>
              </motion.div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              >
                {produkLainnya.map((p) => {
                  const c = warnaClass[p.warna]
                  return (
                    <motion.div key={p.slug} variants={itemVariants} className="h-full">
                      <Link href={`/produk/${p.slug}`} className="group block h-full">
                        <div
                          className={`relative h-full overflow-hidden rounded-3xl bg-white border-2 ${c.border} p-7 shadow-xl ${c.shadow} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
                        >
                          <div
                            className={`absolute -top-8 -left-8 w-28 h-28 ${c.bg} rounded-full blur-xl opacity-80`}
                          />
                          <div className="relative z-10">
                            <div
                              className={`w-16 h-16 ${c.solid} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <p.icon className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{p.nama}</h4>
                            <span className={`inline-flex items-center gap-1 text-sm font-semibold ${c.text}`}>
                              Lihat Detail
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Popups */}
      <KalkulatorKendaraanPopup 
        isOpen={openKendaraan} 
        onClose={() => setOpenKendaraan(false)} 
      />
      <KalkulatorKebakaranPopup 
        isOpen={openKebakaran} 
        onClose={() => setOpenKebakaran(false)} 
      />
    </>
  )
}
