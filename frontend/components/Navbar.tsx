"use client";

import Link from "next/link";
import { Leaf, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-2xl bg-black/20 border-b border-green-500/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shadow-lg shadow-green-500/30"
          >
            <Leaf className="text-green-400 w-7 h-7" />
          </motion.div>

          <div>
            <h1 className="text-white font-bold text-2xl">
              AgriVision AI
            </h1>

            <p className="text-gray-400 text-xs">
              AI Powered Crop Disease Detection
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className="text-green-400 font-semibold relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-green-400 after:shadow-[0_0_12px_#22c55e]"
          >
            Home
          </Link>

          <Link
            href="/detect"
            className="text-white hover:text-green-400 transition duration-300 hover:scale-110"
          >
            Detect
          </Link>

          <Link
            href="/about"
            className="text-white hover:text-green-400 transition duration-300 hover:scale-110"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/detect"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-xl shadow-green-500/40 hover:scale-105 transition-all duration-300"
          >
            Start Detecting 🌿
          </Link>

          <motion.button
            whileHover={{ rotate: 20, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full border border-green-500/30 flex items-center justify-center hover:bg-green-500/10 transition"
          >
            <Volume2 className="text-white w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
