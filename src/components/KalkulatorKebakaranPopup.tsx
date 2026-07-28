'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calculator, RefreshCw, MessageCircle, CheckCircle, X, Flame } from 'lucide-react'

const whatsappNumber = '628131556592'

interface KalkulatorKebakaranPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function KalkulatorKebakaranPopup({ isOpen, onClose }: KalkulatorKebakaranPopupProps) {
  const [hasil, setHasil] = useState<{
    premi: number
    bangunan: number
    isi: number
    totalPertanggungan: number
    perluasan: string[]
  } | null>(null)
  
  const [formData, setFormData] = useState({
    bangunan: '',
    isi: '',
    banjir: false,
    gempa: false,
    srcc: false
  })

  function hitung(e: React.FormEvent) {
    e.preventDefault()

    const bangunan = parseFloat(formData.bangunan) || 0
    const isi = parseFloat(formData.isi) || 0
    const perluasanBanjir = formData.banjir
    const perluasanGempa = formData.gempa
    const perluasanSRCC = formData.srcc

    const totalPertanggungan = bangunan + isi

    if (totalPertanggungan === 0) {
      alert('Mohon masukkan nilai bangunan atau isi bangunan!')
      return
    }

    let rate = 0.001 // 0.10% standar rumah tinggal
    let premi = totalPertanggungan * rate

    const perluasan: string[] = []

    if (perluasanBanjir) {
      premi += totalPertanggungan * 0.0003 // 0.03%
      perluasan.push('Banjir')
    }

    if (perluasanGempa) {
      premi += totalPertanggungan * 0.0005 // 0.05%
      perluasan.push('Gempa Bumi')
    }

    if (perluasanSRCC) {
      premi += totalPertanggungan * 0.0002 // 0.02%
      perluasan.push('SRCC')
    }

    // Minimum premi
    premi = Math.max(premi, 100000)

    setHasil({
      premi: Math.round(premi),
      bangunan,
      isi,
      totalPertanggungan,
      perluasan
    })
  }

  function reset() {
    setFormData({
      bangunan: '',
      isi: '',
      banjir: false,
      gempa: false,
      srcc: false
    })
    setHasil(null)
  }

  function kirimWA() {
    if (!hasil) return
    
    const perluasanText = hasil.perluasan.length > 0 
      ? hasil.perluasan.join(', ') 
      : 'Tidak ada'

    const pesan = `Halo Rio, saya tertarik untuk mengasuransikan properti saya dengan detail:

*Nilai Bangunan:* Rp ${hasil.bangunan.toLocaleString('id-ID')}
*Nilai Isi Bangunan:* Rp ${hasil.isi.toLocaleString('id-ID')}
*Total Pertanggungan:* Rp ${hasil.totalPertanggungan.toLocaleString('id-ID')}
*Perluasan:* ${perluasanText}

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
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 md:p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Kalkulator Premi Kebakaran</h2>
                <p className="text-orange-100 text-sm">Hitung estimasi premi Anda</p>
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
              {/* Nilai Bangunan */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Nilai Bangunan (Rp)</Label>
                <Input
                  type="text"
                  placeholder="Contoh: 500.000.000"
                  value={formData.bangunan ? formatCurrency(formData.bangunan) : ''}
                  onChange={(e) => setFormData({...formData, bangunan: e.target.value.replace(/\D/g, '')})}
                />
                <p className="text-xs text-gray-500">Masukkan nilai penggantian bangunan</p>
              </div>

              {/* Nilai Isi Bangunan */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Nilai Isi Bangunan (Rp) - Opsional</Label>
                <Input
                  type="text"
                  placeholder="Contoh: 100.000.000"
                  value={formData.isi ? formatCurrency(formData.isi) : ''}
                  onChange={(e) => setFormData({...formData, isi: e.target.value.replace(/\D/g, '')})}
                />
                <p className="text-xs text-gray-500">Furnitur, peralatan elektronik, dll</p>
              </div>

              {/* Perluasan */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Perluasan Jaminan</Label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={formData.banjir}
                      onChange={(e) => setFormData({...formData, banjir: e.target.checked})}
                      className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Perluasan Banjir</p>
                      <p className="text-xs text-gray-500">Rate tambahan: 0.03%</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={formData.gempa}
                      onChange={(e) => setFormData({...formData, gempa: e.target.checked})}
                      className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Perluasan Gempa Bumi</p>
                      <p className="text-xs text-gray-500">Rate tambahan: 0.05%</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={formData.srcc}
                      onChange={(e) => setFormData({...formData, srcc: e.target.checked})}
                      className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Perluasan SRCC (Kerusuhan)</p>
                      <p className="text-xs text-gray-500">Rate tambahan: 0.02%</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Info Rate */}
              <div className="bg-orange-50 p-3 rounded-lg text-xs text-orange-800">
                <p><strong>Rate Dasar:</strong> 0.10% per tahun untuk rumah tinggal</p>
                <p className="mt-1">Premi minimum: Rp 100.000</p>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 h-12 text-base">
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
                    <p className="text-gray-500">Nilai Bangunan</p>
                    <p className="font-medium">Rp {hasil.bangunan.toLocaleString('id-ID')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Nilai Isi</p>
                    <p className="font-medium">Rp {hasil.isi.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Total Pertanggungan</p>
                    <p className="font-medium">Rp {hasil.totalPertanggungan.toLocaleString('id-ID')}</p>
                  </div>
                  {hasil.perluasan.length > 0 && (
                    <div className="col-span-2">
                      <p className="text-gray-500">Perluasan</p>
                      <p className="font-medium">{hasil.perluasan.join(', ')}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800">
                <p>Hasil perhitungan ini adalah estimasi. Premi akhir dapat berbeda berdasarkan survei lokasi dan kondisi bangunan.</p>
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
