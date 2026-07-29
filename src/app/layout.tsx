import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Batam Proteksi - Mitra Asuransi Terpercaya di Batam | Tono | Kendaraan, Kebakaran, Kargo, Kecelakaan",
  description: "Batam Proteksi adalah layanan Mitra asuransi profesional oleh Tono. Menyediakan asuransi kendaraan, asuransi kebakaran, asuransi kargo, dan asuransi kecelakaan dengan pelayanan personal dan proses klaim mudah.",
  keywords: ["Mitra Asuransi", "Agen Asuransi", "Asuransi Indonesia", "Asuransi Kendaraan", "Asuransi Kebakaran", "Asuransi Kargo", "Asuransi Kecelakaan", "Tono", "Batam Proteksi", "Klaim Cepat"],
  authors: [{ name: "Tono" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Batam Proteksi - Mitra Asuransi Terpercaya by Tono",
    description: "Solusi asuransi personal untuk kendaraan, properti, kargo, dan diri Anda. Konsultasi gratis dengan Tono.",
    url: "https://batamproteksi.biz.id",
    siteName: "Batam Proteksi",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Batam Proteksi - Mitra Asuransi Terpercaya",
    description: "Solusi asuransi personal untuk kendaraan, properti, kargo, dan diri Anda.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
