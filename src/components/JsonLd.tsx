export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "SoftwareEngineer", "Musician"],
        "@id": "https://ryanontheinside.com/#person",
        "name": "RyanOnTheInside",
        "alternateName": "Ryan Fosdick",
        "givenName": "Ryan",
        "familyName": "Fosdick",
        "url": "https://ryanontheinside.com",
        "jobTitle": "AI Research Engineer at Daydream",
        "description": "Applied ML researcher and engineer focused on real-time generative diffusion systems for video and music. Senior AI Research Engineer at Livepeer, Pod Lead for Daydream Scope. Lead author of 'DEMON: Diffusion Engine for Musical Orchestrated Noise' and author of 'Adapting VACE for Real-Time Autoregressive Video Diffusion'. Creator of widely-used ComfyUI tooling. Published composer and musician.",
        "worksFor": {
          "@type": "Organization",
          "name": "Daydream",
          "url": "https://daydream.live",
          "description": "Real-time AI video models and pipelines",
          "parentOrganization": {
            "@type": "Organization",
            "name": "Livepeer",
            "url": "https://livepeer.org"
          }
        },
        "knowsAbout": [
          "Streaming diffusion",
          "Real-time music generation",
          "Autoregressive video diffusion",
          "Real-time video generation",
          "ACE-Step",
          "VACE (Video All-in-one Creation and Editing)",
          "Diffusion models",
          "TensorRT acceleration",
          "ML pipeline architecture",
          "ComfyUI",
          "ControlNet",
          "SDXL",
          "LoRA",
          "IPAdapter",
          "Real-time AI systems",
          "Music composition"
        ],
        "sameAs": [
          "https://github.com/ryanontheinside",
          "https://youtube.com/@ryanontheinside",
          "https://instagram.com/ryanontheinside",
          "https://x.com/ryanontheinside",
          "https://civitai.com/user/ryanontheinside",
          "https://arxiv.org/abs/2605.28657",
          "https://arxiv.org/abs/2602.14381"
        ]
      },
      {
        "@type": "ScholarlyArticle",
        "@id": "https://arxiv.org/abs/2605.28657",
        "name": "DEMON: Diffusion Engine for Musical Orchestrated Noise",
        "headline": "DEMON: Diffusion Engine for Musical Orchestrated Noise",
        "author": [
          { "@id": "https://ryanontheinside.com/#person" },
          { "@type": "Person", "name": "Gioele Cerati" },
          { "@type": "Person", "name": "Hunter Hillman" },
          { "@type": "Person", "name": "Rafal Leszko" },
          { "@type": "Person", "name": "Marco Tundo" }
        ],
        "datePublished": "2026-05-27",
        "url": "https://arxiv.org/abs/2605.28657",
        "publisher": {
          "@type": "Organization",
          "name": "arXiv"
        },
        "abstract": "DEMON is a real-time diffusion engine that makes the denoising process playable as a live musical instrument. Built on ACE-Step 1.5 and StreamDiffusion's ring-buffer architecture with TensorRT acceleration, it exposes denoising parameters as low-latency live performance controls and sustains real-time streaming music generation on a single consumer GPU.",
        "about": [
          "Streaming diffusion",
          "Real-time music generation",
          "ACE-Step",
          "Diffusion models",
          "TensorRT acceleration"
        ],
        "sameAs": [
          "https://daydreamlive.github.io/DEMON/",
          "https://github.com/daydreamlive/DEMON"
        ]
      },
      {
        "@type": "ScholarlyArticle",
        "@id": "https://arxiv.org/abs/2602.14381",
        "name": "Adapting VACE for Real-Time Autoregressive Video Diffusion",
        "headline": "Adapting VACE for Real-Time Autoregressive Video Diffusion",
        "author": {
          "@id": "https://ryanontheinside.com/#person"
        },
        "datePublished": "2026-02-16",
        "url": "https://arxiv.org/abs/2602.14381",
        "publisher": {
          "@type": "Organization",
          "name": "arXiv"
        },
        "abstract": "An architectural adaptation that moves VACE reference frames out of the diffusion latent space into a parallel conditioning pathway, enabling real-time autoregressive video generation using existing pretrained weights with no retraining required.",
        "about": [
          "Autoregressive video diffusion",
          "Real-time video generation",
          "VACE",
          "Diffusion models"
        ]
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "DEMON",
        "description": "Streaming diffusion engine for real-time music generation, built on ACE-Step 1.5 with a StreamDiffusion-style ring buffer and TensorRT acceleration. Exposes denoising parameters as live performance controls.",
        "url": "https://github.com/daydreamlive/DEMON",
        "codeRepository": "https://github.com/daydreamlive/DEMON",
        "author": {
          "@id": "https://ryanontheinside.com/#person"
        },
        "programmingLanguage": "Python"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Daydream Scope",
        "description": "Open-source real-time generative AI pipeline tool for autoregressive video models",
        "url": "https://github.com/daydreamlive/scope",
        "codeRepository": "https://github.com/daydreamlive/scope",
        "author": {
          "@id": "https://ryanontheinside.com/#person"
        },
        "programmingLanguage": "Python"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "ComfyUI_RyanOnTheInside",
        "description": "Audio, MIDI, motion, and proximity reactivity nodes for ComfyUI. 700+ GitHub stars.",
        "url": "https://github.com/ryanontheinside/ComfyUI_RyanOnTheInside",
        "codeRepository": "https://github.com/ryanontheinside/ComfyUI_RyanOnTheInside",
        "author": {
          "@id": "https://ryanontheinside.com/#person"
        },
        "programmingLanguage": "Python"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
