"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col">

      {/* ================= HERO / HEADER ================= */}
      <section className="w-full bg-zinc-50 dark:bg-black py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Contact Me
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          I’d love to hear from you! Connect via social media or send me a message directly.
        </p>
      </section>

      {/* ================= CONTACT LINKS ================= */}
      <section className="py-16 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* LINE */}
          <Link
            href="https://line.me/ti/p/Wg-kH5pm98"
            target="_blank"
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition flex items-center gap-4"
          >
            <span className="text-lg font-semibold">LINE</span>
            <span className="text-gray-500 dark:text-gray-400">Chat with me</span>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/shnnaids"
            target="_blank"
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition flex items-center gap-4"
          >
            <span className="text-lg font-semibold">Instagram</span>
            <span className="text-gray-500 dark:text-gray-400">@shnnaids</span>
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/share/1ZNTRwK3kG/?mibextid=wwXIfr"
            target="_blank"
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition flex items-center gap-4"
          >
            <span className="text-lg font-semibold">Facebook</span>
            <span className="text-gray-500 dark:text-gray-400">Message me on FB</span>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/PHYOURNUMBERHERE"
            target="_blank"
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition flex items-center gap-4"
          >
            <span className="text-lg font-semibold">WhatsApp</span>
            <span className="text-gray-500 dark:text-gray-400">Chat via WhatsApp</span>
          </Link>

          {/* Email */}
          <Link
            href="mailto:codefluentacademy@gmail.com"
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition flex items-center gap-4"
          >
            <span className="text-lg font-semibold">Email</span>
            <span className="text-gray-500 dark:text-gray-400">codefluentacademy@gmail.com</span>
          </Link>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-16 px-6 bg-zinc-50 dark:bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Send Me a Message
          </h2>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
              required
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 border rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
              required
            />

            <button
              type="submit"
              className="px-6 py-4 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Learn?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Join students worldwide and begin your learning journey today!
        </p>

        <Link
          href="/courses"
          className="inline-block px-8 py-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
        >
          View Courses
        </Link>
      </section>

    </main>
  );
}
