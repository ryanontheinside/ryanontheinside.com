'use client'

import { GitHubRepo } from '@/types/github'
import { useEffect, useState } from 'react'

const CATEGORIES: Record<string, string[]> = {
  'ComfyUI Extensions': [
    'ryanontheinside/ComfyUI_RyanOnTheInside',
    'ryanontheinside/ComfyUI_RealtimeNodes'
  ],
  'ML Tools': [
    'yondonfu/comfystream'
  ]
}

export default function Projects() {
  const [repos, setRepos] = useState<Record<string, GitHubRepo[]>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const results: Record<string, GitHubRepo[]> = {}
        
        for (const [category, repoList] of Object.entries(CATEGORIES)) {
          const promises = repoList.map(repo => 
            fetch(`https://api.github.com/repos/${repo}`).then(res => res.json())
          )
          results[category] = await Promise.all(promises)
        }
        
        setRepos(results)
      } catch (error) {
        console.error('Error fetching GitHub repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (loading) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        {Object.keys(CATEGORIES).map(category => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{category}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(CATEGORIES[category].length)].map((_, i) => (
                <div key={i} className="block p-6 border rounded-lg animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      
      {Object.entries(repos).map(([category, categoryRepos]) => (
        <section key={category} className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{category}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categoryRepos.map(repo => (
              <a key={repo.html_url}
                 href={repo.html_url}
                 className="block p-6 border rounded-lg hover:border-gray-400 transition-colors"
                 target="_blank" 
                 rel="noopener noreferrer">
                <h3 className="font-bold mb-2">{repo.name.split('/')[1]}</h3>
                <div className="text-sm text-gray-500 mb-4">{repo.name}</div>
                <p className="text-gray-600 mb-4">{repo.description}</p>
                <div className="text-sm text-gray-500">
                  {repo.stargazers_count} stars • {repo.language}
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}

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