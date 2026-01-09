"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:via-purple-950/30 dark:to-black -z-10" />

      {/* ================= HERO SECTION ================= */}
      <section className="w-full py-24 px-6 relative overflow-hidden">
        {/* Hero background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-500 dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              CodeFluent-Academy
            </h1>

            <p className="text-xl md:text-2xl font-medium mb-4 text-purple-100">
              Excellence in Code, Language, and Learning
            </p>

            <p className="text-lg text-purple-50 mb-8 leading-relaxed">
              Learn programming, English, and future-ready skills with a certified
              educator. Personalized lessons for kids, teens, and adults worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-white text-purple-700 font-semibold hover:bg-purple-50 hover:scale-105 transition-all shadow-lg"
              >
                Contact Me
              </Link>

              <Link
                href="/courses"
                className="px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 hover:border-purple-300 transition-all"
              >
                View Courses
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 border-4 border-white/20">
            <Image
              src="/images/hero.gif"
              alt="Online teaching and programming"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-purple-500 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
            What We Teach
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Practical, engaging, and future-focused learning
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Programming", desc: "Python, Scratch, Web Development", icon: "💻" },
            { title: "English / ESL", desc: "Kids, Teens & Adults", icon: "🗣️" },
            { title: "Academic Support", desc: "Math & Science Tutoring", icon: "📚" },
            { title: "Global Learning", desc: "International students worldwide", icon: "🌍" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900/50 hover:shadow-xl hover:shadow-purple-100/30 dark:hover:shadow-purple-900/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/10 -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-purple-500 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
              Why Choose CodeFluent-Academy?
            </h2>

            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300">✓</span>
                TESOL & TEFL Certified Educator
              </li>
              <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300">✓</span>
                5+ Years ESL Teaching Experience
              </li>
              <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300">✓</span>
                3+ Years Programming Instruction
              </li>
              <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300">✓</span>
                Personalized 1-on-1 & Small Groups
              </li>
              <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300">✓</span>
                Students from Japan, China, US & Philippines
              </li>
            </ul>
          </div>

          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
            <Image
              src="/images/why-us.jpg"
              alt="Why choose CodeFluent Academy"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-white dark:from-gray-900 dark:via-purple-950/20 dark:to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-purple-500 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
            Meet Your Educator
          </h2>

          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
            Hi! I am Sheena, a professional educator based in the Philippines,
            specializing in English language teaching and programming education.
            I am passionate about helping students gain confidence, skills,
            and real-world knowledge.
          </p>

          <Link
            href="/about"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-700 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background with gradient - Fixed version */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 -z-20" />
        
        {/* Alternative: Simpler pattern or remove it entirely */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_0%,transparent_50%)] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Learning?
          </h2>
          <p className="text-lg mb-8 text-purple-100">
            Join students worldwide and begin your learning journey today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-white text-purple-700 font-semibold hover:bg-purple-50 hover:scale-105 transition-all shadow-lg"
            >
              Contact Me
            </Link>
            <Link
              href="/courses"
              className="inline-block px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 hover:border-purple-300 transition-all"
            >
              Browse Courses
            </Link>
          </div>
          
          <p className="mt-8 text-purple-200 text-sm">
            Free trial lesson available • Flexible scheduling • All ages welcome
          </p>
        </div>
      </section>

    </main>
  );
}