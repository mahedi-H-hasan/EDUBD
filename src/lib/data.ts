export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorImage: string;
  thumbnail: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  studentCount: number;
  duration: string;
  level: string;
  language: string;
  description: string;
  tags: string[];
  isLive?: boolean;
  isPopular?: boolean;
  isFree?: boolean;
  topics: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  courseCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  course: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export const categories: Category[] = [
  { id: "ssc", name: "SSC", icon: "📚", color: "bg-blue-100 text-blue-600", courseCount: 45 },
  { id: "hsc", name: "HSC", icon: "🎓", color: "bg-green-100 text-green-600", courseCount: 62 },
  { id: "admission", name: "Admission", icon: "🏫", color: "bg-yellow-100 text-yellow-600", courseCount: 38 },
  { id: "skills", name: "Skills", icon: "💡", color: "bg-purple-100 text-purple-600", courseCount: 120 },
  { id: "language", name: "Language", icon: "🌐", color: "bg-red-100 text-red-600", courseCount: 55 },
  { id: "job-prep", name: "Job Prep", icon: "💼", color: "bg-orange-100 text-orange-600", courseCount: 40 },
  { id: "programming", name: "Programming", icon: "💻", color: "bg-indigo-100 text-indigo-600", courseCount: 75 },
  { id: "bank", name: "Bank Exam", icon: "🏦", color: "bg-teal-100 text-teal-600", courseCount: 28 },
];

