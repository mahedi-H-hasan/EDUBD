import Link from "next/link";
import Image from "next/image";
import CourseCard from "@/components/CourseCard";
import {
  courses,
  categories,
  testimonials,
  liveClasses,
  blogPosts,
  stats,
} from "@/lib/data";

export default function Home() {
  const popularCourses = courses.filter((c) => c.isPopular);
  const freeCourses = courses.filter((c) => c.isFree);

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#0f6e3c] via-[#1CAB5E] to-[#34c97b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                🇧🇩 Bangladesh&apos;s #1 Online Learning Platform
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                শিখো, বাড়ো,{" "}
                <span className="text-yellow-300">সফল হও</span>
                <br />
                <span className="text-3xl lg:text-4xl text-green-100">
                  Learn, Grow, Succeed
                </span>
              </h1>
              <p className="text-lg text-green-100 mb-8 max-w-lg">
                Join over 1 million students learning from Bangladesh&apos;s
                best instructors. Courses in SSC, HSC, English, BCS, Programming,
                and more — all in Bangla.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1CAB5E] rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg"
                >
                  Browse All Courses
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
                >
                  Start for Free
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
                {[
                  { value: "1M+", label: "Students" },
                  { value: "500+", label: "Courses" },
                  { value: "200+", label: "Instructors" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="text-green-200 text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🎓</div>
                    <p className="text-xl font-semibold">EDUBD</p>
                    <p className="text-green-200 text-sm">Learn from anywhere</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white text-gray-900 rounded-xl p-3 shadow-xl">
                  <p className="text-xs text-gray-500 font-medium">Live Right Now</p>
                  <p className="font-semibold text-sm">HSC Physics Class</p>
                  <p className="text-xs text-[#1CAB5E]">🔴 1,240 students</p>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-xl p-3 shadow-xl">
                  <p className="text-xs text-gray-500 font-medium">Today&apos;s Learner</p>
                  <p className="font-semibold text-sm">Rafi Ahmed</p>
                  <p className="text-xs text-yellow-500">⭐⭐⭐⭐⭐ Just enrolled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ label, value, icon }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-3xl">{icon}</span>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{value}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Browse by Category</h2>
              <p className="text-gray-500 mt-1">Find the perfect course for your goals</p>
            </div>
            <Link href="/courses" className="text-[#1CAB5E] font-medium hover:underline text-sm hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/courses?category=${cat.id}`}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#1CAB5E] hover:shadow-md transition-all group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className="text-xs font-semibold text-gray-700 text-center group-hover:text-[#1CAB5E]">
                  {cat.name}
                </span>
                <span className="text-xs text-gray-400">{cat.courseCount} courses</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">🔥 Popular Courses</h2>
              <p className="text-gray-500 mt-1">Most enrolled by students this month</p>
            </div>
            <Link href="/courses" className="text-[#1CAB5E] font-medium hover:underline text-sm hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {popularCourses.slice(0, 8).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1CAB5E] text-white rounded-full font-semibold hover:bg-[#17954f] transition-colors"
            >
              Browse All Courses
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Classes */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse inline-block"></span>
                Upcoming Live Classes
              </h2>
              <p className="text-gray-500 mt-1">Join live interactive sessions with top instructors</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {liveClasses.map((cls) => (
              <div key={cls.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image
                    src={cls.thumbnail}
                    alt={cls.title}
                    width={400}
                    height={225}
                    className="w-full object-cover"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block"></span>
                    LIVE SOON
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{cls.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">By {cls.instructor}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">👥 {cls.enrolled.toLocaleString()} enrolled</span>
                    <span className="text-gray-500">⏱ {cls.duration}</span>
                  </div>
                  <button className="mt-3 w-full py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg font-medium text-sm transition-colors border border-red-200">
                    🔔 Set Reminder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EDUBD */}
      <section className="py-16 bg-gradient-to-r from-[#1CAB5E] to-[#0f6e3c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose EDUBD?</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              We make quality education accessible to every student in Bangladesh
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎥", title: "HD Video Lessons", desc: "Watch crystal-clear pre-recorded and live video lessons anytime" },
              { icon: "📝", title: "Practice Tests", desc: "Thousands of MCQ and written practice questions with explanations" },
              { icon: "👨‍🏫", title: "Expert Instructors", desc: "Learn from Bangladesh's most talented teachers and professionals" },
              { icon: "📱", title: "Learn Anywhere", desc: "Access courses on mobile, tablet, or desktop — online or offline" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-green-100 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Courses */}
      {freeCourses.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">🎁 Free Courses</h2>
                <p className="text-gray-500 mt-1">Start learning today — no payment required</p>
              </div>
              <Link href="/courses?price=free" className="text-[#1CAB5E] font-medium hover:underline text-sm hidden sm:block">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {freeCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">What Our Students Say 💬</h2>
            <p className="text-gray-500 mt-2">Join millions of satisfied learners</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex text-yellow-400 mb-3">
                  {"⭐".repeat(t.rating)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                    unoptimized
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">📰 Latest from Blog</h2>
              <p className="text-gray-500 mt-1">Tips, insights and educational resources</p>
            </div>
            <Link href="/blog" className="text-[#1CAB5E] font-medium hover:underline text-sm hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full object-cover h-40 group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-[#1CAB5E] font-medium bg-green-50 px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#1CAB5E] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join 1 million+ students already learning on EDUBD. Start for free today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#1CAB5E] text-white rounded-full font-semibold hover:bg-[#17954f] transition-colors shadow-lg text-lg"
            >
              Get Started for Free
            </Link>
            <Link
              href="/courses"
              className="px-8 py-4 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition-colors text-lg"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
