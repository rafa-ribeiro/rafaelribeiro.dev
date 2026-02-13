import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { getPostContent } from '../utils/posts'
import type { Post } from '../types/post'
import Seo from "../components/Seo"

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    getPostContent(slug).then(data => {
      setPost(data)
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return (
      <Layout>
        <p className="opacity-60">Carregando...</p>
      </Layout>
    )
  }

  if (!post) {
    return (
      <Layout>
        <p className="text-accent">Post não encontrado</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.description} />

      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <p className="text-sm mb-10 opacity-60">
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </p>

        <div
          className="
            space-y-6
            leading-relaxed

            [&_h2]:text-2xl
            [&_h2]:font-semibold
            [&_h2]:mt-10
            [&_h2]:mb-4

            [&_h3]:text-xl
            [&_h3]:font-semibold
            [&_h3]:mt-8
            [&_h3]:mb-3
            
            [&_p]:opacity-90
            
            [&_ul]:list-disc
            [&_ul]:pl-6
            [&_li]:mb-2
            
            [&_code]:bg-hover
            [&_code]:text-accent
            [&_code]:px-1
            [&_code]:py-0.5
            [&_code]:rounded

            [&_pre]:bg-hover
            [&_pre]:border
            [&_pre]:border-border
            [&_pre]:p-4
            [&_pre]:rounded-lg
            [&_pre]:overflow-x-auto
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Layout>
  )
}
