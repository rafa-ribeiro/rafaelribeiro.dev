import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center text-center py-24">
        
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
          404
        </h1>

        <p className="text-xl mb-10 opacity-70">
          Página não encontrada.
        </p>

        <Link
          to="/"
          className="
            px-6 py-3 rounded-md
            border border-border
            bg-hover
            hover:border-accent
            hover:text-accent
            hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]
            transition-all duration-200
          "
        >
          Voltar para home
        </Link>

      </main>
    </Layout>
  )
}
