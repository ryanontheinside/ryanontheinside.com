'use client'

import { GitHubRepo } from '@/types/github'
import { useEffect, useState } from 'react'
import GitHubProjects from '@/components/GitHubProjects'

export default function Projects() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Set loading to false after initial render
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">GitHub Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="block p-6 border rounded-lg animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">GitHub Projects</h2>
        <GitHubProjects />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Other Resources</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <a href="https://youtube.com/@ryanontheinside"
             className="block p-6 border rounded-lg hover:border-gray-400 transition-colors"
             target="_blank"
             rel="noopener noreferrer">
            <h3 className="font-bold mb-2">YouTube Tutorials</h3>
            <p className="text-gray-600">
              Video tutorials and demonstrations of my ComfyUI nodes and other ML projects
            </p>
          </a>
        </div>
      </section>
    </main>
  )
} 