import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nama, email, telepon, pesan } = body

    // Validate required fields
    if (!nama || !email || !telepon || !pesan) {
      return NextResponse.json(
        { success: false, message: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    // Endpoint ini sengaja hanya mencatat submission (belum ada database
    // atau email service terhubung). Pengiriman lead yang sebenarnya
    // dilakukan oleh client lewat redirect ke WhatsApp (lihat Contact.tsx),
    // jadi endpoint ini tidak menjadi satu-satunya jalur pesan.
    // TODO: sambungkan ke database/email/WhatsApp Business API jika ingin
    // menyimpan histori lead di luar WhatsApp.
    console.log('Contact form submission:', { nama, email, telepon, pesan })

    return NextResponse.json(
      { success: true, message: 'Pesan berhasil dikirim' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}