export const courses: Course[] = [
  {
    id: "1",
    title: "HSC Physics Full Course 2025",
    instructor: "Sayed Hasan",
    instructorImage: "https://ui-avatars.com/api/?name=Sayed+Hasan&background=1CAB5E&color=fff",
    thumbnail: "https://placehold.co/400x225/1CAB5E/white?text=HSC+Physics",
    category: "hsc",
    price: 1200,
    originalPrice: 2000,
    rating: 4.8,
    reviewCount: 1240,
    studentCount: 15420,
    duration: "80 hours",
    level: "Intermediate",
    language: "Bangla",
    description: "Complete HSC Physics course covering all chapters with detailed explanations, practice problems, and exam strategies.",
    tags: ["HSC", "Physics", "2025"],
    isPopular: true,
    topics: ["Mechanics", "Waves", "Electricity", "Optics", "Modern Physics"],
  },
  {
    id: "2",
    title: "English Speaking & Communication",
    instructor: "Munzereen Shahid",
    instructorImage: "https://ui-avatars.com/api/?name=Munzereen+Shahid&background=3B82F6&color=fff",
    thumbnail: "https://placehold.co/400x225/3B82F6/white?text=English+Course",
    category: "language",
    price: 800,
    originalPrice: 1500,
    rating: 4.9,
    reviewCount: 3820,
    studentCount: 48500,
    duration: "40 hours",
    level: "Beginner",
    language: "Bangla",
    description: "Master English speaking skills with practical exercises, real-life scenarios, and expert guidance.",
    tags: ["English", "Speaking", "Communication"],
    isPopular: true,
    topics: ["Pronunciation", "Grammar", "Vocabulary", "Conversation", "Writing"],
  },
  {
    id: "3",
    title: "SSC Math Complete Course",
    instructor: "Raihan Hossain",
    instructorImage: "https://ui-avatars.com/api/?name=Raihan+Hossain&background=F59E0B&color=fff",
    thumbnail: "https://placehold.co/400x225/F59E0B/white?text=SSC+Math",
    category: "ssc",
    price: 1000,
    originalPrice: 1800,
    rating: 4.7,
    reviewCount: 2100,
    studentCount: 22300,
    duration: "60 hours",
    level: "Beginner",
    language: "Bangla",
    description: "Complete SSC mathematics course with step-by-step solutions and practice tests.",
    tags: ["SSC", "Math", "Algebra"],
    isPopular: true,
    topics: ["Algebra", "Geometry", "Trigonometry", "Statistics", "Calculus Basics"],
  },
  {
    id: "4",
    title: "Python Programming for Beginners",
    instructor: "Tanvir Ahmed",
    instructorImage: "https://ui-avatars.com/api/?name=Tanvir+Ahmed&background=6366F1&color=fff",
    thumbnail: "https://placehold.co/400x225/6366F1/white?text=Python",
    category: "programming",
    price: 1500,
    originalPrice: 2500,
    rating: 4.6,
    reviewCount: 980,
    studentCount: 8750,
    duration: "50 hours",
    level: "Beginner",
    language: "Bangla",
    description: "Learn Python programming from scratch with hands-on projects and real-world applications.",
    tags: ["Python", "Programming", "Coding"],
    topics: ["Variables", "Functions", "OOP", "File Handling", "Web Scraping"],
  },
  {
    id: "5",
    title: "BCS Preparation Complete Guide",
    instructor: "Farhan Kabir",
    instructorImage: "https://ui-avatars.com/api/?name=Farhan+Kabir&background=EF4444&color=fff",
    thumbnail: "https://placehold.co/400x225/EF4444/white?text=BCS+Prep",
    category: "job-prep",
    price: 2000,
    originalPrice: 3500,
    rating: 4.8,
    reviewCount: 4200,
    studentCount: 35800,
    duration: "120 hours",
    level: "Advanced",
    language: "Bangla",
    description: "Complete BCS preparation covering all subjects with model tests and previous year questions.",
    tags: ["BCS", "Job", "Government"],
    isPopular: true,
    topics: ["Bangla", "English", "Math", "General Knowledge", "Bangladesh Affairs"],
  },
  {
    id: "6",
    title: "Web Development Full Stack",
    instructor: "Shakib Rahman",
    instructorImage: "https://ui-avatars.com/api/?name=Shakib+Rahman&background=14B8A6&color=fff",
    thumbnail: "https://placehold.co/400x225/14B8A6/white?text=Web+Dev",
    category: "programming",
    price: 3000,
    originalPrice: 5000,
    rating: 4.7,
    reviewCount: 1560,
    studentCount: 12400,
    duration: "150 hours",
    level: "Intermediate",
    language: "Bangla",
    description: "Complete full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js.",
    tags: ["Web", "HTML", "CSS", "JavaScript", "React"],
    topics: ["HTML & CSS", "JavaScript", "React", "Node.js", "Database"],
  },
  {
    id: "7",
    title: "HSC Biology Full Course",
    instructor: "Nusrat Jahan",
    instructorImage: "https://ui-avatars.com/api/?name=Nusrat+Jahan&background=EC4899&color=fff",
    thumbnail: "https://placehold.co/400x225/EC4899/white?text=HSC+Biology",
    category: "hsc",
    price: 1100,
    originalPrice: 1900,
    rating: 4.8,
    reviewCount: 1890,
    studentCount: 18600,
    duration: "70 hours",
    level: "Intermediate",
    language: "Bangla",
    description: "Comprehensive HSC Biology course with detailed diagrams, animations and exam tips.",
    tags: ["HSC", "Biology", "Science"],
    topics: ["Cell Biology", "Genetics", "Evolution", "Ecology", "Human Biology"],
  },
  {
    id: "8",
    title: "Graphic Design with Photoshop",
    instructor: "Imran Hossain",
    instructorImage: "https://ui-avatars.com/api/?name=Imran+Hossain&background=8B5CF6&color=fff",
    thumbnail: "https://placehold.co/400x225/8B5CF6/white?text=Graphic+Design",
    category: "skills",
    price: 1800,
    originalPrice: 3000,
    rating: 4.6,
    reviewCount: 760,
    studentCount: 6500,
    duration: "45 hours",
    level: "Beginner",
    language: "Bangla",
    description: "Learn graphic design fundamentals using Adobe Photoshop and Illustrator with real projects.",
    tags: ["Design", "Photoshop", "Graphics"],
    topics: ["Design Principles", "Typography", "Color Theory", "Photo Editing", "Logo Design"],
  },
  {
    id: "9",
    title: "IELTS Preparation Course",
    instructor: "Munzereen Shahid",
    instructorImage: "https://ui-avatars.com/api/?name=Munzereen+Shahid&background=3B82F6&color=fff",
    thumbnail: "https://placehold.co/400x225/0EA5E9/white?text=IELTS",
    category: "language",
    price: 2500,
    originalPrice: 4000,
    rating: 4.9,
    reviewCount: 5100,
    studentCount: 42000,
    duration: "55 hours",
    level: "Intermediate",
    language: "Bangla",
    description: "Complete IELTS preparation with reading, writing, listening, and speaking modules.",
    tags: ["IELTS", "English", "Abroad"],
    isPopular: true,
    topics: ["Listening", "Reading", "Writing", "Speaking", "Mock Tests"],
  },
  {
    id: "10",
    title: "Digital Marketing Masterclass",
    instructor: "Arif Hossain",
    instructorImage: "https://ui-avatars.com/api/?name=Arif+Hossain&background=F97316&color=fff",
    thumbnail: "https://placehold.co/400x225/F97316/white?text=Digital+Marketing",
    category: "skills",
    price: 2200,
    originalPrice: 3800,
    rating: 4.7,
    reviewCount: 1340,
    studentCount: 11200,
    duration: "60 hours",
    level: "Beginner",
    language: "Bangla",
    description: "Master digital marketing including SEO, Social Media, Content Marketing, and Google Ads.",
    tags: ["Marketing", "Digital", "SEO"],
    topics: ["SEO", "Social Media", "Content Marketing", "Email Marketing", "Analytics"],
  },
  {
    id: "11",
    title: "University Admission Test Prep",
    instructor: "Kamrul Islam",
    instructorImage: "https://ui-avatars.com/api/?name=Kamrul+Islam&background=1CAB5E&color=fff",
    thumbnail: "https://placehold.co/400x225/1CAB5E/white?text=Admission+Test",
    category: "admission",
    price: 1800,
    originalPrice: 3000,
    rating: 4.8,
    reviewCount: 3200,
    studentCount: 28500,
    duration: "90 hours",
    level: "Advanced",
    language: "Bangla",
    description: "Complete preparation for university admission tests with model tests and doubt sessions.",
    tags: ["Admission", "University", "Test Prep"],
    isPopular: true,
    topics: ["Physics", "Chemistry", "Biology", "Math", "English"],
  },
  {
    id: "12",
    title: "Free English Grammar Course",
    instructor: "Safayet Hossain",
    instructorImage: "https://ui-avatars.com/api/?name=Safayet+Hossain&background=3B82F6&color=fff",
    thumbnail: "https://placehold.co/400x225/6EE7B7/333?text=Free+English",
    category: "language",
    price: 0,
    originalPrice: 0,
    rating: 4.5,
    reviewCount: 8900,
    studentCount: 125000,
    duration: "20 hours",
    level: "Beginner",
    language: "Bangla",
    description: "Free English grammar course for all levels. Learn the basics of English grammar.",
    tags: ["English", "Grammar", "Free"],
    isFree: true,
    topics: ["Tenses", "Parts of Speech", "Sentence Structure", "Punctuation", "Common Errors"],
  },
];

