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
      {/* Background with proper contrast */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black -z-10" />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* ================= LEFT: TEXT ================= */}
          <div className="space-y-6 text-lg leading-relaxed">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About Me
            </h1>

            <p className="text-gray-800 dark:text-gray-200">
              Hello! My name is <strong className="text-gray-900 dark:text-white font-semibold">Sheena</strong>, a professional educator
              based in the Philippines. I hold <strong className="text-gray-900 dark:text-white font-semibold">TESOL</strong> and{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">TEFL</strong> certifications and specialize in teaching
              English as a Second Language to students of different ages and
              backgrounds.
            </p>

            <p className="text-gray-800 dark:text-gray-200">
              I have more than <strong className="text-gray-900 dark:text-white font-semibold">5 years of experience</strong> as an ESL
              teacher and <strong className="text-gray-900 dark:text-white font-semibold">3 years</strong> as a programming teacher. I
              focus on clear explanations, confidence building, and practical
              learning that students can apply in real life.
            </p>

            <p className="text-gray-800 dark:text-gray-200">
              I have worked with international companies and institutions such as{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">
                Bitu Vietnam, 51Talk (China), Andres Bonifacio College
              </strong>, and{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">Sun Asterisk Software Development</strong>.
            </p>

            <p className="text-gray-800 dark:text-gray-200">
              Outside teaching, I enjoy <strong className="text-gray-900 dark:text-white font-semibold">driving, baking, coding,
              outdoor games, and softball</strong>. Although I do not have a large
              group of friends, I genuinely hope to meet my students from{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">China, Japan, and the United States</strong> someday.
              Teaching allows me to connect with people across cultures, and
              that is what I love most about it.
            </p>
          </div>

          {/* ================= RIGHT: IMAGE CAROUSEL ================= */}
          <div className="relative w-full bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
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
                  className={`w-3 h-3 rounded-full transition ${
                    i === index 
                      ? "bg-gray-800 dark:bg-white" 
                      : "bg-gray-300 dark:bg-gray-600"
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