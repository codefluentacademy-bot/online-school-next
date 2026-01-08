'use client';

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const courseParam = searchParams?.get("course") || null;
  const priceParam = searchParams?.get("price") || null;

  const socialMediaAccounts = [
    {
      platform: "Email",
      username: "codefluentacademy@gmail.com",
      icon: "📧",
      link: "mailto:codefluentacademy@gmail.com",
      description: "Send me an email for inquiries",
      color: "bg-red-100",
      borderColor: "border-red-200",
    },
    {
      platform: "LINE",
      username: "Connect with me",
      icon: "💚",
      link: "https://line.me/ti/p/Wg-kH5pm98",
      description: "Message me on LINE for quick responses",
      color: "bg-green-100",
      borderColor: "border-green-200",
    },
    {
      platform: "Facebook",
      username: "Connect with me",
      icon: "📘",
      link: "https://www.facebook.com/share/1ZNTRwK3kG/?mibextid=wwXIfr",
      description: "Visit our Facebook page",
      color: "bg-blue-100",
      borderColor: "border-blue-200",
    },
    {
      platform: "Instagram",
      username: "@shnnaids",
      icon: "📸",
      link: "https://instagram.com/shnnaids",
      description: "Follow me on Instagram",
      color: "bg-pink-100",
      borderColor: "border-pink-200",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Contact Me</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
          Choose any platform below to get in touch. I am available on multiple channels.
        </p>

        {courseParam && (
          <div className="inline-block px-6 py-3 bg-blue-50 rounded-xl border border-blue-200 shadow-sm">
            <p className="text-gray-800">
              <strong>Course:</strong> {courseParam}{" "}
              {priceParam && <span className="ml-4 text-green-600">{priceParam}</span>}
            </p>
          </div>
        )}
      </div>

      {/* Social Links */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialMediaAccounts.map((account, idx) => (
            <a
              key={idx}
              href={account.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${account.color} ${account.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center`}
            >
              <div className="text-5xl mb-4">{account.icon}</div>
              <h3 className="text-xl font-bold mb-2">{account.platform}</h3>
              <p className="font-medium mb-3 opacity-90">{account.username}</p>
              <p className="text-sm opacity-80 mb-6 grow">{account.description}</p>
              <div className={`mt-auto px-4 py-2 ${account.borderColor} border rounded-full text-sm font-semibold`}>
                Connect Now →
              </div>
            </a>
          ))}
        </div>

        {/* Back to Courses */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg"
          >
            ← Back to Courses
          </Link>
        </div>
      </div>
    </main>
  );
}