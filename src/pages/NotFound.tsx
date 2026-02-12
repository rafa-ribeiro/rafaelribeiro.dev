import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Layout>
      <main className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Voltar para home
        </Link>
      </main>
    </Layout>
  )
}