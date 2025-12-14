"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-zinc-50 dark:bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              CodeFluent-Academy
            </h1>

            <p className="text-xl md:text-2xl font-medium mb-4 text-gray-700 dark:text-gray-300">
              Excellence in Code, Language, and Learning
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Learn programming, English, and future-ready skills with a certified
              educator. Personalized lessons for kids, teens, and adults worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition"
              >
                Contact Me
              </Link>

              <Link
                href="/courses"
                className="px-6 py-3 rounded-lg border border-gray-400 dark:border-gray-600 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                View Courses
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 md:h-105 rounded-xl overflow-hidden shadow-xl">
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
      <section className="py-20 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Teach
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Practical, engaging, and future-focused learning
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Programming", desc: "Python, Scratch, Web Development" },
            { title: "English / ESL", desc: "Kids, Teens & Adults" },
            { title: "Academic Support", desc: "Math & Science Tutoring" },
            { title: "Global Learning", desc: "International students worldwide" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose CodeFluent-Academy?
            </h2>

            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <li>✅ TESOL & TEFL Certified Educator</li>
              <li>✅ 5+ Years ESL Teaching Experience</li>
              <li>✅ 3+ Years Programming Instruction</li>
              <li>✅ Personalized 1-on-1 & Small Groups</li>
              <li>✅ Students from Japan, China, US & Philippines</li>
            </ul>
          </div>

          <div className="relative w-full h-80 md:h-105 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/why-us.jpg"
              alt="Why choose CodeFluent Academy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Your Educator
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Hi! I’m Sheena, a professional educator based in the Philippines,
            specializing in English language teaching and programming education.
            I’m passionate about helping students gain confidence, skills,
            and real-world knowledge.
          </p>

          <Link
            href="/about"
            className="inline-block px-8 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Learning?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Join students worldwide and begin your learning journey today.
        </p>

        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-lg bg-white text-black font-semibold hover:opacity-90 transition"
        >
          Contact Me
        </Link>
      </section>

    </main>
  );
}
