import PostPageClient from "./PostPageClient"
import { blogPosts } from "../postsData"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const frSlugs = Object.keys(blogPosts.fr)
  const esSlugs = Object.keys(blogPosts.es)
  const uniqueSlugs = Array.from(new Set([...frSlugs, ...esSlugs]))
  return uniqueSlugs.map((slug) => ({ slug }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const exists = blogPosts.fr[slug as keyof typeof blogPosts.fr] || blogPosts.es[slug as keyof typeof blogPosts.es]
  if (!exists) {
    notFound()
  }
  return <PostPageClient params={params} />
}
