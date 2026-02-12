import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

import { getPostContent } from '../utils/posts'
import type { Post } from '../types/post'
import Seo from "../components/Seo";

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
    return <Layout><p>Carregando...</p></Layout>
  }

  if (!post) {
    return <Layout><p className="text-red-600">Post não encontrado</p></Layout>
  }

  return (
    <Layout>
        <Seo title={post.title} description={post.description} />
        <article>
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-500 mb-8">
            {new Date(post.date).toLocaleDateString('pt-BR')}
            </p>
            <div 
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    </Layout>
  )
}