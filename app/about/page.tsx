"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  image: string;
  alt: string;
}

const aboutImages: Slide[] = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  image: `/images/About${i + 1}.jpg`,
  alt: `About image ${i + 1}`,
}));

export default function AboutPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:via-purple-950/30 dark:to-black -z-10" />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* ================= LEFT: TEXT ================= */}
          <div className="space-y-6 text-lg leading-relaxed">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
              About Me
            </h1>

            <p className="text-gray-800 dark:text-gray-100">
              Hello! My name is <strong className="text-purple-700 dark:text-purple-300 font-semibold">Sheena</strong>, a professional educator
              based in the Philippines. I hold <strong className="text-purple-700 dark:text-purple-300 font-semibold">TESOL</strong> and{" "}
              <strong className="text-purple-700 dark:text-purple-300 font-semibold">TEFL</strong> certifications and specialize in teaching
              English as a Second Language to students of different ages and
              backgrounds.
            </p>

            <p className="text-gray-800 dark:text-gray-100">
              I have more than <strong className="text-purple-700 dark:text-purple-300 font-semibold">5 years of experience</strong> as an ESL
              teacher and <strong className="text-purple-700 dark:text-purple-300 font-semibold">3 years</strong> as a programming teacher. I
              focus on clear explanations, confidence building, and practical
              learning that students can apply in real life.
            </p>

            <p className="text-gray-800 dark:text-gray-100">
              I have worked with international companies and institutions such as{" "}
              <strong className="text-purple-700 dark:text-purple-300 font-semibold">
                Bitu Vietnam, 51Talk (China), Andres Bonifacio College
              </strong>, and{" "}
              <strong className="text-purple-700 dark:text-purple-300 font-semibold">Sun Asterisk Software Development</strong>.
            </p>

            <p className="text-gray-800 dark:text-gray-100">
              Outside teaching, I enjoy <strong className="text-purple-700 dark:text-purple-300 font-semibold">driving, baking, coding,
              outdoor games, and softball</strong>. Although I do nott have a large
              group of friends, I genuinely hope to meet my students from{" "}
              <strong className="text-purple-700 dark:text-purple-300 font-semibold">China, Japan, and the United States</strong> someday.
              Teaching allows me to connect with people across cultures, and
              that is what I love most about it.
            </p>
          </div>

          {/* ================= RIGHT: IMAGE CAROUSEL ================= */}
          <div className="relative w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900/50 shadow-purple-100/50 dark:shadow-purple-900/20">
            <div className="relative w-full aspect-4/3">
              {aboutImages.map((slide, i) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-contain"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {aboutImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === index 
                      ? "bg-purple-600 dark:bg-purple-400 scale-110" 
                      : "bg-purple-200 dark:bg-purple-800 hover:bg-purple-300 dark:hover:bg-purple-700"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}