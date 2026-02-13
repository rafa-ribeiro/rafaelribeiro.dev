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
        <h1 className="text-4xl font-bold leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-sm mb-10 opacity-60">
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </p>

        <div
          className="
            space-y-6
            text-base
            leading-7
            tracking-[0.01em]

            [&_h2]:text-3xl
            [&_h2]:font-semibold
            [&_h2]:mt-14
            [&_h2]:mb-6
            [&_h2]:tracking-tight
            [&_h2]:text-accent/90
            dark:[&_h2]:text-accent/80
            [&_h2]:pb-2
            [&_h2]:border-b
            [&_h2]:border-border/40

            [&_h3]:text-2xl
            [&_h3]:font-semibold
            [&_h3]:mt-10
            [&_h3]:mb-4
            
            [&_p]:opacity-90
            
            [&_a]:text-accent
            [&_a]:underline-offset-4
            [&_a]:hover:underline
            
            [&_ul]:list-disc
            [&_ul]:pl-6
            [&_ul]:space-y-2
            [&_li]:mb-2
            
            [&_code]:font-mono
            [&_code]:text-sm
            [&_code]:bg-hover
            [&_code]:text-accent
            [&_code]:px-1.5
            [&_code]:py-0.5
            [&_code]:rounded

            [&_pre]:font-mono
            [&_pre]:text-sm
            [&_pre]:bg-hover
            [&_pre]:border
            [&_pre]:border-border
            [&_pre]:p-5
            [&_pre]:rounded-xl
            [&_pre]:overflow-x-auto
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Layout>
  )
}
