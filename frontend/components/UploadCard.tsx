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

      // Small delay so the scan animation finishes nicely
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
      className="rounded-3xl border border-green-500/20 bg-black/40 p-8 shadow-2xl backdrop-blur-xl"
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImage}
      />

      <div
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-green-500/40 p-10 text-center transition duration-300 hover:border-green-400"
      >
        {!preview ? (
          <>
            <Upload className="mx-auto h-14 w-14 text-green-400" />

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
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src={preview}
              alt="Leaf Preview"
              className="max-h-96 w-full rounded-xl object-cover"
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
        <button
          onClick={handlePredict}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-4 text-lg font-bold text-white transition shadow-[0_0_40px_rgba(34,197,94,.45)] hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "🤖 Detect Disease"}
        </button>
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
