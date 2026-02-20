import { GitHubRepo } from '@/types/github'
import { useEffect, useState } from 'react'

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
      <div className="grid sm:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card p-5 animate-pulse">
            <div className="h-5 bg-muted rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-muted rounded w-full mb-3"></div>
            <div className="h-4 bg-muted rounded w-1/4"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <a key={repo.html_url}
           href={repo.html_url}
           className="card card-hover block p-5 group"
           target="_blank"
           rel="noopener noreferrer">
          <h3 className="text-sm font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
            {repo.name.split('/')[1]}
          </h3>
          <p className="text-xs text-text-secondary mb-3 font-mono">{repo.name}</p>
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">{repo.description}</p>

          <div className="flex items-center gap-4 text-xs text-text-secondary">
            {repo.stargazers_count > 0 && (
              <span><span className="text-foreground">{repo.stargazers_count}</span> stars</span>
            )}
            {repo.language && (
              <span className="text-accent">{repo.language}</span>
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
