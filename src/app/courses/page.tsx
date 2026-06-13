"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import CourseCard from "@/components/CourseCard";
import { courses, categories } from "@/lib/data";
import { Suspense } from "react";

function CoursesContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState(searchParams.get("price") || "all");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [sortBy, setSortBy] = useState("popular");

  const filtered = useMemo(() => {
    let result = [...courses];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((c) => c.category === selectedCategory);
    }

    if (selectedLevel !== "all") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    if (selectedPrice === "free") {
      result = result.filter((c) => c.isFree);
    } else if (selectedPrice === "paid") {
      result = result.filter((c) => !c.isFree);
    }

    switch (sortBy) {
      case "popular":
        result = result.sort((a, b) => b.studentCount - a.studentCount);
        break;
      case "rating":
        result = result.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        result = result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result = result.sort((a, b) => Number(b.id) - Number(a.id));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedLevel, selectedPrice, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-gradient-to-r from-[#1CAB5E] to-[#0f6e3c] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">All Courses</h1>
          <p className="text-green-100">Find the perfect course to achieve your goals</p>
          {/* Search */}
          <div className="mt-6 max-w-xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, topics, instructors..."
                className="w-full pl-4 pr-10 py-3 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-20">
              <h2 className="font-semibold text-gray-900 mb-4">Filters</h2>

              {/* Category */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Category</h3>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                      selectedCategory === "all"
                        ? "bg-[#1CAB5E] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 ${
                        selectedCategory === cat.id
                          ? "bg-[#1CAB5E] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{cat.icon}</span>
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Level</h3>
                <div className="space-y-1.5">
                  {["all", "Beginner", "Intermediate", "Advanced"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                        selectedLevel === level
                          ? "bg-[#1CAB5E] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {level === "all" ? "All Levels" : level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Price</h3>
                <div className="space-y-1.5">
                  {[
                    { value: "all", label: "All Prices" },
                    { value: "free", label: "Free" },
                    { value: "paid", label: "Paid" },
                  ].map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() => setSelectedPrice(value)}
                      className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                        selectedPrice === value
                          ? "bg-[#1CAB5E] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                  setSelectedPrice("all");
                  setSearchQuery("");
                }}
                className="w-full text-sm text-[#1CAB5E] border border-[#1CAB5E] py-2 rounded-lg hover:bg-green-50 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Course Grid */}
          <div className="flex-1">
            {/* Sort and count */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-gray-900">{filtered.length}</span> courses found
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#1CAB5E]"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense>
      <CoursesContent />
    </Suspense>
  );
}
