import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'QuickestVisa - Vize & Seyahat Danışmanlığı',
  description: 'Profesyonel vize ve seyahat danışmanlığı hizmetleri. Yüzlerce ülkeye vize, oturum ve çalışma izni seçeneklerini tek tıkla inceleyin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
