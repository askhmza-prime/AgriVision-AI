"use client";

import { predictDisease } from "@/lib/api";
import { useRef, useState } from "react";

export default function UploadCard() {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPrediction(null);

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(selectedFile);
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
    <div className="bg-white rounded-3xl shadow-xl p-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImage}
        hidden
      />

      <div
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-green-500 rounded-2xl h-72 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition overflow-hidden"
      >
        {image ? (
          <img
            src={image}
            alt="Leaf Preview"
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <>
            <div className="text-6xl">🌿</div>

            <h2 className="text-xl font-bold mt-4">
              Upload Crop Image
            </h2>

            <p className="text-gray-500 mt-2">
              JPG • PNG • JPEG
            </p>
          </>
        )}
      </div>

      {file && (
        <button
          onClick={handlePredict}
          disabled={loading}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Predicting..." : "Predict Disease"}
        </button>
      )}

      {prediction && (
        <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-6 shadow-md">
          <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
            🌿 Prediction Result
          </h2>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm text-gray-500">Disease</p>
              <p className="text-lg font-semibold text-gray-900">
                {prediction.disease || "Unknown"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Confidence</p>
              <p className="text-lg font-semibold text-green-700">
                {prediction.confidence !== null &&
                prediction.confidence !== undefined
                  ? `${Number(prediction.confidence).toFixed(2)}%`
                  : "N/A"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Treatment</p>
              <p className="text-gray-700">
                {prediction.treatment || "No treatment available."}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Prevention</p>
              <p className="text-gray-700">
                {prediction.prevention || "No prevention information available."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
