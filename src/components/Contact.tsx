'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send,
  Loader2,
  CheckCircle 
} from 'lucide-react'

const whatsappNumber = '628131556592'
const whatsappDisplay = '0813-1556-592'

const contactInfo = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: whatsappDisplay,
    subContent: 'Chat langsung dengan Rio',
    action: `https://wa.me/${whatsappNumber}?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20tentang%20asuransi`,
  },
  {
    icon: Phone,
    title: 'Telepon',
    content: whatsappDisplay,
    subContent: 'Senin - Sabtu, 08:00 - 20:00',
    action: `tel:+${whatsappNumber}`,
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@duniaasuransi.com',
    subContent: 'Respon dalam 24 jam',
    action: 'mailto:info@duniaasuransi.com',
  },
  {
    icon: Clock,
    title: 'Jam Layanan',
    content: 'Senin - Sabtu',
    subContent: '08:00 - 20:00 WIB',
    action: null,
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    pesan: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ nama: '', email: '', telepon: '', pesan: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppDirect = () => {
    const message = `Halo Rio, saya ingin konsultasi tentang asuransi.\n\nNama: ${formData.nama || '-'}\nEmail: ${formData.email || '-'}\nTelepon: ${formData.telepon || '-'}\nPesan: ${formData.pesan || '-'}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="kontak" className="py-16 md:py-24 bg-white">
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
            Hubungi Saya
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Siap Membantu{' '}
            <span className="text-primary">Kebutuhan Anda</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Punya pertanyaan atau ingin berkonsultasi? Saya siap membantu 
            Anda menemukan solusi asuransi yang tepat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action} 
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.content}</p>
                      )}
                      <p className="text-xs text-muted-foreground">{info.subContent}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick CTA */}
            <div className="p-5 bg-green-500 rounded-xl text-white mt-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </h3>
              <p className="text-sm text-white/90 mb-4">
                Cara tercepat untuk menghubungi saya. Biasanya respon dalam hitungan jam!
              </p>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-green-600 hover:bg-white/90"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20tentang%20asuransi`, '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat Sekarang
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Terima kasih telah menghubungi. Saya akan segera merespon 
                      pesan Anda melalui WhatsApp atau email.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/5"
                      >
                        Kirim Pesan Lain
                      </Button>
                      <Button
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Halo%20Rio,%20saya%20ingin%20konsultasi%20tentang%20asuransi`, '_blank')}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat WhatsApp
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nama">Nama Lengkap *</Label>
                        <Input
                          id="nama"
                          name="nama"
                          placeholder="Masukkan nama lengkap"
                          value={formData.nama}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="contoh@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telepon">Nomor WhatsApp/Telepon *</Label>
                      <Input
                        id="telepon"
                        name="telepon"
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={formData.telepon}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pesan">Pesan *</Label>
                      <Textarea
                        id="pesan"
                        name="pesan"
                        placeholder="Tuliskan pertanyaan atau kebutuhan asuransi Anda..."
                        value={formData.pesan}
                        onChange={handleChange}
                        required
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Kirim Pesan
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                        onClick={handleWhatsAppDirect}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Langsung ke WhatsApp
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      Dengan mengirim pesan, Anda menyetujui untuk dihubungi oleh Rio Mardiansyah.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
