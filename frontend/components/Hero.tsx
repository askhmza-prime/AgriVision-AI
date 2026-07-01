"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07130a] flex items-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,.25),transparent_45%)]" />

      {/* Floating Blur */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-20 top-40 w-72 h-72 rounded-full bg-green-500/10 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Detect Crop Diseases
            <br />
            <span className="text-green-400">
              Instantly with AI 🌿
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Upload crop images and let our AI instantly detect diseases,
            provide treatment guidance and prevention tips.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3 text-white">
              <Brain className="text-green-400" />
              Deep Learning Powered
            </div>

            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="text-green-400" />
              Accurate & Fast Results
            </div>
          </div>

          <Link
            href="/detect"
            className="inline-block mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-xl shadow-green-500/30 hover:scale-105 transition-all duration-300"
          >
            Start Detecting 🌿
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-end lg:justify-center"
        >
          {/* Decorative Glow */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-green-500/15 blur-[100px]" />

          {/* Floating Leaf */}
          <motion.img
            src="/leaf.jpg"
            alt="Leaf"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-xl lg:max-w-2xl object-contain drop-shadow-[0_0_80px_rgba(34,197,94,.8)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
