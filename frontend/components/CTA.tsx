"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#07130a] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Healthy Crops,{" "}
              <span className="text-green-400">Better Future 🌿</span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              Protect your crops today with the power of AI.
            </p>
          </motion.div>

          {/* Right - Button Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-end"
          >
            <Link
              href="/detect"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-bold text-white shadow-[0_0_40px_rgba(34,197,94,.45)] hover:scale-105 transition"
            >
              Start Detecting Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
