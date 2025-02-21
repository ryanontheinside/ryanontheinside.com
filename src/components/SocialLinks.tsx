export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-4 flex-wrap ${className}`}>
      <a href="https://github.com/ryanontheinside" 
         className="text-sm px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
         target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://youtube.com/@ryanontheinside" 
         className="text-sm px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
         target="_blank" rel="noopener noreferrer">
        YouTube
      </a>
      <a href="https://instagram.com/ryanontheinside" 
         className="text-sm px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700"
         target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <a href="https://x.com/ryanontheinside" 
         className="text-sm px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900"
         target="_blank" rel="noopener noreferrer">
        X
      </a>
      <a href="https://civitai.com/user/ryanontheinside" 
         className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
         target="_blank" rel="noopener noreferrer">
        Civitai
      </a>
    </div>
  )
} 