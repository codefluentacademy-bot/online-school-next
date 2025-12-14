"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "./heroSlides";


export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // Safety: if no slides, render nothing
  if (!heroSlides || heroSlides.length === 0) {
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[80vh] w-full">
      <Image
        src={slide.image}
        alt={slide.title ?? "Hero slide"}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
        <div className="text-white max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {slide.title}
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            {slide.subtitle}
          </p>
          <a
            href="/courses"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            View Courses
          </a>
        </div>
      </div>
    </section>
  );
}
