import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'posts')
const INDEX_FILE = path.join(process.cwd(), 'public', 'posts-index.json')

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Read all markdown files
const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'))

const postsIndex = []

files.forEach(file => {
  const filePath = path.join(POSTS_DIR, file)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  // Convert markdown to HTML
  const htmlContent = marked(content)

  const post = {
    ...data,
    content: htmlContent,
    id: data.slug
  }

  // Save individual post as JSON
  const outputPath = path.join(OUTPUT_DIR, `${data.slug}.json`)
  fs.writeFileSync(outputPath, JSON.stringify(post, null, 2))

  // Add to index (without content)
  postsIndex.push({
    title: data.title,
    description: data.description,
    date: data.date,
    slug: data.slug,
    id: data.slug
  })
})

// Save index
fs.writeFileSync(INDEX_FILE, JSON.stringify(postsIndex, null, 2))

console.log(`✅ ${files.length} processed posts.`)
console.log(`📄 Files generated in /public/posts/`)
console.log(`📋 Index created in /public/posts-index.json`)