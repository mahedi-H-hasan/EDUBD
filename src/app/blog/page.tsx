import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1CAB5E] to-[#0f6e3c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">EDUBD Blog</h1>
          <p className="text-green-100">Educational insights, study tips, and career guidance</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Featured post */}
        <Link href={`/blog/${featured.id}`} className="block group mb-10">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow md:flex">
            <Image
              src={featured.image}
              alt={featured.title}
              width={600}
              height={400}
              className="w-full md:w-80 object-cover h-64 md:h-auto flex-shrink-0"
              unoptimized
            />
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-[#1CAB5E] font-medium bg-green-50 px-2.5 py-1 rounded-full">
                  ⭐ Featured
                </span>
                <span className="text-xs text-gray-400">{featured.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1CAB5E] transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By <strong>{featured.author}</strong></span>
                <span>{featured.date}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="block group">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full object-cover h-44 group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-[#1CAB5E] font-medium bg-green-50 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#1CAB5E] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-[#1CAB5E] to-[#0f6e3c] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">📬 Subscribe to Our Newsletter</h2>
          <p className="text-green-100 mb-6">Get weekly study tips, exam updates, and course recommendations</p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none"
            />
            <button className="px-5 py-3 bg-white text-[#1CAB5E] rounded-xl font-semibold hover:bg-green-50 transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
