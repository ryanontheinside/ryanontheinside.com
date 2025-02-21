import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import AIContext from '@/components/AIContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RyanOnTheInside - Tech, Music & Art',
  description: 'Solution Engineer at Livepeer, creator of ComfyUI tools, and founder of MouthBreather',
  keywords: ['ComfyUI', 'ML pipelines', 'AI tools', 'diffusion models', 'Livepeer', 'open source', 'music', 'art'],
  authors: [{ name: 'RyanOnTheInside' }],
  openGraph: {
    title: 'RyanOnTheInside - Tech, Music & Art',
    description: 'Solution Engineer at Livepeer, creator of ComfyUI tools, and founder of MouthBreather',
    url: 'https://ryanontheinside.com',
    siteName: 'RyanOnTheInside',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'RyanOnTheInside - Tech, Music & Art'
    }],
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'add-your-verification-code-here',
    'last-modified': new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RyanOnTheInside - Tech, Music & Art',
    description: 'Solution Engineer at Livepeer, creator of ComfyUI tools, and founder of MouthBreather',
    creator: '@ryanontheinside',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Get this from Google Search Console: https://search.google.com/search-console
    // Add your site, choose 'HTML tag' verification, and copy the content value
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'add-your-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <JsonLd />
        <AIContext />
        <Header />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
