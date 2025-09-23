import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
        <span className="text-white font-bold text-lg">S</span>
      </div>
      <span className="font-serif font-semibold text-xl text-gray-900">
        Selbury
      </span>
    </Link>
  )
}