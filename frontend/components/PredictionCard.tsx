"use client";

import { motion } from "framer-motion";
import { Shield, Pill } from "lucide-react";

interface Props {
  disease: string;
  confidence: number;
  treatment: string;
  prevention: string;
}

export default function PredictionCard({
  disease,
  confidence,
  treatment,
  prevention,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8 rounded-3xl border border-green-500/20 bg-gradient-to-br from-[#121212]/90 to-[#1a1a1a]/70 backdrop-blur-2xl p-8 shadow-2xl"
    >
      <h2 className="text-3xl font-bold text-green-400">
        ✅ Analysis Complete
      </h2>

      <p className="mt-6 text-gray-400">
        Detected Disease
      </p>

      <h1 className="mt-2 text-4xl font-bold text-white">
        {disease}
      </h1>

      <p className="mt-8 text-xl text-green-400">
        Confidence
      </p>

      <div className="mt-4 h-4 overflow-hidden rounded-full bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${confidence}%` }}
          transition={{ duration: 1.5 }}
          className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_20px_rgba(34,197,94,.6)]"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-3 text-2xl font-bold text-green-400"
      >
        {confidence.toFixed(2)}%
      </motion.p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -6,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6"
        >
          <Pill className="mb-4 h-8 w-8 text-yellow-400" />

          <h3 className="text-xl font-bold text-white">
            Treatment
          </h3>

          <p className="mt-3 leading-7 text-gray-300">
            {treatment}
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.03,
            y: -6,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6"
        >
          <Shield className="mb-4 h-8 w-8 text-blue-400" />

          <h3 className="text-xl font-bold text-white">
            Prevention
          </h3>

          <p className="mt-3 leading-7 text-gray-300">
            {prevention}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
