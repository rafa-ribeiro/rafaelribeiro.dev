import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition">
                    rafaelribeiro.dev
                </Link>
                <nav className="flex gap-6">
                    <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition">
                        Home
                    </Link>
                    <Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition">
                        Blog
                    </Link>
                    <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition">
                        Sobre
                    </Link>
                </nav>
            </div>
        </header>
    )
}