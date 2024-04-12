import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://vikendica.vercel.app/'),
  title: "Vikendica M&L | Vikendica na Sani",
  description: "Vikendica M&L nudi idiličan odmor na obali rijeke Sane u Gaćanima, nedaleko od Prijedora.",
  openGraph: {
    title: "Vikendica M&L | Vikendica na Sani",
    description:
      "Vikendica M&L nudi idiličan odmor na obali rijeke Sane u Gaćanima, nedaleko od Prijedora",
    url: "https://vikendica.vercel.app/",
    images: 'https://vikendica.vercel.app/logo-ml.png',
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikendica M&L | Vikendica na Sani",
    description:
      "Vikendica M&L nudi idiličan odmor na obali rijeke Sane u Gaćanima, nedaleko od Prijedora",
    images: "https://vikendica.vercel.app/logo-ml.png",
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
    </>
  )
}
