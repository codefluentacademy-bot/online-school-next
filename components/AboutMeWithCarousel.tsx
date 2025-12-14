"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/about1.jpg",
  "/images/about2.jpg",
  "/images/about3.jpg",
  "/images/about4.jpg",
];

export default function AboutSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            Hello! My name is <strong>Sheena</strong>, a professional educator based
            in the Philippines. I hold <strong>TESOL</strong> and <strong>TEFL</strong> certifications
            and specialize in English and programming education.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            I have over <strong>5 years of ESL teaching experience</strong> and
            <strong> 3 years teaching programming</strong>. My teaching style is
            practical, engaging, and personalized for every learner.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            I have worked with organizations such as <strong>Bitu Vietnam</strong>,
            <strong> 51Talk (China)</strong>, <strong>Andres Bonifacio College</strong>,
            and <strong>Sun Asterisk Software Development</strong>.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Outside teaching, I enjoy <strong>baking, driving, coding, outdoor
            activities, and softball</strong>. I love connecting with students
            from different cultures and backgrounds.
          </p>
        </div>

        {/* IMAGE (NO CUTTING) */}
        <div className="relative w-full aspect-4/3 bg-slate-100 rounded-xl flex items-center justify-center">
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt="About image"
              fill
              className={`object-contain transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
