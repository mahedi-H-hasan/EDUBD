import Link from "next/link";
import Image from "next/image";
import { Course } from "@/lib/data";

interface CourseCardProps {
  course: Course;
  compact?: boolean;
}

export default function CourseCard({ course, compact = false }: CourseCardProps) {
  const discountPercent = course.originalPrice > 0
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative overflow-hidden">
          <Image
            src={course.thumbnail}
            alt={course.title}
            width={400}
            height={225}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          {/* Badges */}
          <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
            {course.isPopular && (
              <span className="px-2 py-0.5 bg-orange-500 text-white text-xs font-semibold rounded-full">
                🔥 Popular
              </span>
            )}
            {course.isFree && (
              <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-semibold rounded-full">
                Free
              </span>
            )}
            {course.isLive && (
              <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                Live
              </span>
            )}
            {discountPercent > 0 && !course.isFree && (
              <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">
                {discountPercent}% Off
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Category & Language */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-[#1CAB5E] font-medium uppercase tracking-wide">
              {course.category.replace("-", " ")}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500">{course.language}</span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#1CAB5E] transition-colors">
            {course.title}
          </h3>

          {!compact && (
            <>
              {/* Instructor */}
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src={course.instructorImage}
                  alt={course.instructor}
                  width={24}
                  height={24}
                  className="rounded-full"
                  unoptimized
                />
                <span className="text-xs text-gray-600">{course.instructor}</span>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  ⭐ <span className="text-yellow-500 font-semibold">{course.rating}</span>
                  <span>({course.reviewCount.toLocaleString()})</span>
                </span>
                <span>👥 {course.studentCount.toLocaleString()}</span>
                <span>⏱ {course.duration}</span>
              </div>
            </>
          )}

          {/* Price */}
          <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {course.isFree ? (
                <span className="text-lg font-bold text-[#1CAB5E]">Free</span>
              ) : (
                <>
                  <span className="text-lg font-bold text-gray-900">
                    ৳{course.price.toLocaleString()}
                  </span>
                  {course.originalPrice > course.price && (
                    <span className="text-sm text-gray-400 line-through">
                      ৳{course.originalPrice.toLocaleString()}
                    </span>
                  )}
                </>
              )}
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {course.level}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
