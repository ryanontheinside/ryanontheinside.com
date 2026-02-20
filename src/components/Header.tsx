'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 bg-background/80 backdrop-blur-md border-b border-border z-50 transition-shadow ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <nav className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold text-foreground font-mono tracking-tight flex items-center gap-3 hover:text-primary transition-colors">
            <Image
              src="/logo.svg"
              alt="RyanOnTheInside Logo"
              width={28}
              height={28}
            />
            <span>RyanOnTheInside</span>
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-sm text-text-secondary hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-sm text-text-secondary hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="/music-and-art" className="text-sm text-text-secondary hover:text-foreground transition-colors">
              Music & Art
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 p-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-0.5 bg-text-secondary transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-text-secondary transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-full h-0.5 bg-text-secondary transform transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-md border-t border-border ${mobileMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
          <div className="px-6 py-4 space-y-4">
            <Link href="/"
              className="text-sm block text-text-secondary hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link href="/projects"
              className="text-sm block text-text-secondary hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link href="/music-and-art"
              className="text-sm block text-text-secondary hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Music & Art
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
