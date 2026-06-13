import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/data";

interface CourseDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) notFound();

  const discountPercent =
    course.originalPrice > 0
      ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
      : 0;

  const related = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top banner */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Course info */}
            <div className="flex-1">
              {/* Breadcrumb */}
              <nav className="text-sm text-gray-400 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/courses" className="hover:text-white">Courses</Link>
                <span className="mx-2">/</span>
                <Link href={`/courses?category=${course.category}`} className="hover:text-white capitalize">
                  {course.category.replace("-", " ")}
                </Link>
              </nav>

              {/* Badges */}
              <div className="flex gap-2 mb-3 flex-wrap">
                {course.isPopular && (
                  <span className="px-2.5 py-0.5 bg-orange-500 text-white text-xs font-semibold rounded-full">🔥 Bestseller</span>
                )}
                {course.isFree && (
                  <span className="px-2.5 py-0.5 bg-green-500 text-white text-xs font-semibold rounded-full">Free</span>
                )}
                {discountPercent > 0 && (
                  <span className="px-2.5 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">{discountPercent}% Off</span>
                )}
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold mb-3">{course.title}</h1>
              <p className="text-gray-300 mb-5">{course.description}</p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-5">
                <span className="flex items-center gap-1">
                  ⭐ <span className="text-yellow-400 font-semibold">{course.rating}</span>
                  <span>({course.reviewCount.toLocaleString()} ratings)</span>
                </span>
                <span>👥 {course.studentCount.toLocaleString()} students</span>
                <span>⏱ {course.duration}</span>
                <span>🌐 {course.language}</span>
                <span>📊 {course.level}</span>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3">
                <Image
                  src={course.instructorImage}
                  alt={course.instructor}
                  width={40}
                  height={40}
                  className="rounded-full"
                  unoptimized
                />
                <div>
                  <p className="text-xs text-gray-400">Instructor</p>
                  <p className="font-medium">{course.instructor}</p>
                </div>
              </div>
            </div>

            {/* Price card - desktop shows floating card */}
            <div className="lg:w-80 shrink-0">
              <div className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-2xl sticky top-20">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  width={400}
                  height={225}
                  className="w-full object-cover"
                  unoptimized
                />
                <div className="p-5">
                  {course.isFree ? (
                    <p className="text-3xl font-bold text-[#1CAB5E] mb-1">Free</p>
                  ) : (
                    <div className="flex items-baseline gap-2 mb-1">
                      <p className="text-3xl font-bold">৳{course.price.toLocaleString()}</p>
                      {course.originalPrice > course.price && (
                        <p className="text-lg text-gray-400 line-through">৳{course.originalPrice.toLocaleString()}</p>
                      )}
                    </div>
                  )}
                  {discountPercent > 0 && (
                    <p className="text-sm text-green-600 font-medium mb-3">
                      🎉 {discountPercent}% discount applied!
                    </p>
                  )}
                  <button className="w-full py-3 bg-[#1CAB5E] text-white rounded-xl font-semibold hover:bg-[#17954f] transition-colors mb-3 text-lg">
                    {course.isFree ? "Enroll for Free" : "Enroll Now"}
                  </button>
                  <button className="w-full py-3 border-2 border-[#1CAB5E] text-[#1CAB5E] rounded-xl font-semibold hover:bg-green-50 transition-colors">
                    Add to Wishlist ♡
                  </button>
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-600">
                    {[
                      { icon: "⏱", text: `${course.duration} of content` },
                      { icon: "🌐", text: `Language: ${course.language}` },
                      { icon: "📊", text: `Level: ${course.level}` },
                      { icon: "📱", text: "Access on mobile & desktop" },
                      { icon: "🏆", text: "Certificate of completion" },
                      { icon: "♾️", text: "Lifetime access" },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex items-center gap-2">
                        <span>{icon}</span>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    30-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What you'll learn */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4">What you&apos;ll learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.topics.map((topic) => (
                  <div key={topic} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#1CAB5E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {topic}
                  </div>
                ))}
              </div>
            </div>

            {/* Course description */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4">Course Description</h2>
              <p className="text-gray-700 leading-relaxed">{course.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Curriculum preview */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4">Course Curriculum</h2>
              <div className="space-y-2">
                {course.topics.map((topic, i) => (
                  <div key={topic} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-[#1CAB5E]/10 flex items-center justify-center text-sm font-semibold text-[#1CAB5E] shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-gray-800 font-medium">{topic}</span>
                    {i === 0 && (
                      <span className="ml-auto text-xs text-[#1CAB5E] bg-green-50 px-2 py-0.5 rounded-full">Preview</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4">About the Instructor</h2>
              <div className="flex items-start gap-4">
                <Image
                  src={course.instructorImage}
                  alt={course.instructor}
                  width={72}
                  height={72}
                  className="rounded-full"
                  unoptimized
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{course.instructor}</h3>
                  <p className="text-sm text-gray-500 mb-2 capitalize">{course.category.replace("-", " ")} Instructor</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span>⭐ {course.rating} Rating</span>
                    <span>👥 {course.studentCount.toLocaleString()} Students</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    An experienced educator passionate about helping students succeed. 
                    Known for clear explanations and practical teaching methods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile price card */}
          <div className="lg:hidden">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              {course.isFree ? (
                <p className="text-2xl font-bold text-[#1CAB5E] mb-3">Free</p>
              ) : (
                <div className="flex items-baseline gap-2 mb-3">
                  <p className="text-2xl font-bold">৳{course.price.toLocaleString()}</p>
                  {course.originalPrice > course.price && (
                    <p className="text-base text-gray-400 line-through">৳{course.originalPrice.toLocaleString()}</p>
                  )}
                </div>
              )}
              <button className="w-full py-3 bg-[#1CAB5E] text-white rounded-xl font-semibold hover:bg-[#17954f] transition-colors mb-3">
                {course.isFree ? "Enroll for Free" : "Enroll Now"}
              </button>
            </div>
          </div>

          {/* Side (empty on large) */}
          <div className="hidden lg:block" />
        </div>

        {/* Related courses */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((c) => (
                <Link key={c.id} href={`/courses/${c.id}`} className="block group">
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src={c.thumbnail}
                      alt={c.title}
                      width={400}
                      height={225}
                      className="w-full object-cover h-36"
                      unoptimized
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-[#1CAB5E] transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{c.instructor}</p>
                      <p className="font-semibold text-gray-900 mt-2">
                        {c.isFree ? "Free" : `৳${c.price.toLocaleString()}`}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
