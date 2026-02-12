import type { Post, PostIndex } from '../types/post'

let cachedPosts: PostIndex[] = []

export async function getAllPosts(): Promise<PostIndex[]> {
  if (cachedPosts.length > 0) return cachedPosts

  try {
    const response = await fetch('/posts-index.json')
    
    if (!response.ok) {
      console.warn('Arquivo posts-index.json não encontrado')
      return []
    }
    
    const posts = await response.json()
    cachedPosts = posts.sort((a: PostIndex, b: PostIndex) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    return cachedPosts
  } catch (error) {
    console.warn('Erro ao carregar posts:', error)
    return []
  }
}

export async function getPostContent(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`/posts/${slug}.json`)
    if (!response.ok) {
      console.warn(`Post ${slug} não encontrado`)
      return null
    }
    return response.json()
  } catch (error) {
    console.warn(`Erro ao carregar post ${slug}:`, error)
    return null
  }
}