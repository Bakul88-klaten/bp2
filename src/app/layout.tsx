import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dunia Asuransi - Broker Asuransi Terpercaya | Rio Mardiansyah | Kendaraan, Kebakaran, Kargo, Kecelakaan",
  description: "Dunia Asuransi adalah layanan broker asuransi profesional oleh Rio Mardiansyah. Menyediakan asuransi kendaraan, asuransi kebakaran, asuransi kargo, dan asuransi kecelakaan dengan pelayanan personal dan proses klaim mudah.",
  keywords: ["Broker Asuransi", "Agen Asuransi", "Asuransi Indonesia", "Asuransi Kendaraan", "Asuransi Kebakaran", "Asuransi Kargo", "Asuransi Kecelakaan", "Rio Mardiansyah", "Dunia Asuransi", "Klaim Cepat"],
  authors: [{ name: "Rio Mardiansyah" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Dunia Asuransi - Broker Asuransi Terpercaya by Rio Mardiansyah",
    description: "Solusi asuransi personal untuk kendaraan, properti, kargo, dan diri Anda. Konsultasi gratis dengan Rio Mardiansyah.",
    url: "https://duniaasuransi.com",
    siteName: "Dunia Asuransi",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunia Asuransi - Broker Asuransi Terpercaya",
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
