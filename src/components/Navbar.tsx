"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1CAB5E] text-white text-sm py-1.5 text-center">
        🎉 New courses added! Use code <strong>EDUBD20</strong> for 20% off.{" "}
        <Link href="/courses" className="underline font-medium">
          Browse Courses →
        </Link>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-[#1CAB5E] rounded-full flex items-center justify-center text-white font-bold text-sm">
              E
            </div>
            <span className="text-xl font-bold text-gray-900">
              EDU<span className="text-[#1CAB5E]">BD</span>
            </span>
          </Link>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, topics, instructors..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#1CAB5E] focus:ring-1 focus:ring-[#1CAB5E]"
              />
              <Link
                href={`/courses${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ""}`}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1CAB5E]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/courses" className="hover:text-[#1CAB5E] transition-colors">Courses</Link>
            <Link href="/live" className="hover:text-[#1CAB5E] transition-colors flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Live Classes
            </Link>
            <Link href="/blog" className="hover:text-[#1CAB5E] transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-[#1CAB5E] transition-colors">About</Link>
          </nav>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-[#1CAB5E] transition-colors px-3 py-2"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium text-white bg-[#1CAB5E] hover:bg-[#17954f] transition-colors px-4 py-2 rounded-full"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#1CAB5E]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-4 py-3">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#1CAB5E]"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/courses", label: "Courses" },
                { href: "/live", label: "Live Classes" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 px-3 text-gray-700 hover:text-[#1CAB5E] hover:bg-green-50 rounded-lg transition-colors font-medium"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex gap-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2 border border-[#1CAB5E] text-[#1CAB5E] rounded-full font-medium text-sm hover:bg-green-50"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2 bg-[#1CAB5E] text-white rounded-full font-medium text-sm hover:bg-[#17954f]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
