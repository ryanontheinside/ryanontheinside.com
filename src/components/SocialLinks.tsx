export default function SocialLinks({ className = '' }: { className?: string }) {
  const links = [
    { href: 'https://github.com/ryanontheinside', label: 'GitHub' },
    { href: 'https://youtube.com/@ryanontheinside', label: 'YouTube' },
    { href: 'https://x.com/ryanontheinside', label: 'X' },
    { href: 'https://instagram.com/ryanontheinside', label: 'Instagram' },
    { href: 'https://civitai.com/user/ryanontheinside', label: 'Civitai' },
  ]

  return (
    <div className={`flex gap-3 flex-wrap ${className}`}>
      {links.map(({ href, label }) => (
        <a key={label}
           href={href}
           className="text-xs px-3 py-1.5 rounded-full border border-border text-text-secondary hover:text-foreground hover:border-border-hover transition-all"
           target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ))}
    </div>
  )
}
