import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vikendica M&L | Vikendica na Sani",
  description: "Vikendica M&L nudi idiličan odmor na obali rijeke Sane u Gaćanima, nedaleko od Prijedora.",
  openGraph: {
    title: "Vikendica M&L | Vikendica na Sani",
    description:
      "Vikendica M&L nudi idiličan odmor na obali rijeke Sane u Gaćanima, nedaleko od Prijedora",
    type: "article",
    url: "https://vikendica.vercel.app/",
    images: [
      {
        url: "https://vikendica.vercel.app/logo-ml.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikendica M&L | Vikendica na Sani",
    description:
      "Vikendica M&L nudi idiličan odmor na obali rijeke Sane u Gaćanima, nedaleko od Prijedora",
    images: [
      "https://vikendica.vercel.app/logo-ml.svg",
    ],
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
