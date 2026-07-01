"use client";

import { motion } from "framer-motion";
import { Shield, Pill, CheckCircle } from "lucide-react";
import { memo, useMemo } from "react";

interface Props {
  disease: string;
  confidence: number;
  treatment: string;
  prevention: string;
}

function PredictionCard({
  disease,
  confidence,
  treatment,
  prevention,
}: Props) {
  const confidenceWidth = useMemo(
    () => `${confidence}%`,
    [confidence]
  );

  const confidenceText = useMemo(
    () => confidence.toFixed(2),
    [confidence]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        mt-8
        rounded-3xl
        bg-gradient-to-br
        from-[#111]
        to-[#1c1c1c]
        border
        border-green-500/20
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(34,197,94,.15)]
        p-8
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <CheckCircle className="h-8 w-8 text-green-400" />
        <h2 className="text-3xl font-bold text-green-400">
          Analysis Complete
        </h2>
      </div>

      {/* Disease Name */}
      <div className="mt-8">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
          Detected Disease
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          {disease}
        </h1>
      </div>

      {/* Confidence Section */}
      <div className="mt-10">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
          Confidence Score
        </p>

        <div className="mt-4 h-4 rounded-full bg-gray-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: confidenceWidth }}
            transition={{ duration: 1.2 }}
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-2 font-bold text-green-400 text-xl"
        >
          {confidenceText}%
        </motion.p>
      </div>

      {/* Treatment & Prevention Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Treatment Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{
            scale: 1.03,
            y: -6,
          }}
          className="
            rounded-3xl
            bg-gradient-to-br
            from-yellow-500/10
            to-yellow-600/5
            border
            border-yellow-500/30
            backdrop-blur-xl
            p-6
            transition
          "
        >
          <Pill className="h-8 w-8 text-yellow-400 mb-4" />

          <h3 className="text-xl font-bold text-white">
            Treatment
          </h3>

          <p className="mt-4 leading-7 text-gray-300 text-sm">
            {treatment}
          </p>
        </motion.div>

        {/* Prevention Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{
            scale: 1.03,
            y: -6,
          }}
          className="
            rounded-3xl
            bg-gradient-to-br
            from-blue-500/10
            to-blue-600/5
            border
            border-blue-500/30
            backdrop-blur-xl
            p-6
            transition
          "
        >
          <Shield className="h-8 w-8 text-blue-400 mb-4" />

          <h3 className="text-xl font-bold text-white">
            Prevention
          </h3>

          <p className="mt-4 leading-7 text-gray-300 text-sm">
            {prevention}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default memo(PredictionCard);
