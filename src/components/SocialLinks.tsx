export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-4 flex-wrap ${className}`}>
      <a href="https://github.com/ryanontheinside" 
         className="text-sm px-4 py-2 metal-gradient industrial-border rounded-industrial text-foreground hover:border-primary hover:shadow-glow transition-all duration-300 flex items-center"
         target="_blank" rel="noopener noreferrer">
        <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
        GitHub
      </a>
      <a href="https://youtube.com/@ryanontheinside" 
         className="text-sm px-4 py-2 metal-gradient industrial-border rounded-industrial text-foreground hover:border-secondary hover:shadow-glow transition-all duration-300 flex items-center"
         target="_blank" rel="noopener noreferrer">
        <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
        YouTube
      </a>
      <a href="https://instagram.com/ryanontheinside" 
         className="text-sm px-4 py-2 metal-gradient industrial-border rounded-industrial text-foreground hover:border-accent hover:shadow-glow transition-all duration-300 flex items-center"
         target="_blank" rel="noopener noreferrer">
        <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
        Instagram
      </a>
      <a href="https://x.com/ryanontheinside" 
         className="text-sm px-4 py-2 metal-gradient industrial-border rounded-industrial text-foreground hover:border-primary hover:shadow-glow transition-all duration-300 flex items-center"
         target="_blank" rel="noopener noreferrer">
        <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
        X
      </a>
      <a href="https://civitai.com/user/ryanontheinside" 
         className="text-sm px-4 py-2 metal-gradient industrial-border rounded-industrial text-foreground hover:border-circuit hover:shadow-glow transition-all duration-300 flex items-center"
         target="_blank" rel="noopener noreferrer">
        <span className="w-2 h-2 bg-circuit rounded-full mr-2 animate-pulse"></span>
        Civitai
      </a>
    </div>
  )
} 