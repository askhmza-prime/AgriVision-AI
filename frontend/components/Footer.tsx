import Link from "next/link";
import { Heart } from "lucide-react";
import { memo } from "react";

function Footer() {
  return (
    <footer className="border-t border-green-500/10 bg-[#050b07]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold text-green-400">
              🌿 AgriVision AI
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              AI Powered Crop Disease Detection
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-green-400 transition">
              Home
            </Link>
            <Link href="/detect" className="hover:text-green-400 transition">
              How it Works
            </Link>
            <Link href="/about" className="hover:text-green-400 transition">
              About
            </Link>
            <Link
              href="#"
              prefetch={false}
              className="hover:text-green-400 transition"
            >
              GitHub
            </Link>
            <Link
              href="#"
              prefetch={false}
              className="hover:text-green-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-500/10 py-6 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 AgriVision AI. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            for Farmers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
