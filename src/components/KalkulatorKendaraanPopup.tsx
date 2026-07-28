'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calculator, RefreshCw, MessageCircle, CheckCircle, Info, X } from 'lucide-react'

const whatsappNumber = '628131556592'

interface KalkulatorKendaraanPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function KalkulatorKendaraanPopup({ isOpen, onClose }: KalkulatorKendaraanPopupProps) {
  const [hasil, setHasil] = useState<{
    premi: number
    harga: number
    tahun: number
    zona: string
    jenis: string
    jaminan: string
    rate: number
  } | null>(null)
  
  const [formData, setFormData] = useState({
    harga: '',
    tahun: '',
    zona: '',
    jenis: '',
    jaminan: ''
  })

  function hitung(e: React.FormEvent) {
    e.preventDefault()
    
    const harga = parseFloat(formData.harga)
    const tahun = parseInt(formData.tahun)
    const zona = formData.zona
    const jenisKendaraan = formData.jenis
    let jaminan = formData.jaminan

    if (!harga || !tahun || !zona || !jenisKendaraan || !jaminan) {
      alert('Mohon lengkapi semua data!')
      return
    }

    // Rate All Risk berdasarkan zona dan tahun kendaraan
    const rateAllRisk = {
      zona1: { 
        mobil: [3.82, 2.67, 2.18, 1.20, 1.05],
        motor: [4.50, 3.50, 2.80, 1.50, 1.20]
      },
      zona2: { 
        mobil: [3.26, 2.47, 2.08, 1.20, 1.05],
        motor: [4.00, 3.00, 2.50, 1.40, 1.10]
      },
      zona3: { 
        mobil: [2.53, 2.30, 1.75, 1.20, 1.05],
        motor: [3.50, 2.80, 2.20, 1.30, 1.00]
      }
    }

    // Rate TLO berdasarkan zona dan tahun kendaraan
    const rateTLO = {
      zona1: { 
        mobil: [0.47, 0.63, 0.41, 0.25, 0.20],
        motor: [0.65, 0.55, 0.45, 0.30, 0.25]
      },
      zona2: { 
        mobil: [0.44, 0.53, 0.35, 0.25, 0.20],
        motor: [0.60, 0.50, 0.40, 0.28, 0.23]
      },
      zona3: { 
        mobil: [0.38, 0.42, 0.29, 0.25, 0.20],
        motor: [0.55, 0.45, 0.35, 0.25, 0.20]
      }
    }

    // Menentukan index berdasarkan tahun kendaraan
    const tahunSekarang = new Date().getFullYear()
    const selisihTahun = tahunSekarang - tahun
    let indexRate = 4 // default untuk > 10 tahun
    
    if (selisihTahun <= 1) indexRate = 0
    else if (selisihTahun <= 3) indexRate = 1
    else if (selisihTahun <= 5) indexRate = 2
    else if (selisihTahun <= 10) indexRate = 3
    else indexRate = 4

    // Menentukan rate berdasarkan jaminan
    let rate = 0
    const zonaKey = zona === '1' ? 'zona1' : zona === '2' ? 'zona2' : 'zona3'
    const jenisKey = jenisKendaraan === 'mobil' ? 'mobil' : 'motor'

    if (jaminan === 'allrisk') {
      rate = rateAllRisk[zonaKey][jenisKey][indexRate]
    } else {
      rate = rateTLO[zonaKey][jenisKey][indexRate]
    }

    // Penyesuaian berdasarkan harga (price bracket)
    if (harga <= 100000000) {
      // Tidak ada penyesuaian
    } else if (harga <= 250000000) {
      rate *= 0.98 // diskon 2%
    } else if (harga <= 500000000) {
      rate *= 0.95 // diskon 5%
    } else {
      rate *= 0.92 // diskon 8%
    }

    // Hitung premi dasar
    let premi = (harga * rate) / 100

    // Minimum premi
    if (jaminan === 'allrisk') {
      premi = Math.max(premi, 250000)
    } else {
      premi = Math.max(premi, 100000)
    }

    setHasil({
      premi: Math.round(premi),
      harga,
      tahun,
      zona,
      jenis: jenisKendaraan,
      jaminan,
      rate: Math.round(rate * 100) / 100
    })
  }

  function reset() {
    setFormData({
      harga: '',
      tahun: '',
      zona: '',
      jenis: '',
      jaminan: ''
    })
    setHasil(null)
  }

