"use client";

import { predictDisease } from "@/lib/api";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function UploadCard() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPrediction(null);

    setPreview(URL.createObjectURL(selectedFile));
  };

  const handlePredict = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const result = await predictDisease(file);

      setPrediction(result);
    } catch (error) {
      console.error(error);
      alert("Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 shadow-2xl"
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
        className="border-2 border-dashed border-green-500/40 rounded-2xl p-10 text-center cursor-pointer hover:border-green-400 transition duration-300 overflow-hidden"
      >
        {!preview ? (
          <>
            <Upload className="mx-auto w-14 h-14 text-green-400" />

            <p className="mt-4 text-white font-semibold text-lg">
              Upload Crop Image
            </p>

            <p className="text-gray-400 mt-2">
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
              className="w-full rounded-xl max-h-96 object-cover"
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
          className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 py-4 rounded-xl text-white font-bold text-lg hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "🤖 Analyzing..." : "🤖 Detect Disease"}
        </button>
      )}

      {loading && (
        <div className="mt-6 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="text-5xl"
          >
            🌿
          </motion.div>

          <p className="text-green-400 mt-4 animate-pulse font-medium">
            Analyzing leaf...
          </p>
        </div>
      )}

      {prediction && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-2xl bg-green-500/10 border border-green-500/20 p-6"
        >
          <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
            🌿 Prediction Result
          </h2>

          <div className="mt-5 space-y-4 text-white">
            <div>
              <p className="text-sm text-gray-400">Disease</p>
              <p className="text-xl font-semibold">
                {prediction.disease || "Unknown"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Confidence</p>
              <p className="text-xl font-semibold text-green-400">
                {prediction.confidence !== null &&
                prediction.confidence !== undefined
                  ? `${Number(prediction.confidence).toFixed(2)}%`
                  : "N/A"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Treatment</p>
              <p className="text-gray-200">
                {prediction.treatment || "No treatment available."}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Prevention</p>
              <p className="text-gray-200">
                {prediction.prevention ||
                  "No prevention information available."}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
