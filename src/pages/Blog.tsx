import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { getAllPosts } from '../utils/posts'
import Seo from "../components/Seo"
import type { PostIndex } from '../types/post'

export default function Blog() {
  const [posts, setPosts] = useState<PostIndex[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts().then(data => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    <Layout>
      <Seo
        title="Blog — Rafael Ribeiro"
        description="Todos os artigos do meu blog"
      />

      <main>
        <h1 className="text-4xl font-bold mb-6">
          Blog
        </h1>

        <p className="mb-8 text-text opacity-70">
          Explore todos os artigos publicados.
        </p>

        <div className="space-y-8">
          {loading ? (
            <p className="text-text opacity-60">
              Carregando posts...
            </p>
          ) : posts.length > 0 ? (
            posts.map(post => (
              <article
                key={post.slug}
                className="
                  border-b border-border
                  pb-6
                  hover:translate-x-1
                  transition-transform duration-200
                  transition-colors
                "
              >
                <Link to={`/blog/${post.slug}`}>
                  <h2
                    className="
                      text-2xl font-semibold mb-2
                      text-text
                      hover:text-accent
                      transition-colors duration-200
                    "
                  >
                    {post.title}
                  </h2>
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
      </main>
    </Layout>
  )
}
