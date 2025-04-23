import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if token exists
  if (!process.env.GITHUB_TOKEN) {
    console.error('GITHUB_TOKEN environment variable is not set');
    return res.status(500).json({ error: 'GitHub token not configured' });
  }

  try {
    // First fetch the pinned repos using the GraphQL API
    const graphqlQuery = {
      query: `{
        user(login: "ryanontheinside") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                owner {
                  login
                }
              }
            }
          }
        }
      }`
    };

    const graphqlResponse = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery)
    });

    if (!graphqlResponse.ok) {
      const errorText = await graphqlResponse.text();
      console.error('GitHub GraphQL API error:', 
        graphqlResponse.status, 
        graphqlResponse.statusText, 
        errorText
      );
      return res.status(graphqlResponse.status).json({ 
        error: 'GitHub API error', 
        status: graphqlResponse.status,
        details: errorText
      });
    }

    const graphqlData = await graphqlResponse.json();
    
    if (!graphqlData.data || !graphqlData.data.user || !graphqlData.data.user.pinnedItems) {
      console.error('Invalid GitHub GraphQL response:', graphqlData);
      return res.status(500).json({ 
        error: 'Failed to fetch pinned repositories',
        details: graphqlData 
      });
    }
    
    const pinnedRepos = graphqlData.data.user.pinnedItems.nodes.map(
      (node: any) => `${node.owner.login}/${node.name}`
    );

    if (pinnedRepos.length === 0) {
      // If no pinned repos, return a default set
      return res.status(200).json([
        { name: 'ComfyUI_RyanOnTheInside', full_name: 'ryanontheinside/ComfyUI_RyanOnTheInside', html_url: 'https://github.com/ryanontheinside/ComfyUI_RyanOnTheInside', description: 'Custom nodes for ComfyUI', language: 'Python', stargazers_count: 0 },
        { name: 'ComfyUI_RealtimeNodes', full_name: 'ryanontheinside/ComfyUI_RealtimeNodes', html_url: 'https://github.com/ryanontheinside/ComfyUI_RealtimeNodes', description: 'Real-time processing nodes for ComfyUI', language: 'Python', stargazers_count: 0 }
      ]);
    }

    // Then fetch detailed info for each pinned repo
    const promises = pinnedRepos.map((repo: string) => 
      fetch(`https://api.github.com/repos/${repo}`, {
        headers: {
          'Authorization': `bearer ${process.env.GITHUB_TOKEN}`
        }
      }).then(async res => {
        if (!res.ok) {
          const errorText = await res.text();
          console.error(`Error fetching repo ${repo}:`, res.status, errorText);
          return { 
            name: repo.split('/')[1], 
            full_name: repo,
            html_url: `https://github.com/${repo}`,
            description: 'Repository details unavailable',
            language: '',
            stargazers_count: 0
          };
        }
        return res.json();
      })
    );
    
    const results = await Promise.all(promises);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    res.status(500).json({ 
      error: 'Failed to fetch GitHub repositories',
      message: error instanceof Error ? error.message : String(error)
    });
  }
} 