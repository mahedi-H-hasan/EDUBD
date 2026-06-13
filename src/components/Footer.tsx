import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#1CAB5E] rounded-full flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="text-2xl font-bold text-white">
                EDU<span className="text-[#1CAB5E]">BD</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Bangladesh&apos;s largest online learning platform. Learn from the best instructors
              and transform your future with quality education.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Facebook", icon: "f", href: "#" },
                { label: "YouTube", icon: "▶", href: "#" },
                { label: "Instagram", icon: "📷", href: "#" },
                { label: "LinkedIn", icon: "in", href: "#" },
              ].map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-700 hover:bg-[#1CAB5E] rounded-full flex items-center justify-center text-sm transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "SSC Courses", href: "/courses?category=ssc" },
                { label: "HSC Courses", href: "/courses?category=hsc" },
                { label: "Admission Prep", href: "/courses?category=admission" },
                { label: "Skills", href: "/courses?category=skills" },
                { label: "Language", href: "/courses?category=language" },
                { label: "Job Preparation", href: "/courses?category=job-prep" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#1CAB5E] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
                { label: "Press", href: "/press" },
                { label: "Become an Instructor", href: "/teach" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#1CAB5E] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Help Center", href: "/help" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Refund Policy", href: "/refund" },
                { label: "Sitemap", href: "/sitemap" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#1CAB5E] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold text-white mb-1">Contact</p>
              <p className="text-sm">📞 16910</p>
              <p className="text-sm">✉️ support@edubd.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* App download */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">Get the EDUBD App</p>
          <div className="flex gap-3">
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <span>🍎</span>
              <div>
                <p className="text-xs text-gray-400">Download on the</p>
                <p className="text-sm font-semibold text-white">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <span>▶</span>
              <div>
                <p className="text-xs text-gray-400">Get it on</p>
                <p className="text-sm font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EDUBD. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ in Bangladesh 🇧🇩
          </p>
        </div>
      </div>
    </footer>
  );
}
