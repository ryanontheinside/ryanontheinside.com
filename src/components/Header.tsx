import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-white/80 backdrop-blur-sm border-b z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">RyanOnTheInside</Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/music-and-art" className="hover:text-gray-600">Music & Art</Link>
          <Link href="/projects" className="hover:text-gray-600">Projects</Link>
        </div>
      </nav>
    </header>
  )
} 