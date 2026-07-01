"use client";

import Link from "next/link";
import { ArrowLeft, Leaf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import UploadCard from "@/components/UploadCard";

export default function DetectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b07] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08140c] via-[#050b07] to-black" />

      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-xl border border-green-500/20 bg-white/5 px-4 py-2 text-green-300 transition hover:bg-green-500/10"
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-green-300">
            <Sparkles size={18} />
            AI Powered Disease Detection
          </div>

          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            <span className="text-white">Crop Disease</span>
            <br />
            <span className="text-green-400">Detection</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Upload a crop leaf image and our AI model will instantly analyze it,
            detect diseases, calculate confidence, and provide treatment &
            prevention recommendations.
          </p>

          <div className="mt-8 flex justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Leaf className="text-green-400" size={18} />
              AI Detection
            </div>

            <div className="flex items-center gap-2">
              ⚡ Fast Prediction
            </div>

            <div className="flex items-center gap-2">
              🎯 High Accuracy
            </div>
          </div>
        </motion.div>

        {/* Upload Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <UploadCard />
        </motion.div>
      </div>
    </main>
  );
}
