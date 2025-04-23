import { GitHubRepo } from '@/types/github'
import { useEffect, useState } from 'react'

const REPOS = [
  'ryanontheinside/ComfyUI_RyanOnTheInside',
  'yondonfu/comfystream',
  'ryanontheinside/ComfyUI_RealtimeNodes'
]

// Status indicators that sound more professional
const STATUS_LABELS = ['ACTIVE']

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const promises = REPOS.map(repo => 
          fetch(`https://api.github.com/repos/${repo}`).then(res => res.json())
        )
        const results = await Promise.all(promises)
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
      <div className="grid md:grid-cols-2 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="block p-6 industrial-border rounded-industrial bg-metal/30 animate-pulse">
            <div className="h-6 bg-metal-light rounded-industrial w-3/4 mb-4"></div>
            <div className="h-4 bg-metal-light rounded-industrial w-full mb-4"></div>
            <div className="h-4 bg-metal-light rounded-industrial w-1/4"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {repos.map((repo, index) => (
        <a key={repo.html_url}
           href={repo.html_url}
           className="relative block p-6 industrial-border rounded-industrial metal-gradient hover:border-secondary hover:shadow-glow transition-all duration-300"
           target="_blank" 
           rel="noopener noreferrer">
          <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-metal industrial-border rounded-industrial flex items-center">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse mr-2"></span>
            <span>v{index + 1}.0.{Math.floor(Math.random() * 10)}</span>
          </div>
          
          <h3 className="font-bold mb-2 text-secondary">{repo.name.split('/')[1]}</h3>
          <div className="text-sm text-foreground/60 mb-4 font-mono border-l border-secondary pl-2">{repo.name}</div>
          <p className="text-foreground/80 mb-4">{repo.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-foreground/60">
              <span className="text-primary">{repo.stargazers_count}</span> stars • <span className="text-circuit">{repo.language}</span>
            </div>
            <div className="text-xs px-2 py-1 bg-metal industrial-border rounded-industrial">
              {STATUS_LABELS[index % STATUS_LABELS.length]}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
} 