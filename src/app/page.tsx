'use client'

import SocialLinks from '@/components/SocialLinks'
import GitHubProjects from '@/components/GitHubProjects'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6">
          RyanOnTheInside
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-6">
          Solutions Engineer at Livepeer, focused on ML pipelines and open source development.
          Based in Massachusetts, with a current focus is real-time diffusion models and open source tooling for ML pipelines.
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mb-6">
          Past experience as published composer and touring musician.
        </p>
        <SocialLinks />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Tech & Open Source</h2>
        <div className="space-y-6">
          <p className="text-gray-600 max-w-2xl">
            At Livepeer, I work on building tools for machine learning pipelines in a decentralized video processing network.
            My open source work focuses on real-time AI applications, reactivity in diffusion models, and creative coding tools.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <GitHubProjects />
      </section>
    </main>
  )
}
