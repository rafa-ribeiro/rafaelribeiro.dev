export interface PostMetadata {
  title: string
  description: string
  date: string
  slug: string
}

export interface Post extends PostMetadata {
  content: string
}

export interface PostIndex extends PostMetadata {
  id: string
}