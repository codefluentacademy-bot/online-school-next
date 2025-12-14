"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          CodeFluent<span className="text-blue-600">-Academy</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/courses" className="hover:text-blue-600 transition">Courses</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="ml-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
