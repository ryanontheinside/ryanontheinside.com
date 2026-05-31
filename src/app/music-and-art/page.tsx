import SocialLinks from '@/components/SocialLinks'

export default function MusicAndArt() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Music & Art</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-6">
          Exploring the intersection of technology and creativity through music and AI art generation.
          Follow my journey on Instagram and YouTube.
        </p>
        <SocialLinks />
      </section>

      {/* DEMON — where the music and the research meet */}
      <section className="mb-16 font-mono">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-6">Music × AI</h2>
        <div className="card card-hover block p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
              DEMON: Diffusion Engine for Musical Orchestrated Noise
            </h3>
            <span className="tag shrink-0">arXiv 2026</span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            Where the music and the research meet. DEMON is a real-time diffusion engine that makes the
            denoising process playable as a live musical instrument, streaming music generation on a single
            consumer GPU while exposing the model&apos;s internals as live performance controls. As both a
            composer and a diffusion researcher, this is the work that fuses the two.
          </p>
          <div className="flex items-center gap-3 text-xs text-text-secondary mb-4">
            <span>Ryan Fosdick</span>
            <span className="text-accent">Lead author</span>
            <span>Daydream</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="https://arxiv.org/abs/2605.28657" target="_blank" rel="noopener noreferrer"
               className="tag hover:text-primary hover:border-border-hover transition-colors">Paper</a>
            <a href="https://daydreamlive.github.io/DEMON/" target="_blank" rel="noopener noreferrer"
               className="tag hover:text-primary hover:border-border-hover transition-colors">Project page</a>
            <a href="https://github.com/daydreamlive/DEMON" target="_blank" rel="noopener noreferrer"
               className="tag hover:text-primary hover:border-border-hover transition-colors">Code</a>
            <a href="https://music.daydream.live" target="_blank" rel="noopener noreferrer"
               className="tag hover:text-primary hover:border-border-hover transition-colors">Live demo</a>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Music</h2>
        <div className="space-y-6">
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Composition</h3>
            <p className="text-gray-600 max-w-2xl mb-6">
              Published composer with works featured in major television productions including &quot;The Young and the Restless&quot;.
              Currently represented by Brad Hatfield Music Collective.
            </p>
            <div className="flex gap-4">
              <a href="https://www.bradhatfieldmusiccollective.com" 
                 className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                 target="_blank" rel="noopener noreferrer">
                BHMC Website
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">MouthBreather</h3>
            <p className="text-gray-600 max-w-2xl mb-6">
              Founder and guitarist of MouthBreather, a Boston-based band blending math rock, post-hardcore, and experimental folk. 
              Our latest album &quot;Self-Tape&quot; was released in November 2023.
            </p>
            <div className="flex gap-4">
              <a href="https://mouthbreather.band" 
                 className="text-sm px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
                 target="_blank" rel="noopener noreferrer">
                Band Website
              </a>
              <a href="https://mouthbreatherband.bandcamp.com" 
                 className="text-sm px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                 target="_blank" rel="noopener noreferrer">
                Bandcamp
              </a>
              <a href="https://open.spotify.com/artist/4vxe1RFEqKSoPxUVjyYxPe" 
                 className="text-sm px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
                 target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">AI Art Generation</h2>
        <div className="space-y-6">
          <p className="text-gray-600 max-w-2xl">
            Creating tools for AI art generation, with a focus on real-time reactivity and interactive experiences.
            Check out my tutorials and examples on YouTube to learn more about creative applications of AI.
          </p>
          <div className="flex gap-4">
            <a href="https://youtube.com/@ryanontheinside" 
               className="text-sm px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
               target="_blank" rel="noopener noreferrer">
              YouTube Tutorials
            </a>
            <a href="https://civitai.com/user/ryanontheinside" 
               className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
               target="_blank" rel="noopener noreferrer">
              Civitai
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 