'use client'

import SocialLinks from '@/components/SocialLinks'
import GitHubProjects from '@/components/GitHubProjects'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 font-mono">
      {/* Hero */}
      <section className="mb-16 sm:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-foreground tracking-tight">
          RyanOnTheInside
        </h1>
        <p className="text-sm text-text-secondary mb-6">Ryan Fosdick</p>

        <p className="text-lg sm:text-xl text-foreground/90 mb-4 max-w-2xl leading-relaxed">
          AI Research Engineer at{' '}
          <a href="https://daydream.live" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Daydream</a>.
          Core developer on{' '}
          <a href="https://github.com/daydreamlive/scope" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Daydream Scope</a>,
          researching autoregressive video models with a focus on real-time control.
        </p>
        <p className="text-sm text-text-secondary mb-8 max-w-2xl">
          Previously tech lead on StreamDiffusion. Published composer and touring musician.
        </p>

        <SocialLinks />
      </section>

      {/* Latest Research */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-6">Latest Research</h2>

        <a href="https://arxiv.org/abs/2602.14381"
           target="_blank" rel="noopener noreferrer"
           className="card card-hover block p-6 group">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
              Adapting VACE for Real-Time Autoregressive Video Diffusion
            </h3>
            <span className="tag shrink-0">arXiv 2025</span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            An architectural adaptation that moves VACE reference frames out of the diffusion latent space
            into a parallel conditioning pathway, enabling real-time autoregressive video generation
            using existing pretrained weights with no retraining required.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary">
            <span>Ryan Fosdick</span>
            <span className="text-accent">Single author</span>
            <span>Daydream</span>
          </div>
        </a>

        <a href="https://daydream.live/real-time-video-generation-control"
           target="_blank" rel="noopener noreferrer"
           className="card card-hover block p-6 group mt-4">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
              Training-Free Real-Time Control for Autoregressive Video Generation
            </h3>
            <span className="tag shrink-0">Blog</span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            A companion post exploring the engineering and research behind enabling real-time
            VACE-style control in autoregressive video diffusion pipelines.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary">
            <span>Ryan Fosdick</span>
            <span>Daydream</span>
          </div>
        </a>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-6">Featured Projects</h2>
        <GitHubProjects />
      </section>
    </main>
  )
}
