import Image from "next/image";
import { liveClasses, courses } from "@/lib/data";
import Link from "next/link";

export default function LivePage() {
  const liveCourses = courses.filter((c) => c.isPopular).slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse inline-block"></span>
            <span className="text-red-400 font-semibold uppercase text-sm tracking-wider">Live &amp; Upcoming</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Live Classes</h1>
          <p className="text-gray-400">
            Interactive live sessions with top instructors. Ask questions, join discussions, and learn in real time.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Classes</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {liveClasses.map((cls) => {
              const date = new Date(cls.scheduledAt);
              return (
                <div key={cls.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <Image
                      src={cls.thumbnail}
                      alt={cls.title}
                      width={400}
                      height={225}
                      className="w-full object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-14 h-14 bg-red-500/90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block"></span>
                      LIVE SOON
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">{cls.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Instructor: <strong>{cls.instructor}</strong>
                    </p>
                    <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Date</span>
                        <span className="font-medium">
                          {date.toLocaleDateString("en-BD", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Time</span>
                        <span className="font-medium">
                          {date.toLocaleTimeString("en-BD", { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Duration</span>
                        <span className="font-medium">{cls.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Enrolled</span>
                        <span className="font-medium">{cls.enrolled.toLocaleString()} students</span>
                      </div>
                    </div>
                    <button className="w-full py-2.5 bg-[#1CAB5E] text-white rounded-xl font-semibold hover:bg-[#17954f] transition-colors">
                      🔔 Register &amp; Get Reminder
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-12 bg-white rounded-2xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">How Live Classes Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "🔍", title: "Find a Class", desc: "Browse upcoming live sessions and choose what interests you" },
              { step: "2", icon: "📝", title: "Register", desc: "Sign up to reserve your spot and get a reminder notification" },
              { step: "3", icon: "💻", title: "Join Live", desc: "Click the link at class time and join on any device" },
              { step: "4", icon: "❓", title: "Ask & Learn", desc: "Interact with the instructor, ask questions in real-time" },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-[#1CAB5E] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step}
                </div>
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Courses with Live Classes</h2>
            <Link href="/courses" className="text-[#1CAB5E] hover:underline text-sm font-medium">
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {liveCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`} className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={400}
                    height={225}
                    className="w-full object-cover h-36"
                    unoptimized
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-[#1CAB5E] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{course.instructor}</p>
                    <p className="font-semibold text-gray-900 mt-2 text-sm">
                      {course.isFree ? "Free" : `৳${course.price.toLocaleString()}`}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
