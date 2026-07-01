"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-[#07130a]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,.25),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* Floating Blur */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-20 top-40 w-72 h-72 rounded-full bg-green-500/10 blur-[120px]"
      />

      {/* Floating Leaves */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute top-36 right-24 text-5xl select-none"
      >
        🍃
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute bottom-24 left-24 text-4xl select-none"
      >
        🍃
      </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Detect Crop Diseases
            <br />
            <span className="text-green-400">
              Instantly with AI 🌿
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
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
            className="inline-block mt-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-bold text-white shadow-[0_0_40px_rgba(34,197,94,.45)] transition-all duration-300 hover:scale-105"
          >
            Start Detecting 🌿
          </Link>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* AI Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-green-500/20 blur-[150px] animate-pulse" />

          <div className="relative">
            {/* Scanner Corners */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-green-400 rounded-tl-xl" />
            <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-green-400 rounded-tr-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-green-400 rounded-bl-xl" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-green-400 rounded-br-xl" />

            {/* Scanner Laser */}
            <motion.div
              animate={{
                y: ["-45%", "45%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="absolute left-0 z-20 h-1 w-full bg-green-400 shadow-[0_0_25px_#22c55e]"
            />

            {/* Leaf */}
            <motion.img
              src="/leaf.jpg"
              alt="Leaf"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="relative z-10 w-full max-w-lg rounded-3xl drop-shadow-[0_0_60px_rgba(34,197,94,.6)]"
            />

            {/* Radar */}
            <div className="absolute right-10 top-14">
              <div className="h-24 w-24 rounded-full border border-green-400 opacity-30 animate-ping" />
              <div className="absolute inset-2 rounded-full border-2 border-green-400" />
            </div>

            {/* AI Badge */}
            <div className="absolute bottom-8 right-0 rounded-2xl border border-green-500/20 bg-black/70 p-4 backdrop-blur-xl">
              <p className="font-bold text-green-400">
                AI Scanning
              </p>

              <p className="text-xs text-gray-400">
                Leaf Analysis...
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
