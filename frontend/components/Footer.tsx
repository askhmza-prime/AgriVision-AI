import Link from "next/link";
import { Heart } from "lucide-react";
import { Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-green-500/20 bg-black">
      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold text-green-400">
              🌿 AgriVision AI
            </h2>
            <p className="mt-4 text-sm text-gray-400">
              AI Powered Crop Disease Detection
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-sm">Quick Links</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <div>
                <Link href="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </div>
              <div>
                <Link href="/detect" className="hover:text-green-400 transition">
                  How it Works
                </Link>
              </div>
              <div>
                <Link href="/about" className="hover:text-green-400 transition">
                  About
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-green-400 transition">
                  Tips
                </Link>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white text-sm">Resources</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <div>
                <Link href="#" className="hover:text-green-400 transition">
                  Crop Care Tips
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-green-400 transition">
                  Common Diseases
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-green-400 transition">
                  Treatment Guide
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-green-400 transition">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="font-bold text-white text-sm">Stay Updated</h3>
            <p className="mt-4 text-sm text-gray-400">
              Get farming tips and updates
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl bg-white/10 border border-green-500/20 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-400"
              />
              <button className="rounded-xl bg-green-500 hover:bg-green-600 px-4 py-2 transition">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-500/20 py-6 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 AgriVision AI. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* Made with heart */}
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            for Farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
