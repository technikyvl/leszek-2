import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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
  title: "Leszek Jakiela - Photographer",
  description: "Polish photographer from Raciborz - Portfolio",
  generator: "v0.app",
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

  // Load messages for the locale
  let messages = {};
  try {
    const loadedMessages = await getMessages({ locale });
    messages = loadedMessages || {};
  } catch (error) {
    console.error('Error loading messages:', error);
    // Try to load default messages as fallback
    try {
      messages = (await import(`../messages/${locale}.json`)).default || {};
    } catch (fallbackError) {
      console.error('Fallback message loading failed:', fallbackError);
      messages = {};
    }
  }
  
  // Ensure messages is always an object
  if (!messages || typeof messages !== 'object') {
    messages = {};
  }

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans" style={{ margin: 0, padding: 0, backgroundColor: '#ffffff', color: '#000000' }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
