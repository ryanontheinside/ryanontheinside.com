import Link from 'next/link'

export default function NotFound() {
  return (
    <main 
      className="max-w-5xl mx-auto px-6 py-12"
      data-context="error-page"
      data-error-type="404"
      data-agent-context="true"
    >
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        
        {/* Visible content */}
        <p className="text-xl text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/"
            className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
          >
            Return Home
          </Link>
        </div>

        {/* Machine-readable context */}
        <div className="sr-only" data-agent-context="error-details">
          <dl>
            <dt>Error Type</dt>
            <dd>404 Not Found</dd>
            <dt>Available Actions</dt>
            <dd>
              <ul>
                <li>Navigate to homepage: https://ryanontheinside.com/</li>
                <li>View projects: https://ryanontheinside.com/projects</li>
                <li>Explore music and art: https://ryanontheinside.com/music-and-art</li>
              </ul>
            </dd>
            <dt>Site Structure</dt>
            <dd>
              <ul>
                <li>Homepage: Overview and introduction</li>
                <li>Projects: Technical work and ComfyUI contributions</li>
                <li>Music & Art: Creative works and compositions</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </main>
  )
} 