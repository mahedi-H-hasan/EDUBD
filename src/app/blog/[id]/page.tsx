import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ id: p.id }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.id !== id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#1CAB5E]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#1CAB5E]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.category}</span>
        </nav>

        {/* Post header */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="w-full object-cover h-64 sm:h-80"
            unoptimized
          />
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs text-[#1CAB5E] font-medium bg-green-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 bg-[#1CAB5E] rounded-full flex items-center justify-center text-white font-bold">
                {post.author[0]}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                <p className="text-xs text-gray-500">EDUBD Instructor</p>
              </div>
            </div>
            {/* Article body */}
            <div className="prose max-w-none mt-6">
              <p className="text-gray-700 leading-relaxed text-base mb-4">{post.excerpt}</p>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                Education in Bangladesh has been transforming rapidly with the advent of digital learning 
                platforms. Students now have access to world-class content from the comfort of their homes, 
                breaking traditional barriers of geography and socioeconomic status.
              </p>
              <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Key Takeaways</h2>
              <ul className="space-y-2 text-gray-700">
                {["Consistent practice is more valuable than cramming", "Use active recall techniques for better retention", "Create a dedicated study space free from distractions", "Take regular breaks to improve focus and memory", "Practice with past exam papers and mock tests"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#1CAB5E] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed text-base mt-6">
                At EDUBD, we believe that every student has the potential to excel with the right 
                guidance and resources. Our platform is designed to make quality education accessible 
                and engaging for students across Bangladesh.
              </p>
            </div>

            {/* Share */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Share:</span>
              {["Facebook", "Twitter", "WhatsApp"].map((platform) => (
                <button
                  key={platform}
                  className="text-sm text-[#1CAB5E] hover:underline"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {related.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex gap-4 p-4">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    width={100}
                    height={80}
                    className="rounded-lg object-cover w-24 h-20 shrink-0"
                    unoptimized
                  />
                  <div>
                    <p className="text-xs text-[#1CAB5E] mb-1">{relatedPost.category}</p>
                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#1CAB5E] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{relatedPost.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
