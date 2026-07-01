"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { memo } from "react";

function CTA() {
  return (
    <section className="bg-[#07130a] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-[#0d2215] via-[#13311d] to-[#0d2215] rounded-3xl p-12 shadow-[0_0_60px_rgba(34,197,94,.18)] border border-green-500/10"
        >
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
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-bold text-white shadow-[0_0_40px_rgba(34,197,94,.5)] hover:scale-105 transition"
            >
              Start Detecting Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CTA);