export const liveClasses = [
  {
    id: "l1",
    title: "HSC Physics - Chapter 5: Waves",
    instructor: "Sayed Hasan",
    scheduledAt: "2026-06-14T10:00:00Z",
    duration: "90 min",
    enrolled: 1240,
    thumbnail: "https://placehold.co/400x225/1CAB5E/white?text=Live+Physics",
  },
  {
    id: "l2",
    title: "English Speaking Practice Session",
    instructor: "Munzereen Shahid",
    scheduledAt: "2026-06-14T14:00:00Z",
    duration: "60 min",
    enrolled: 3800,
    thumbnail: "https://placehold.co/400x225/3B82F6/white?text=Live+English",
  },
  {
    id: "l3",
    title: "BCS Math Live Class",
    instructor: "Farhan Kabir",
    scheduledAt: "2026-06-15T18:00:00Z",
    duration: "120 min",
    enrolled: 2100,
    thumbnail: "https://placehold.co/400x225/EF4444/white?text=Live+BCS",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rafi Ahmed",
    role: "HSC Student",
    avatar: "https://ui-avatars.com/api/?name=Rafi+Ahmed&background=1CAB5E&color=fff",
    text: "EDUBD completely changed how I study. The HSC Physics course is absolutely amazing. I scored A+ in my exams thanks to the clear explanations.",
    rating: 5,
    course: "HSC Physics Full Course",
  },
  {
    id: "t2",
    name: "Nadia Islam",
    role: "Job Seeker",
    avatar: "https://ui-avatars.com/api/?name=Nadia+Islam&background=3B82F6&color=fff",
    text: "The BCS preparation course is incredibly detailed and well-structured. The instructors are highly knowledgeable and very supportive.",
    rating: 5,
    course: "BCS Preparation Complete Guide",
  },
  {
    id: "t3",
    name: "Rifat Hasan",
    role: "Software Engineer",
    avatar: "https://ui-avatars.com/api/?name=Rifat+Hasan&background=8B5CF6&color=fff",
    text: "The Python and Web Development courses gave me the skills to land my first tech job. The projects are very practical and industry-relevant.",
    rating: 5,
    course: "Python Programming for Beginners",
  },
  {
    id: "t4",
    name: "Sumaiya Akter",
    role: "University Student",
    avatar: "https://ui-avatars.com/api/?name=Sumaiya+Akter&background=EC4899&color=fff",
    text: "I prepared for IELTS with EDUBD and scored 7.5! The course is comprehensive and the mock tests are very similar to the actual exam.",
    rating: 5,
    course: "IELTS Preparation Course",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "How to Prepare for HSC Exams in 30 Days",
    excerpt: "A comprehensive guide to help you maximize your HSC exam preparation in just one month with proven study techniques.",
    category: "Study Tips",
    date: "June 10, 2026",
    readTime: "5 min read",
    image: "https://placehold.co/600x400/1CAB5E/white?text=HSC+Tips",
    author: "Sayed Hasan",
  },
  {
    id: "b2",
    title: "Top 10 English Speaking Tips for Bangladeshi Students",
    excerpt: "Learn the most effective tips and tricks to improve your English speaking skills as a Bangla speaker.",
    category: "Language",
    date: "June 8, 2026",
    readTime: "7 min read",
    image: "https://placehold.co/600x400/3B82F6/white?text=English+Tips",
    author: "Munzereen Shahid",
  },
  {
    id: "b3",
    title: "The Future of Online Education in Bangladesh",
    excerpt: "Exploring how digital learning platforms are transforming education and creating new opportunities for students across Bangladesh.",
    category: "Education",
    date: "June 5, 2026",
    readTime: "6 min read",
    image: "https://placehold.co/600x400/8B5CF6/white?text=Future+Ed",
    author: "EDUBD Team",
  },
];

export const stats = [
  { label: "Students", value: "1M+", icon: "👨‍🎓" },
  { label: "Courses", value: "500+", icon: "📚" },
  { label: "Instructors", value: "200+", icon: "👨‍🏫" },
  { label: "Countries", value: "10+", icon: "🌍" },
];
