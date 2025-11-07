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
  description: 'Senior AI Research Engineer at Livepeer, core developer on Scope researching autoregressive video models, creator of ComfyUI tools, and founder of MouthBreather',
  keywords: ['ComfyUI', 'ML pipelines', 'AI tools', 'diffusion models', 'autoregressive video models', 'real-time control', 'Livepeer', 'Scope', 'StreamDiffusion', 'open source', 'music', 'art'],
  authors: [{ name: 'RyanOnTheInside' }],
  openGraph: {
    title: 'RyanOnTheInside',
    description: 'Senior AI Research Engineer at Livepeer, core developer on Scope researching autoregressive video models, creator of ComfyUI tools, and founder of MouthBreather',
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
    description: 'Senior AI Research Engineer at Livepeer, core developer on Scope researching autoregressive video models, creator of ComfyUI tools, and founder of MouthBreather',
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
        <div className="pt-20 md:pt-16">
          {children}
        </div>
        <div className="fixed inset-0 opacity-5 pointer-events-none z-[-1]" 
             style={{ 
               backgroundImage: `url('/circuit-bg.svg')`, 
               backgroundSize: '400px',
               backgroundRepeat: 'repeat'
             }}>
        </div>
      </body>
    </html>
  )
}
