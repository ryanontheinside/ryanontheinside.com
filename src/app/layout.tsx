import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import AIContext from '@/components/AIContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RyanOnTheInside',
  description: 'Applied AI Researcher at Daydream and Pod Lead for Daydream Scope. Lead author of DEMON, a real-time streaming diffusion engine for music generation. Researching real-time generative diffusion for video and music. Creator of ComfyUI tools.',
  keywords: ['DEMON', 'streaming diffusion', 'real-time music generation', 'ACE-Step', 'ComfyUI', 'ML pipelines', 'AI tools', 'diffusion models', 'autoregressive video models', 'real-time control', 'TensorRT', 'Livepeer', 'Daydream', 'Scope', 'StreamDiffusion', 'open source', 'music', 'art'],
  authors: [{ name: 'RyanOnTheInside' }],
  openGraph: {
    title: 'RyanOnTheInside',
    description: 'Applied AI Researcher at Daydream and Pod Lead for Daydream Scope. Lead author of DEMON, a real-time streaming diffusion engine for music generation. Researching real-time generative diffusion for video and music. Creator of ComfyUI tools.',
    url: 'https://ryanontheinside.com',
    siteName: 'RyanOnTheInside',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/logo.svg',
      width: 200,
      height: 200,
      alt: 'RyanOnTheInside'
    }],
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'add-your-verification-code-here',
    'last-modified': new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RyanOnTheInside',
    description: 'Applied AI Researcher at Daydream and Pod Lead for Daydream Scope. Lead author of DEMON, a real-time streaming diffusion engine for music generation. Researching real-time generative diffusion for video and music. Creator of ComfyUI tools.',
    creator: '@ryanontheinside',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
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
      <body className={`${robotoMono.variable} ${inter.variable} min-h-screen bg-background`}>
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
