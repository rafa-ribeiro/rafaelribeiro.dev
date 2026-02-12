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
      console.log('Posts carregados:', data) // Debug
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    <Layout>
      <Seo title="Blog — Rafael Ribeiro" description="Todos os artigos do meu blog" />
      <main>
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-gray-600 mb-8">
          Explore todos os artigos publicados.
        </p>
        <div className="space-y-6">
          {loading ? (
            <p className="text-gray-500">Carregando posts...</p>
          ) : posts.length > 0 ? (
            posts.map(post => (
              <article key={post.slug} className="border-b border-gray-200 pb-6">
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition mb-2">
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
      </main>
    </Layout>
  )
}