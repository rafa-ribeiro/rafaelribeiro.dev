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
            setPosts(data.slice(0, 3))
            setLoading(false)
        })
    }, [])

    return (
        <Layout>
            <Seo
                title="Home — Rafael Ribeiro"
                description="Blog pessoal sobre desenvolvimento de software e computação"
            />

            <main>
                <h1 className="text-4xl font-bold mb-6">
                    Bem-vindo ao meu blog
                </h1>

                <p className="text-lg mb-8 opacity-80">
                    Aqui compartilho coisas do meu interesse e quem sabe,
                    possa ser do seu também.
                </p>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-6">
                        Últimos artigos
                    </h2>

                    <div className="space-y-8">
                        {loading ? (
                            <p className="opacity-60">
                                Carregando posts...
                            </p>
                        ) : posts.length > 0 ? (
                            posts.map(post => (
                                <article
                                    key={post.slug}
                                    className="
                                        border border-border
                                        rounded-lg p-6
                                        bg-hover/40
                                        hover:translate-x-1
                                        transition-all duration-200
                                    "

                                >
                                    <Link to={`/blog/${post.slug}`}>
                                        <h3
                                            className="
                                                text-xl font-semibold mb-2
                                                hover:text-accent
                                                transition-colors duration-200
                                            "
                                        >
                                            {post.title}
                                        </h3>
                                    </Link>

                                    <p className="text-sm mb-2 opacity-60">
                                        {new Date(post.date).toLocaleDateString('pt-BR')}
                                    </p>

                                    <p className="opacity-80">
                                        {post.description}
                                    </p>
                                </article>
                            ))
                        ) : (
                            <p className="opacity-60">
                                Nenhum artigo publicado ainda.
                            </p>
                        )}
                    </div>
                </div>
            </main>
        </Layout>
    )
}
