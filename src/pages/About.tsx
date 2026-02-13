import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function About() {
  return (
    <Layout>
      <Seo
        title="Sobre — Rafael Ribeiro"
        description="Conheça mais sobre mim"
      />

      <main>
        <h1 className="text-4xl font-bold mb-6">
          Sobre mim
        </h1>

        <div className="max-w-2xl space-y-4 border-l-2 border-accent pl-6">
          <p className="opacity-80 leading-relaxed">
            Sou um desenvolvedor backend.
          </p>

          <p className="opacity-80 leading-relaxed">
            Neste blog compartilho conhecimento sobre desenvolvimento de
            software, arquitetura e boas práticas.
          </p>
        </div>
      </main>
    </Layout>
  )
}
