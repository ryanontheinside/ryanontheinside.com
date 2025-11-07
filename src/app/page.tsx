'use client'

import SocialLinks from '@/components/SocialLinks'
import GitHubProjects from '@/components/GitHubProjects'
import { useEffect, useState } from 'react'

export default function Home() {
  const [caffeine, setCaffeine] = useState(8) // Start with critically low caffeine
  const [temp, setTemp] = useState(92) // Start with critically high temperature

  // Animate caffeine and temperature levels with more randomness
  useEffect(() => {
    const interval = setInterval(() => {
      setCaffeine(prev => {
        // More dramatic changes (between -2 and +1)
        const change = Math.floor(Math.random() * 4) - 2
        const newValue = prev + change
        return Math.min(Math.max(newValue, 4), 15) // Wider range 4-15%, mostly low
      })
      
      setTemp(prev => {
        // More dramatic changes (between -1 and +2)
        const change = Math.floor(Math.random() * 4) - 1
        const newValue = prev + change
        return Math.min(Math.max(newValue, 85), 98) // Wider range 85-98°C, mostly high
      })
    }, 800) // Update frequently
    
    return () => clearInterval(interval)
  }, [])

  // Generate retro power bar blocks with appropriate coloring
  const renderTempBar = (value: number, max: number) => {
    const segments = 10; // Number of blocks
    const filledSegments = Math.ceil((value / max) * segments);
    
    return (
      <div className="flex space-x-0.5 w-16 md:w-20">
        {Array.from({ length: segments }).map((_, i) => {
          // Color logic for temperature - gets redder as it goes higher
          let blockColor = 'bg-green-500';
          
          if (i >= 6) blockColor = 'bg-yellow-500'; // Upper segments are yellow
          if (i >= 8) blockColor = 'bg-red-500';    // Top segments are red
          
          return (
            <div 
              key={i}
              className={`h-2 w-1 md:w-1.5 border border-black/30 ${i < filledSegments ? blockColor : 'bg-gray-800/30'}`}
            ></div>
          );
        })}
      </div>
    );
  };
  
  // Special bar for caffeine that shows critical when low
  const renderCaffeineBar = (value: number, max: number) => {
    const segments = 10; // Number of blocks
    const filledSegments = Math.ceil((value / max) * segments);
    
    return (
      <div className="flex space-x-0.5 w-16 md:w-20">
        {Array.from({ length: segments }).map((_, i) => {
          // Color logic for caffeine - redder as it gets lower
          let blockColor = 'bg-green-500';
          
          if (i <= 3) blockColor = 'bg-red-500';    // First segments are red (critical when low)
          else if (i <= 5) blockColor = 'bg-yellow-500'; // Next segments are yellow
          
          return (
            <div 
              key={i}
              className={`h-2 w-1 md:w-1.5 border border-black/30 ${i < filledSegments ? blockColor : 'bg-gray-800/30'}`}
            ></div>
          );
        })}
      </div>
    );
  };

  // Calculate status text based on levels
  const getCaffeineStatus = (value: number) => {
    if (value <= 6) return "CRITICAL";
    if (value <= 10) return "LOW";
    return "OK";
  };
  
  const getTempStatus = (value: number) => {
    if (value >= 95) return "CRITICAL";
    if (value >= 90) return "HIGH";
    return "OK";
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
            Based in Massachusetts, with a current focus on <span className="text-primary">real-time diffusion models</span> and <span className="text-circuit">open source tooling</span> for ML pipelines.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 mb-4">
            Senior AI Research Engineer at Livepeer, focused on ML pipelines and open source development.

            </p>
            <p className="text-base sm:text-lg text-foreground/80 mb-6">
              Past experience as engineer, published composer and touring musician.
            </p>
          </div>
          <div className="metal-gradient industrial-border p-3 rounded-industrial flex flex-col justify-center">
            <div className="text-center mb-2 border-b border-metal-light pb-1">
              <span className="text-base text-primary font-bold">SYSTEM STATUS</span>
            </div>
            
            <table className="w-full text-sm">
              <tbody>
                <tr className="h-6">
                  <td className="whitespace-nowrap pr-2">Caffeine:</td>
                  <td className="w-24 text-right">{renderCaffeineBar(caffeine, 20)}</td>
                  <td className="w-16 text-right">
                    <span className={`${caffeine <= 6 ? 'text-red-400 animate-pulse' : caffeine <= 10 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {getCaffeineStatus(caffeine)}
                    </span>
                  </td>
                </tr>
                <tr className="h-6">
                  <td className="whitespace-nowrap pr-2">Temp:</td>
                  <td className="w-24 text-right">{renderTempBar(temp, 100)}</td>
                  <td className="w-16 text-right">
                    <span className={`${temp >= 95 ? 'text-red-400 animate-pulse' : temp >= 90 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {getTempStatus(temp)}
                    </span>
                  </td>
                </tr>
                <tr className="h-6">
                  <td className="whitespace-nowrap pr-2">Projects:</td>
                  <td></td>
                  <td className="w-16 text-right">
                    <span className="text-secondary">ACTIVE</span>
                  </td>
                </tr>
                <tr className="h-6">
                  <td className="whitespace-nowrap pr-2">Status:</td>
                  <td></td>
                  <td className="w-16 text-right">
                    <span className="text-primary animate-pulse">ONLINE</span>
                  </td>
                </tr>
              </tbody>
            </table>
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
