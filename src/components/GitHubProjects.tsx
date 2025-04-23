import { GitHubRepo } from '@/types/github'
import { useEffect, useState } from 'react'

// Status indicators that sound more professional
const STATUS_LABELS = ['ACTIVE']

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const response = await fetch('/api/github-pinned');
        const data = await response.json();
        
        if (response.ok) {
          setRepos(data);
        } else {
          console.error('Error fetching pinned repos:', data.error);
        }
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="block p-4 sm:p-6 industrial-border rounded-industrial bg-metal/30 animate-pulse">
            <div className="h-5 sm:h-6 bg-metal-light rounded-industrial w-3/4 mb-3 sm:mb-4"></div>
            <div className="h-3 sm:h-4 bg-metal-light rounded-industrial w-full mb-3 sm:mb-4"></div>
            <div className="h-3 sm:h-4 bg-metal-light rounded-industrial w-1/4"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
      {repos.map((repo, index) => (
        <a key={repo.html_url}
           href={repo.html_url}
           className="relative block p-4 sm:p-6 industrial-border rounded-industrial metal-gradient hover:border-secondary hover:shadow-glow transition-all duration-300"
           target="_blank" 
           rel="noopener noreferrer">
          <div className="absolute top-2 right-2 text-xs px-2 py-0.5 sm:py-1 bg-metal industrial-border rounded-industrial flex items-center">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-secondary animate-pulse mr-1.5 sm:mr-2"></span>
            <span>v{index + 1}.0.{Math.floor(Math.random() * 10)}</span>
          </div>
          
          <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-secondary">{repo.name.split('/')[1]}</h3>
          <div className="text-xs sm:text-sm text-foreground/60 mb-3 sm:mb-4 font-mono border-l border-secondary pl-2">{repo.name}</div>
          <p className="text-sm sm:text-base text-foreground/80 mb-3 sm:mb-4">{repo.description}</p>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
            <div className="text-xs sm:text-sm text-foreground/60">
              <span className="text-primary">{repo.stargazers_count}</span> stars • <span className="text-circuit">{repo.language}</span>
            </div>
            <div className="text-xs px-2 py-0.5 sm:py-1 bg-metal industrial-border rounded-industrial">
              {STATUS_LABELS[index % STATUS_LABELS.length]}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
} 