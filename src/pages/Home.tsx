import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { getAllPosts } from '../utils/posts'
import type { PostIndex } from '../types/post'

export default function Home() {
    const [posts, setPosts] = useState<PostIndex[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllPosts().then(data => {
            setPosts(data.slice(0, 3)) // Últimos 3 posts
            setLoading(false)
        })
    }, [])

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
                        {loading ? (
                            <p className="text-gray-500">Carregando posts...</p>
                        ) : posts.length > 0 ? (
                            posts.map(post => (
                                <article key={post.slug} className="border-b border-gray-200 pb-6">
                                    <Link to={`/blog/${post.slug}`}>
                                        <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition mb-2">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {new Date(post.date).toLocaleDateString('pt-BR')}
                                    </p>
                                    <p className="text-gray-600">{post.description}</p>
                                </article>
                            ))
                        ) : (
                            <p className="text-gray-500">Nenhum artigo publicado ainda.</p>
                        )}
                    </div>
                </div>
            </main>
        </Layout>
    )
}