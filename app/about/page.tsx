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
  image: `/images/about${i + 1}.jpg`,
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
    <main className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* ================= LEFT: TEXT ================= */}
          <div className="space-y-6 text-lg leading-relaxed">
            <h1 className="text-4xl md:text-5xl font-bold">
              About Me
            </h1>

            <p>
              Hello! My name is <strong>Sheena</strong>, a professional educator
              based in the Philippines. I hold <strong>TESOL</strong> and{" "}
              <strong>TEFL</strong> certifications and specialize in teaching
              English as a Second Language to students of different ages and
              backgrounds.
            </p>

            <p>
              I have more than <strong>5 years of experience</strong> as an ESL
              teacher and <strong>3 years</strong> as a programming teacher. I
              focus on clear explanations, confidence building, and practical
              learning that students can apply in real life.
            </p>

            <p>
              I have worked with international companies and institutions such as{" "}
              <strong>
                Bitu Vietnam, 51Talk (China), Andres Bonifacio College
              </strong>, and{" "}
              <strong>Sun Asterisk Software Development</strong>.
            </p>

            <p>
              Outside teaching, I enjoy <strong>driving, baking, coding,
              outdoor games, and softball</strong>. Although I don’t have a large
              group of friends, I genuinely hope to meet my students from{" "}
              <strong>China, Japan, and the United States</strong> someday.
              Teaching allows me to connect with people across cultures, and
              that’s what I love most about it.
            </p>
          </div>

          {/* ================= RIGHT: IMAGE CAROUSEL ================= */}
          <div className="relative w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-4">
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
                    i === index ? "bg-gray-800 dark:bg-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
