import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function About() {
  return (
    <Layout>
      <Seo title="Sobre — Rafael Ribeiro" description="Conheça mais sobre mim" />
      <main>
        <h1 className="text-4xl font-bold mb-6">Sobre mim</h1>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-600 mb-4">
            Sou um desenvolvedor backend
          </p>
          <p className="text-gray-600">
            Neste blog compartilho conhecimento sobre desenvolvimento de software, arquitetura e boas práticas.
          </p>
        </div>
      </main>
    </Layout>
  )
}