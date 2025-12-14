import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            CodeFluent-Academy
          </h3>
          <p className="mt-3 text-sm leading-relaxed">
            Excellence in Code, Language, and Learning.  
            Empowering students worldwide through technology and education.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Email: codefluentacademy@gmail.com</li>
            <li>
              LINE:{" "}
              <a
                href="https://line.me/ti/p/Wg-kH5pm98"
                target="_blank"
                className="hover:text-white"
              >
                Connect
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/share/1ZNTRwK3kG/?mibextid=wwXIfr"
                target="_blank"
                className="hover:text-white"
              >
                Visit
              </a>
            </li>
            <li>Instagram: @shnnaids</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 text-center text-xs py-6">
        © {new Date().getFullYear()} CodeFluent-Academy. All rights reserved.
      </div>
    </footer>
  );
}
