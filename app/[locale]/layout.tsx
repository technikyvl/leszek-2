import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import "../globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Foto Express Leszek Jakieła - Racibórz",
  description: "Profesjonalne zdjęcia do dokumentów i sesje fotograficzne w Raciborzu. Studio tuż obok urzędu. Ponad 10 lat doświadczenia, sprzęt Profoto, laureat Orłów Fotografii. Gotowe w 15 minut!",
  keywords: ["zdjęcia do dokumentów", "fotograf Racibórz", "zdjęcia paszportowe", "zdjęcia do dowodu", "sesje fotograficzne", "fotograf Leszek Jakieła", "studio fotograficzne Racibórz"],
  authors: [{ name: "Leszek Jakieła" }],
  creator: "Leszek Jakieła",
  publisher: "Foto Express Leszek Jakieła",
  openGraph: {
    title: "Foto Express Leszek Jakieła - Racibórz",
    description: "Profesjonalne zdjęcia do dokumentów i sesje fotograficzne w Raciborzu. Studio tuż obok urzędu.",
    url: "https://fotografia-raciborz.pl",
    siteName: "Foto Express Leszek Jakieła",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foto Express Leszek Jakieła - Racibórz",
    description: "Profesjonalne zdjęcia do dokumentów i sesje fotograficzne w Raciborzu.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  // Await params in Next.js 14+
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans" style={{ margin: 0, padding: 0, backgroundColor: '#ffffff', color: '#000000' }}>
          {children}
        <Analytics />
      </body>
    </html>
  )
}
