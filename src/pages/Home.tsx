import Layout from "../components/Layout";
import Seo from "../components/Seo";


export default function Home() {
    return (
        <Layout>
            <Seo title="Home — Rafael Ribeiro" description="Blog pessoal sobre desenvolvimento de software e computação" />
            <main>
                <h1 className="text-4xl font-bold mb-6">Bem-vindo ao meu blog</h1>
                <p className="text-lg text-gray-600 mb-8">
                Aqui compartilho coisas do meu interesse e quem sabe, possa ser do seu também.
                </p>
                <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Últimos artigos</h2>
                <div className="space-y-6">
                    {/* Posts here */}
                    <p className="text-gray-500">Nenhum artigo publicado ainda.</p>
                </div>
                </div>
            </main>
        </Layout>
    )
}