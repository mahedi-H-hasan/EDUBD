import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "Ayman Sadiq",
      role: "CEO & Co-Founder",
      image: "https://ui-avatars.com/api/?name=Ayman+Sadiq&background=1CAB5E&color=fff&size=200",
      bio: "Visionary leader passionate about democratizing education in Bangladesh.",
    },
    {
      name: "Munzereen Shahid",
      role: "Head of English",
      image: "https://ui-avatars.com/api/?name=Munzereen+Shahid&background=3B82F6&color=fff&size=200",
      bio: "Bangladesh's most popular English teacher with 5M+ YouTube subscribers.",
    },
    {
      name: "Sayed Hasan",
      role: "Head of Science",
      image: "https://ui-avatars.com/api/?name=Sayed+Hasan&background=8B5CF6&color=fff&size=200",
      bio: "Renowned physics educator making complex concepts simple and engaging.",
    },
    {
      name: "Farhan Kabir",
      role: "Head of Job Prep",
      image: "https://ui-avatars.com/api/?name=Farhan+Kabir&background=EF4444&color=fff&size=200",
      bio: "Career expert who has helped thousands land government and private jobs.",
    },
  ];

  const milestones = [
    { year: "2015", event: "EDUBD was founded with a vision to transform education in Bangladesh" },
    { year: "2017", event: "Launched first 100 courses and reached 50,000 students" },
    { year: "2019", event: "Introduced live interactive classes and crossed 500,000 students" },
    { year: "2021", event: "Launched mobile app and expanded to international students" },
    { year: "2023", event: "Crossed 1 million students and 200+ courses milestone" },
    { year: "2026", event: "Expanding with AI-powered personalized learning experiences" },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f6e3c] via-[#1CAB5E] to-[#34c97b] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About EDUBD
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            We are on a mission to make quality education accessible to every student in Bangladesh, 
            regardless of their location or financial background.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                EDUBD was built on a simple belief: every student in Bangladesh deserves access to 
                world-class education. We bring together the country&apos;s finest educators to create 
                engaging, effective, and affordable learning experiences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From SSC to university admission, from English speaking to programming — we offer 
                courses in Bangla that help students achieve their dreams without the barrier of 
                language or geography.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1M+", label: "Students Enrolled" },
                  { value: "500+", label: "Courses Available" },
                  { value: "200+", label: "Expert Instructors" },
                  { value: "98%", label: "Student Satisfaction" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-[#1CAB5E]">{value}</p>
                    <p className="text-sm text-gray-600 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center">
              <div className="text-8xl mb-6">🇧🇩</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proudly Bangladeshi</h3>
              <p className="text-gray-600">
                Born in Bangladesh, built for Bangladesh. Our content is crafted specifically for 
                the Bangladeshi education system and job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "Quality First", desc: "Every course goes through rigorous quality review before publication." },
              { icon: "🤝", title: "Accessibility", desc: "Affordable pricing and free courses ensure no student is left behind." },
              { icon: "💡", title: "Innovation", desc: "We continuously evolve our platform with cutting-edge learning technology." },
              { icon: "❤️", title: "Student Success", desc: "Our instructors are committed to the success of every student." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 pl-12 relative">
                  <div className="absolute left-0 w-8 h-8 bg-[#1CAB5E] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    ✓
                  </div>
                  <div>
                    <span className="text-[#1CAB5E] font-bold text-lg">{year}</span>
                    <p className="text-gray-700 mt-1">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-gray-500 mt-2">The passionate people behind EDUBD</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, image, bio }) => (
              <div key={name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm text-center">
                <div className="pt-8 pb-4 px-4">
                  <Image
                    src={image}
                    alt={name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                    unoptimized
                  />
                  <h3 className="font-bold text-gray-900">{name}</h3>
                  <p className="text-sm text-[#1CAB5E] mb-3">{role}</p>
                  <p className="text-sm text-gray-600">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1CAB5E] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the EDUBD Family</h2>
          <p className="text-green-100 mb-8 text-lg">
            Whether you&apos;re a student or an educator, there&apos;s a place for you at EDUBD.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/signup"
              className="px-6 py-3 bg-white text-[#1CAB5E] rounded-full font-semibold hover:bg-green-50 transition-colors"
            >
              Start Learning
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
