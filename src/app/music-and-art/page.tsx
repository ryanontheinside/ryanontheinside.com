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

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Music</h2>
        <div className="space-y-6">
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Composition</h3>
            <p className="text-gray-600 max-w-2xl mb-6">
              Published composer with works featured in major television productions including The Young and the Restless.
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
              Our latest album "Self-Tape" was released in November 2023.
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