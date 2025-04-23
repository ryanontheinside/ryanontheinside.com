'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 bg-background/90 backdrop-blur-sm border-b border-metal-light z-50 ${scrolled ? 'shadow-md' : ''}`}>
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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
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
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 rounded-industrial border border-metal-light p-1.5 hover:bg-metal/30 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-0.5 bg-primary transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-primary transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-full h-0.5 bg-primary transform transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-md border-t border-metal-light ${mobileMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
          <div className="px-6 py-4 space-y-4">
            <Link href="/" 
              className="font-mono block hover:text-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-primary mr-1">&lt;</span>Home<span className="text-primary ml-1">/&gt;</span>
            </Link>
            <Link href="/music-and-art"
              className="font-mono block hover:text-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-primary mr-1">&lt;</span>Music & Art<span className="text-primary ml-1">/&gt;</span>
            </Link>
            <Link href="/projects"
              className="font-mono block hover:text-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-primary mr-1">&lt;</span>Projects<span className="text-primary ml-1">/&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 