"use client";

import { predictDisease } from "@/lib/api";
import PredictionCard from "./PredictionCard";
import { Upload, LoaderCircle, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function UploadCard() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
  const [fileName, setFileName] = useState<string>("");
  const [fileSize, setFileSize] = useState<string>("");

  const loadingStages = [
    "📤 Uploading image...",
    "🧠 Running AI model...",
    "🌿 Detecting disease...",
    "📄 Generating report...",
  ];

  // Cleanup preview URL on unmount or when preview changes
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // Simulate loading stages
  useEffect(() => {
    if (!loading) return;

    const stageInterval = setInterval(() => {
      setLoadingStage((prev) => {
        if (prev < loadingStages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(stageInterval);
  }, [loading]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setFileName(selectedFile.name);
    setFileSize(formatFileSize(selectedFile.size));
    setPreview(URL.createObjectURL(selectedFile));

    setPrediction(null);
    setShowResult(false);
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreview(null);
    setFileName("");
    setFileSize("");
    setPrediction(null);
    setShowResult(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handlePredict = async () => {
    if (!file) return;

    try {
      setLoading(true);
      setShowResult(false);
      setLoadingStage(0);

      const result = await predictDisease(file);

      setPrediction(result);
      
        setLoading(false);
        setShowResult(true);
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
      className="max-w-6xl mx-auto rounded-[28px] bg-[#111b16] border border-green-500/20 backdrop-blur-xl p-8"
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImage}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Upload className="w-5 h-5 text-green-400" />
          <h2 className="text-xl font-bold text-white">Upload Crop Image</h2>
        </div>
        <p className="text-sm text-gray-400">JPG, PNG, JPEG (Max 10MB)</p>
      </div>

      {/* Two Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* LEFT SIDE - Upload Area (70% / 2 cols) */}
        <div className="lg:col-span-2">
          <div
            onClick={() => {
              if (!loading && !file) inputRef.current?.click();
            }}
            className="relative rounded-3xl border-2 border-dashed border-green-500/40 bg-green-500/5 min-h-[300px] flex flex-col justify-center items-center cursor-pointer hover:border-green-400 hover:bg-green-500/10 transition overflow-hidden"
          >
            {!file ? (
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
                  <Upload className="mx-auto h-12 w-12 text-green-400 mb-4" />
                </motion.div>

                <p className="text-base font-semibold text-white">
                  Drag & drop an image here
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  or click to browse
                </p>
              </>
            ) : (
              <p className="text-gray-400 text-sm">Click to change image</p>
            )}
          </div>
        </div>

        {/* RIGHT SIDE - Preview Area (30% / 1 col) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-green-500/20 flex items-center justify-center group shadow-[0_0_40px_rgba(34,197,94,.15)] h-[300px]">
          {preview ? (
            <>
              {/* Floating Glow Behind Image */}
              <div className="absolute w-48 h-48 rounded-full bg-green-500/20 blur-[80px]" />

              <motion.img
                whileHover={{
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                src={preview}
                alt="Leaf Preview"
                className="w-full h-full object-cover relative z-10"
              />

              {/* Remove Button */}
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={handleRemoveImage}
                className="absolute top-4 right-4 bg-gray-800/80 hover:bg-gray-700 rounded-full p-2 z-30 transition"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>

              {/* Preview Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10"
              />
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 text-gray-500">
              <Upload className="w-8 h-8" />
              <p className="text-sm">No image selected</p>
            </div>
          )}
        </div>
      </div>

      {/* File Info & Button Section */}
      {file && (
        <div className="space-y-4">
          {/* File Info */}
          <div className="flex items-center justify-between text-sm text-gray-400 px-2">
            <span>{fileName}</span>
            <div className="flex items-center gap-2">
              <span>{fileSize}</span>
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Detect Button */}
          <button
            onClick={handlePredict}
            disabled={loading}
            className="w-full rounded-2xl py-4 font-bold text-base text-white bg-gradient-to-r from-green-500 to-emerald-600 shadow-[0_0_35px_rgba(34,197,94,.45)] hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Upload className="h-5 w-5" />
            {loading ? "Analyzing..." : "Detect Disease"}
          </button>

          {/* Bottom Hint */}
          <p className="text-xs text-gray-500 text-center">
            ⚡ AI will analyze your image in seconds
          </p>
        </div>
      )}

      {/* Loading State */}
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
            <LoaderCircle className="h-12 w-12 text-green-400" />
          </motion.div>

          <motion.p
            key={loadingStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-base font-medium text-green-400"
          >
            {loadingStages[loadingStage]}
          </motion.p>

          <p className="mt-2 text-sm text-gray-400">
            Please wait while our model processes the image.
          </p>
        </div>
      )}

      {/* Results */}
      {showResult && prediction && (
        <div className="mt-8">
          <PredictionCard
            disease={prediction.disease}
            confidence={Number(prediction.confidence)}
            treatment={prediction.treatment}
            prevention={prediction.prevention}
          />
        </div>
      )}
    </motion.div>
  );
}
