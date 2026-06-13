import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "EDUBD - Bangladesh's Largest Online Learning Platform",
  description:
    "EDUBD offers online courses for SSC, HSC, Admission, Skills, Language, Job Preparation, and more. Learn from the best instructors in Bangladesh.",
  keywords: "online learning, SSC, HSC, IELTS, BCS, English, Bangla, education, Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
