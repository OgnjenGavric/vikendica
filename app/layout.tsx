import type { Metadata } from 'next';

import './globals.css'
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Vikendica M&L | Vikendica na Sani',
  description: 'Vikendica "M&L" nudi idiličan odmor na obali rijeke Sane u Gaćanima, nedaleko od Prijedora.',
  openGraph: {
    title: 'Vikendica M&L | Vikendica na Sani',
    description: 'Vikendica "M&L" nudi idiličan odmor na obali rijeke Sane u Gaćanima, nedaleko od Prijedora.',
  }
}

export const openGraphImage = { images: ['/logo-ml.svg'] }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr-RS" className='scroll-smooth'>
      <body>
        <Nav />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
