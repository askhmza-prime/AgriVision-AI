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
      transition={{ duration: .6 }}
      className="mt-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-green-500/20 p-8"
    >
      <h2 className="text-3xl font-bold text-green-400">
        ✅ Analysis Complete
      </h2>

      <p className="mt-6 text-gray-300">
        Detected Disease
      </p>

      <h1 className="text-4xl font-bold text-white mt-2">
        {disease}
      </h1>

      <p className="mt-8 text-green-400 text-xl">
        Confidence
      </p>

      <div className="mt-3 h-4 bg-gray-700 rounded-full overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${confidence}%` }}
          transition={{ duration: 1.5 }}
          className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
        />

      </div>

      <p className="text-green-400 font-bold mt-2">
        {confidence}%
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="rounded-2xl bg-yellow-500/10 border border-yellow-500/30 p-6">

          <Pill className="text-yellow-400 mb-3" />

          <h3 className="text-white font-bold text-xl">
            Treatment
          </h3>

          <p className="text-gray-300 mt-3">
            {treatment}
          </p>

        </div>

        <div className="rounded-2xl bg-blue-500/10 border border-blue-500/30 p-6">

          <Shield className="text-blue-400 mb-3" />

          <h3 className="text-white font-bold text-xl">
            Prevention
          </h3>

          <p className="text-gray-300 mt-3">
            {prevention}
          </p>

        </div>

      </div>

    </motion.div>
  );
}
