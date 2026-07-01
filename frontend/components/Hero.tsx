"use client";

import Image from "next/image";
import Link from "next/link";
import BackgroundEffects from "./BackgroundEffects";
import { motion } from "framer-motion";
import { Brain, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen sm:min-h-[760px] overflow-hidden flex items-center bg-[#07130a]">
      <BackgroundEffects />

      {/* Background with blurred crop image + dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/leaf.jpg"
          alt="Background Leaf"
          fill
          priority
          className="object-cover blur-[80px] opacity-40"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-28 grid md:grid-cols-2 gap-8 sm:gap-12 xl:gap-24 items-center w-full">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-white max-w-[520px]">
            Detect Crop Diseases
            <br />
            <span className="text-green-400">
              Instantly with AI 🌿
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-[520px] text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
            Upload a crop image and our AI will detect diseases, provide treatment tips, and help you protect your crops.
          </p>

          <div className="mt-8 sm:mt-10 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <Brain className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">Deep Learning Powered</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">Accurate & Fast Results</span>
            </div>
          </div>

          <Link
            href="/detect"
            className="inline-block mt-8 sm:mt-10 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 sm:px-8 py-2.5 sm:py-3 font-bold text-white text-sm sm:text-base shadow-[0_0_40px_rgba(34,197,94,.45)] transition-all duration-300 hover:scale-105"
          >
            Start Detecting 🌿
          </Link>
        </motion.div>

        {/* Right - Hidden on mobile, visible on md and up */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:flex justify-center items-center h-full"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[520px] md:h-[520px] lg:w-[620px] lg:h-[620px]">
            {/* Scanner Corners - Larger */}
            <div className="absolute top-0 left-0 w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 border-l-2 sm:border-l-3 md:border-l-4 border-t-2 sm:border-t-3 md:border-t-4 border-green-400 rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 border-r-2 sm:border-r-3 md:border-r-4 border-t-2 sm:border-t-3 md:border-t-4 border-green-400 rounded-tr-xl sm:rounded-tr-2xl md:rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 border-l-2 sm:border-l-3 md:border-l-4 border-b-2 sm:border-b-3 md:border-b-4 border-green-400 rounded-bl-xl sm:rounded-bl-2xl md:rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 border-r-2 sm:border-r-3 md:border-r-4 border-b-2 sm:border-b-3 md:border-b-4 border-green-400 rounded-br-xl sm:rounded-br-2xl md:rounded-br-2xl" />

            {/* Scanner Laser - Thicker */}
            <motion.div
              animate={{
                y: ["-50%", "50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="absolute left-0 right-0 top-1/2 z-20 h-1 sm:h-1.5 bg-green-400 shadow-[0_0_45px_#22c55e]"
            />

            {/* Leaf Image */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="relative z-10 w-full h-full"
            >
              <Image
                src="/leaf.jpg"
                alt="Leaf"
                fill
                priority
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl drop-shadow-[0_0_70px_rgba(34,197,94,.75)]"
              />
            </motion.div>

            {/* AI Scanning Badge - Lower Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 -right-6 sm:bottom-8 sm:-right-12 rounded-2xl border border-green-500/20 bg-black/80 backdrop-blur-xl p-3 sm:p-4 w-40 sm:w-48 z-30"
            >
              <p className="font-bold text-green-400 text-xs sm:text-sm">
                AI Scanning
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Leaf...
              </p>

              <div className="mt-3 flex gap-1">
                <motion.div
                  animate={{ height: [10, 25, 10] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-1 rounded bg-green-400"
                />
                <motion.div
                  animate={{ height: [25, 8, 25] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-1 rounded bg-green-400"
                />
                <motion.div
                  animate={{ height: [8, 20, 8] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-1 rounded bg-green-400"
                />
                <motion.div
                  animate={{ height: [20, 12, 20] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-1 rounded bg-green-400"
                />
              </div>
            </motion.div>

            {/* Floating Leaf Particles - Subtle */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 25, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="hidden sm:block absolute top-12 -right-8 text-4xl select-none opacity-70"
            >
              🍃
            </motion.div>

            <motion.div
              animate={{
                y: [0, 25, 0],
                x: [0, -15, 0],
                rotate: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
              }}
              className="hidden sm:block absolute -bottom-8 -left-8 text-3xl select-none opacity-70"
            >
              🍃
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
