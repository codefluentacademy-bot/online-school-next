'use client';

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [courseParam, setCourseParam] = useState<string | null>(null);
  const [priceParam, setPriceParam] = useState<string | null>(null);

  useEffect(() => {
    setCourseParam(searchParams.get("course"));
    setPriceParam(searchParams.get("price"));
  }, [searchParams]);

  const socialMediaAccounts = [
    {
      platform: "Email",
      username: "codefluentacademy@gmail.com",
      icon: "📧",
      link: "mailto:codefluentacademy@gmail.com",
      description: "Send me an email for inquiries",
      color: "bg-gradient-to-br from-red-100 to-orange-100",
      borderColor: "border-red-200",
    },
    {
      platform: "LINE",
      username: "Connect with me",
      icon: "💚",
      link: "https://line.me/ti/p/Wg-kH5pm98",
      description: "Message me on LINE for quick responses",
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
      borderColor: "border-green-200",
    },
    {
      platform: "Facebook",
      username: "Connect with me",
      icon: "📘",
      link: "https://www.facebook.com/share/1ZNTRwK3kG/?mibextid=wwXIfr",
      description: "Visit our Facebook page",
      color: "bg-gradient-to-br from-blue-100 to-indigo-100",
      borderColor: "border-blue-200",
    },
    {
      platform: "Instagram",
      username: "@shnnaids",
      icon: "📸",
      link: "https://instagram.com/shnnaids",
      description: "Follow me on Instagram",
      color: "bg-gradient-to-br from-pink-100 to-rose-100",
      borderColor: "border-pink-200",
    },
    {
      platform: "WhatsApp",
      username: "Message me",
      icon: "💬",
      link: "https://wa.me/09496611141",
      description: "Chat directly on WhatsApp",
      color: "bg-gradient-to-br from-green-50 to-teal-50",
      borderColor: "border-green-200",
    },
    {
      platform: "YouTube",
      username: "CodeFluent Academy",
      icon: "🎥",
      link: "https://youtube.com/@codefluent-academy?si=hzVHmJ3hQmzmbNrt",
      description: "Watch tutorial videos",
      color: "bg-gradient-to-br from-red-50 to-pink-50",
      borderColor: "border-red-200",
    },
    {
      platform: "Twitter/X",
      username: "@codefluentacad",
      icon: "🐦",
      link: "https://x.com/codefluentacad",
      description: "Follow for updates and tips",
      color: "bg-gradient-to-br from-gray-100 to-black/5",
      borderColor: "border-gray-200",
    },
    {
      platform: "GitHub",
      username: "CodeFluentAcademy",
      icon: "💻",
      link: "https://github.com/codefluentacademy-bot",
      description: "View coding projects and examples",
      color: "bg-gradient-to-br from-gray-800 to-black",
      borderColor: "border-gray-800",
      textColor: "text-white",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
          Choose any platform below to get in touch. Im available on multiple channels for your convenience.
        </p>
        
        {courseParam && (
          <div className="inline-block px-6 py-3 bg-linear-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200 shadow-sm">
            <p className="text-gray-800">
              <span className="font-semibold">Course:</span> {courseParam}
              {priceParam && (
                <span className="ml-4 font-semibold text-green-600">{priceParam}</span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {socialMediaAccounts.map((account, index) => (
            <a
              key={index}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${account.color} ${account.borderColor} ${account.textColor || "text-gray-800"} border-2 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform hover:scale-[1.02] flex flex-col items-center text-center`}
            >
              <div className="text-5xl mb-4">{account.icon}</div>
              
              <h3 className="text-xl font-bold mb-2">{account.platform}</h3>
              
              <p className="font-medium mb-3 opacity-90">{account.username}</p>
              
              <p className="text-sm opacity-80 mb-6 grow">{account.description}</p>
              
              <div className={`mt-auto px-4 py-2 ${account.borderColor} border rounded-full text-sm font-semibold transition-all hover:bg-white/30`}>
                Connect Now →
              </div>
            </a>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Primary Email</p>
                    <p className="font-semibold">codefluentacademy@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">LINE</p>
                    <p className="font-semibold">Connect on LINE for quick chat</p>
                    <p className="text-sm text-gray-300">ID: sheena_sensie</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">📘</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Facebook</p>
                    <p className="font-semibold">CodeFluent Academy Page</p>
                    <p className="text-sm text-gray-300">Message me on Facebook</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">📸</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Instagram</p>
                    <p className="font-semibold">@shnnaids</p>
                    <p className="text-sm text-gray-300">Follow for updates</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700 text-center">
              <p className="text-gray-300">
                Response Time: Usually within 1-2 hours during business hours (9AM-6PM JST)
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Feel free to reach out through any platform above. I will get back to you as soon as possible!
              </p>
            </div>
          </div>
        </div>

        {/* Back to Courses Button */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
          >
            ← Back to Courses
          </Link>
        </div>
      </div>
    </main>
  );
}
