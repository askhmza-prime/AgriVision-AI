"use client";

import { predictDisease } from "@/lib/api";
import PredictionCard from "./PredictionCard";
import { Upload, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function UploadCard() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));

    setPrediction(null);
    setShowResult(false);
  };

  const handlePredict = async () => {
    if (!file) return;

    try {
      setLoading(true);
      setShowResult(false);

      const result = await predictDisease(file);

      setPrediction(result);

      setTimeout(() => {
        setLoading(false);
        setShowResult(true);
      }, 500);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Prediction failed. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-green-500/20
        bg-gradient-to-br
        from-[#101010]/95
        to-[#181818]/90
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,.45)]
        p-8
      "
    >
      {/* Animated Border Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute inset-0 rounded-3xl border border-green-400/20 pointer-events-none"
      />

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImage}
      />

      <div
        onClick={() => inputRef.current?.click()}
        className="
          relative
          rounded-2xl
          border-2
          border-dashed
          border-green-500/30
          bg-green-500/5
          p-10
          transition
          hover:border-green-400
          hover:bg-green-500/10
          cursor-pointer
          overflow-hidden
        "
      >
        {/* Upload Success */}
        {preview && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-5 right-5 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white font-bold shadow-lg"
          >
            ✓
          </motion.div>
        )}

        {!preview ? (
          <>
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <Upload className="mx-auto h-16 w-16 text-green-400" />
            </motion.div>

            <p className="mt-4 text-lg font-semibold text-white">
              Upload Crop Image
            </p>

            <p className="mt-2 text-gray-400">
              JPG • PNG • JPEG
            </p>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <motion.img
              whileHover={{
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              src={preview}
              alt="Leaf Preview"
              className="w-full max-h-96 rounded-2xl object-cover"
            />

            {loading && (
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
                className="absolute inset-x-0 h-2 bg-green-400 shadow-[0_0_30px_#22c55e]"
              />
            )}
          </motion.div>
        )}
      </div>

      {file && (
        <>
          {/* AI Status */}
          <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
            <span>⚡ AI Ready</span>
            <span>CNN • MobileNetV2</span>
          </div>

          <button
            onClick={handlePredict}
            disabled={loading}
            className="
              w-full
              mt-6
              rounded-2xl
              py-5
              font-bold
              text-lg
              text-white
              bg-gradient-to-r
              from-green-500
              to-emerald-600
              shadow-[0_0_35px_rgba(34,197,94,.45)]
              hover:scale-[1.02]
              transition
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Analyzing..." : "🤖 Detect Disease"}
          </button>
        </>
      )}

      {loading && (
        <div className="mt-8 flex flex-col items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          >
            <LoaderCircle className="h-14 w-14 text-green-400" />
          </motion.div>

          <p className="mt-4 animate-pulse text-lg font-medium text-green-400">
            Analyzing leaf...
          </p>
        </div>
      )}

      {showResult && prediction && (
        <PredictionCard
          disease={prediction.disease}
          confidence={Number(prediction.confidence)}
          treatment={prediction.treatment}
          prevention={prediction.prevention}
        />
      )}
    </motion.div>
  );
}
