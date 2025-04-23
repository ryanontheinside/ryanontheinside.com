'use client'

import SocialLinks from '@/components/SocialLinks'
import GitHubProjects from '@/components/GitHubProjects'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 font-mono">
      {/* Hero section with industrial design */}
      <section className="mb-16 relative industrial-border bg-metal/30 p-6 rounded-industrial">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-transparent to-primary"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary via-transparent to-primary"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-transparent to-primary"></div>
        <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-transparent to-primary"></div>
        
        <h1 className="text-5xl font-bold mb-6 inline-flex items-center">
          <span className="text-primary glow">Ryan</span>
          <span className="border-b-2 border-circuit mx-2">OnThe</span>
          <span className="text-secondary">Inside</span>
          <span className="ml-3 h-4 w-4 bg-primary rounded-full animate-pulse"></span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <p className="text-xl mb-4 border-l-2 border-primary pl-4">
              Solutions Engineer at Livepeer, focused on ML pipelines and open source development.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Based in Massachusetts, with a current focus on <span className="text-primary">real-time diffusion models</span> and <span className="text-circuit">open source tooling</span> for ML pipelines.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Past experience as published composer and touring musician.
            </p>
          </div>
          <div className="metal-gradient industrial-border p-4 rounded-industrial flex flex-col justify-center">
            <div className="text-center mb-3 border-b border-metal-light pb-2">
              <span className="text-lg text-primary font-bold">SYSTEM STATUS</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>CPU Load:</span>
              <span className="text-primary">87%</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Memory:</span>
              <span className="text-circuit">64GB</span>
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
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-metal industrial-border flex items-center justify-center mr-4">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-2xl font-bold text-primary">Tech & Open Source</h2>
          <div className="flex-grow ml-4 h-px bg-metal-light"></div>
        </div>
        
        <div className="industrial-border p-5 rounded-industrial bg-metal/20 backdrop-blur">
          <div className="space-y-6">
            <p className="text-foreground/90 text-lg industrial-border p-3 backdrop-blur">
              At Livepeer, I work on building tools for machine learning pipelines in a decentralized video processing network.
              My open source work focuses on real-time AI applications, reactivity in diffusion models, and creative coding tools.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-metal rounded-industrial text-primary text-sm">ML Pipelines</span>
              <span className="px-3 py-1 bg-metal rounded-industrial text-circuit text-sm">ComfyUI</span>
              <span className="px-3 py-1 bg-metal rounded-industrial text-secondary text-sm">Diffusion Models</span>
              <span className="px-3 py-1 bg-metal rounded-industrial text-primary text-sm">Real-time AI</span>
              <span className="px-3 py-1 bg-metal rounded-industrial text-circuit text-sm">Open Source</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section with industrial design */}
      <section>
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-metal industrial-border flex items-center justify-center mr-4">
            <div className="w-4 h-4 bg-secondary rounded-full"></div>
          </div>
          <h2 className="text-2xl font-bold text-secondary">Featured Projects</h2>
          <div className="flex-grow ml-4 h-px bg-metal-light"></div>
        </div>
        
        <div className="industrial-border rounded-industrial bg-metal/20 p-5">
          <GitHubProjects />
        </div>
      </section>
    </main>
  )
}