  function kirimWA() {
    if (!hasil) return
    
    const zonaText = hasil.zona === '1' ? 'Zona 1 (Jakarta, Jawa Barat)' : 
                     hasil.zona === '2' ? 'Zona 2 (Jawa Tengah, Jawa Timur, Bali)' : 
                     'Zona 3 (Luar Jawa & Bali)'
    const jaminanText = hasil.jaminan === 'allrisk' ? 'All Risk (Comprehensive)' : 'TLO (Total Loss Only)'
    
    const pesan = `Halo Rio, saya tertarik untuk mengasuransikan kendaraan saya dengan detail:

*Tipe:* ${hasil.jenis === 'mobil' ? 'Mobil' : 'Motor'}
*Tahun:* ${hasil.tahun}
*Harga Pertanggungan:* Rp ${hasil.harga.toLocaleString('id-ID')}
*Zona:* ${zonaText}
*Jenis Jaminan:* ${jaminanText}
*Rate:* ${hasil.rate}%

*Estimasi Premi:* Rp ${hasil.premi.toLocaleString('id-ID')}

Mohon informasi lebih lanjut. Terima kasih!`

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pesan)}`, '_blank')
  }

  const formatCurrency = (value: string) => {
    const number = value.replace(/\D/g, '')
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 md:p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Kalkulator Premi Kendaraan</h2>
                <p className="text-blue-100 text-sm">Hitung estimasi premi Anda</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {!hasil ? (
            <form onSubmit={hitung} className="space-y-4">
              {/* Jenis Kendaraan */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Jenis Kendaraan
                </Label>
                <Select value={formData.jenis} onValueChange={(value) => setFormData({...formData, jenis: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis kendaraan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mobil">Mobil</SelectItem>
                    <SelectItem value="motor">Sepeda Motor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Zona */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Zona Wilayah</Label>
                <Select value={formData.zona} onValueChange={(value) => setFormData({...formData, zona: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih zona wilayah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Zona 1 - Jakarta & Jawa Barat</SelectItem>
                    <SelectItem value="2">Zona 2 - Jawa Tengah, Jawa Timur, Bali</SelectItem>
                    <SelectItem value="3">Zona 3 - Luar Jawa & Bali</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tahun Kendaraan */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Tahun Kendaraan</Label>
                <Input
                  type="number"
                  placeholder="Contoh: 2022"
                  value={formData.tahun}
                  onChange={(e) => setFormData({...formData, tahun: e.target.value})}
                  min="1990"
                  max={new Date().getFullYear() + 1}
                />
              </div>

              {/* Harga Pertanggungan */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Harga Pertanggungan (Rp)</Label>
                <Input
                  type="text"
                  placeholder="Contoh: 300.000.000"
                  value={formData.harga ? formatCurrency(formData.harga) : ''}
                  onChange={(e) => setFormData({...formData, harga: e.target.value.replace(/\D/g, '')})}
                />
              </div>

              {/* Jenis Jaminan */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Jenis Jaminan</Label>
                <Select value={formData.jaminan} onValueChange={(value) => setFormData({...formData, jaminan: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis jaminan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allrisk">All Risk (Comprehensive)</SelectItem>
                    <SelectItem value="tlo">TLO (Total Loss Only)</SelectItem>
                  </SelectContent>
                </Select>
                <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-800">
                  {formData.jaminan === 'allrisk' && (
                    <p><strong>All Risk:</strong> Menanggung kerusakan sebagian maupun total akibat kecelakaan, pencurian, dan bencana alam.</p>
                  )}
                  {formData.jaminan === 'tlo' && (
                    <p><strong>TLO:</strong> Hanya menanggung kerusakan total (&gt;75%) atau kehilangan. Premi lebih terjangkau.</p>
                  )}
                  {!formData.jaminan && (
                    <p>Pilih jenis jaminan untuk melihat penjelasan.</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base">
                <Calculator className="w-5 h-5 mr-2" />
                Hitung Premi
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              {/* Result Card */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
                <div className="text-center mb-4">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-green-700 font-medium">Estimasi Premi Anda</p>
                  <p className="text-3xl font-bold text-green-700">
                    Rp {hasil.premi.toLocaleString('id-ID')}
                  </p>
                  <p className="text-sm text-green-600">per tahun</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm border-t border-green-200 pt-4">
                  <div>
                    <p className="text-gray-500">Harga Pertanggungan</p>
                    <p className="font-medium">Rp {hasil.harga.toLocaleString('id-ID')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Rate Premi</p>
                    <p className="font-medium">{hasil.rate}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Jenis</p>
                    <p className="font-medium capitalize">{hasil.jenis}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tahun</p>
                    <p className="font-medium">{hasil.tahun}</p>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800">
                <p>Hasil perhitungan ini adalah estimasi. Premi akhir dapat berbeda berdasarkan survei kondisi kendaraan.</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={reset}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Hitung Ulang
                </Button>
                <Button
                  className="flex-1 bg-green-500 hover:bg-green-600"
                  onClick={kirimWA}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Konsultasi
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
