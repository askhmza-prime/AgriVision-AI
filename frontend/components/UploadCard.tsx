"use client";

import { predictDisease } from "@/lib/api";
import PredictionCard from "./PredictionCard";
import { Upload, LoaderCircle, Sparkles } from "lucide-react";
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
      setLoadingStage(0);

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

      {/* Two Column Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE - Upload Area */}
        <div
          onClick={() => {
            if (!loading) inputRef.current?.click();
          }}
          className="
            relative
            rounded-3xl
            border-2
            border-dashed
            border-green-500/30
            bg-green-500/5
            min-h-[380px]
            flex
            flex-col
            justify-center
            items-center
            cursor-pointer
            hover:border-green-400
            hover:bg-green-500/10
            transition
            overflow-hidden
            disabled:cursor-not-allowed
          "
        >
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
            <p className="text-gray-400 text-sm">Click to change image</p>
          )}
        </div>

        {/* RIGHT SIDE - Preview Area */}
        <div className="relative rounded-3xl overflow-hidden h-[380px] bg-gradient-to-br from-[#111] to-[#1b1b1b] border border-green-500/20 flex items-center justify-center group shadow-[0_0_40px_rgba(34,197,94,.15)]">
          {preview ? (
            <>
              {/* Floating Glow Behind Image */}
              <div className="absolute w-72 h-72 rounded-full bg-green-500/20 blur-[100px]" />

              <motion.img
                whileHover={{
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                src={preview}
                alt="Leaf Preview"
                className="w-full h-full object-cover relative z-10"
              />

              {/* Scanner Corners */}
              <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-green-400 z-20"></div>
              <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-green-400 z-20"></div>
              <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-green-400 z-20"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-green-400 z-20"></div>

              {/* AI Vision Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-5 right-5 rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white z-30"
              >
                AI Vision
              </motion.div>

              {/* Preview Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10"
              />

              {/* Loading Animation */}
              {loading && (
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                  className="absolute inset-x-0 h-2 bg-green-400 shadow-[0_0_30px_#22c55e] z-20"
                />
              )}
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 text-gray-500">
              <Upload className="w-10 h-10" />
              <p>No image selected</p>
            </div>
          )}
        </div>
      </div>

      {/* Button, AI Status, and Prediction - Full Width Below Grid */}
      {file && (
        <>
          {/* AI Status */}
          <div className="mt-8 flex items-center justify-between text-sm text-gray-400">
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
              py-6
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
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <Sparkles className="h-5 w-5" />
            {loading ? "Analyzing..." : "Detect Disease"}
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

          <motion.p
            key={loadingStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-lg font-medium text-green-400"
          >
            {loadingStages[loadingStage]}
          </motion.p>

          <p className="mt-2 text-sm text-gray-400">
            Please wait while our model processes the image.
          </p>
        </div>
      )}

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
