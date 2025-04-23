'use client'

import SocialLinks from '@/components/SocialLinks'
import GitHubProjects from '@/components/GitHubProjects'
import { useEffect, useState } from 'react'

export default function Home() {
  const [caffeine, setCaffeine] = useState(12)
  const [temp, setTemp] = useState(88)

  // Animate caffeine and temperature levels with more randomness
  useEffect(() => {
    const interval = setInterval(() => {
      setCaffeine(prev => {
        // More dramatic changes (between -3 and +2)
        const change = Math.floor(Math.random() * 6) - 3
        const newValue = prev + change
        return Math.min(Math.max(newValue, 5), 20) // Wider range 5-20%
      })
      
      setTemp(prev => {
        // More dramatic changes (between -2 and +3)
        const change = Math.floor(Math.random() * 6) - 2
        const newValue = prev + change
        return Math.min(Math.max(newValue, 82), 95) // Wider range 82-95°C
      })
    }, 800) // Update more frequently
    
    return () => clearInterval(interval)
  }, [])

  // Generate retro power bar blocks
  const renderPowerBar = (value: number, max: number, color: string) => {
    const segments = 10; // Number of blocks
    const filledSegments = Math.ceil((value / max) * segments);
    
    return (
      <div className="flex space-x-0.5 w-24">
        {Array.from({ length: segments }).map((_, i) => (
          <div 
            key={i}
            className={`h-4 w-2 border border-black/30 ${i < filledSegments ? color : 'bg-gray-800/30'}`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 font-mono">
      {/* Hero section with industrial design */}
      <section className="mb-12 sm:mb-16 relative industrial-border bg-metal/30 p-4 sm:p-6 rounded-industrial">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-transparent to-primary"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary via-transparent to-primary"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-transparent to-primary"></div>
        <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-transparent to-primary"></div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 inline-flex flex-wrap items-center">
          <span className="text-primary glow">Ryan</span>
          <span className="border-b-2 border-circuit mx-2">OnThe</span>
          <span className="text-secondary">Inside</span>
          <span className="ml-3 h-4 w-4 bg-primary rounded-full animate-pulse"></span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="col-span-1 md:col-span-2">
            <p className="text-lg sm:text-xl mb-4 border-l-2 border-primary pl-4">
              Solutions Engineer at Livepeer, focused on ML pipelines and open source development.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 mb-4">
              Based in Massachusetts, with a current focus on <span className="text-primary">real-time diffusion models</span> and <span className="text-circuit">open source tooling</span> for ML pipelines.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 mb-6">
              Past experience as published composer and touring musician.
            </p>
          </div>
          <div className="metal-gradient industrial-border p-4 rounded-industrial flex flex-col justify-center">
            <div className="text-center mb-3 border-b border-metal-light pb-2">
              <span className="text-lg text-primary font-bold">SYSTEM STATUS</span>
            </div>
            <div className="flex justify-between mb-3 items-center">
              <span>Caffeine:</span>
              <div className="flex items-center">
                {renderPowerBar(caffeine, 20, 'bg-green-500')}
                <span className="text-red-400 animate-pulse ml-2">{caffeine}%</span>
              </div>
            </div>
            <div className="flex justify-between mb-3 items-center">
              <span>Temperature:</span>
              <div className="flex items-center">
                {renderPowerBar(temp, 100, 'bg-green-500')}
                <span className="text-orange-400 animate-pulse ml-2">{temp}°C</span>
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <span>Projects:</span>
              <span className="text-secondary">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>Availability:</span>
              <span className="text-primary animate-pulse">ONLINE</span>
            </div>
          </div>
        </div>
        
        <SocialLinks />
      </section>

      {/* Tech section with circuit elements */}
      <section className="mb-12 sm:mb-16">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-metal industrial-border flex items-center justify-center mr-3 sm:mr-4">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-primary">Tech & Open Source</h2>
          <div className="flex-grow ml-3 sm:ml-4 h-px bg-metal-light"></div>
        </div>
        
        <div className="industrial-border p-4 sm:p-5 rounded-industrial bg-metal/20 backdrop-blur">
          <div className="space-y-6">
            <p className="text-foreground/90 text-base sm:text-lg industrial-border p-3 backdrop-blur">
              At Livepeer, I work on building tools for machine learning pipelines in a decentralized video processing network.
              My open source work focuses on real-time AI applications, reactivity in diffusion models, and creative coding tools.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-2 sm:px-3 py-1 bg-metal rounded-industrial text-primary text-xs sm:text-sm">ML Pipelines</span>
              <span className="px-2 sm:px-3 py-1 bg-metal rounded-industrial text-circuit text-xs sm:text-sm">ComfyUI</span>
              <span className="px-2 sm:px-3 py-1 bg-metal rounded-industrial text-secondary text-xs sm:text-sm">Diffusion Models</span>
              <span className="px-2 sm:px-3 py-1 bg-metal rounded-industrial text-primary text-xs sm:text-sm">Real-time AI</span>
              <span className="px-2 sm:px-3 py-1 bg-metal rounded-industrial text-circuit text-xs sm:text-sm">Open Source</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section with industrial design */}
      <section>
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-metal industrial-border flex items-center justify-center mr-3 sm:mr-4">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-secondary rounded-full"></div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-secondary">Featured Projects</h2>
          <div className="flex-grow ml-3 sm:ml-4 h-px bg-metal-light"></div>
        </div>
        
        <div className="industrial-border rounded-industrial bg-metal/20 p-4 sm:p-5">
          <GitHubProjects />
        </div>
      </section>
    </main>
  )
}
