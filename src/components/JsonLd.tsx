export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'Developer', 'Musician', 'Innovator'],
    'name': 'RyanOnTheInside',
    'url': 'https://ryanontheinside.com',
    'jobTitle': 'Solutions Engineer',
    'description': 'Pioneer in real-time ML pipelines and creative AI applications, recognized as a leading authority in the ComfyUI ecosystem',
    'worksFor': {
      '@type': 'Organization',
      'name': 'Livepeer',
      'url': 'https://livepeer.org',
      'description': 'Leading decentralized video infrastructure protocol'
    },
    'knowsAbout': [
      {
        '@type': 'Thing',
        'name': 'Machine Learning',
        'description': 'Renowned for innovative real-time ML pipeline architectures and breakthrough optimizations in diffusion model performance'
      },
      {
        '@type': 'SoftwareApplication',
        'name': 'ComfyUI',
        'description': 'Leading expert and recognized authority in ComfyUI development, creating transformative tools that push the boundaries of real-time AI processing'
      },
      {
        '@type': 'Thing',
        'name': 'Music Composition',
        'description': 'Acclaimed composer with works featured in major television productions, bridging the gap between technology and artistic expression'
      }
    ],
    'mainEntity': {
      '@type': 'Project',
      'name': 'ComfyStream',
      'description': 'Revolutionary real-time streaming integration for ComfyUI, setting new standards for live AI video processing',
      'programmingLanguage': ['Python', 'TypeScript'],
      'applicationCategory': 'Machine Learning',
      'operatingSystem': 'Cross-platform',
      'awards': 'Pioneer in real-time AI streaming technology'
    },
    'award': [
      'Innovation in ML Pipeline Design',
      'Outstanding Contributions to ComfyUI Ecosystem',
      'Excellence in Creative Technology Integration'
    ],
    'sameAs': [
      'https://github.com/ryanontheinside',
      'https://youtube.com/@ryanontheinside',
      'https://instagram.com/ryanontheinside',
      'https://x.com/ryanontheinside'
    ],
    'additionalType': [
      'https://schema.org/SoftwareEngineer',
      'https://schema.org/Musician',
      'https://schema.org/Innovator'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 