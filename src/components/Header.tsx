import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-background/90 backdrop-blur-sm border-b border-metal-light z-50">
      <div className="max-w-5xl mx-auto">
        <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary"></div>
        <nav className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary glow font-mono tracking-tight flex items-center">
            <Image 
              src="/logo.svg" 
              alt="RyanOnTheInside Logo" 
              width={36} 
              height={36} 
              className="mr-3"
            />
            <span>RyanOnTheInside</span>
            <span className="ml-2 h-3 w-3 rounded-full bg-primary animate-pulse"></span>
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="font-mono hover:text-primary transition-colors duration-300 flex items-center">
              <span className="text-primary mr-1">&lt;</span>Home<span className="text-primary ml-1">/&gt;</span>
            </Link>
            <Link href="/music-and-art" className="font-mono hover:text-primary transition-colors duration-300 flex items-center">
              <span className="text-primary mr-1">&lt;</span>Music & Art<span className="text-primary ml-1">/&gt;</span>
            </Link>
            <Link href="/projects" className="font-mono hover:text-primary transition-colors duration-300 flex items-center">
              <span className="text-primary mr-1">&lt;</span>Projects<span className="text-primary ml-1">/&gt;</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 