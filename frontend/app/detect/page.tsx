"use client";

import UploadCard from "@/components/UploadCard";
import PredictionCard from "@/components/PredictionCard";
import { useState } from "react";

export default function DetectPage() {

  const [loading, setLoading] = useState(false);

  const predict = () => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2500);

  };

  return (

    <main className="min-h-screen bg-green-50 p-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-green-700">

          🌿 Disease Detection

        </h1>

        <p className="text-center mt-3 text-gray-600">

          Upload a crop leaf image to detect diseases.

        </p>

        <div className="mt-10">

          <UploadCard />

        </div>

        <button
          onClick={predict}
          className="w-full mt-8 bg-green-600 text-white py-4 rounded-xl text-xl font-bold hover:bg-green-700 transition"
        >

          🤖 Predict Disease

        </button>

        {loading && (

          <div className="text-center mt-8">

            <div className="animate-spin text-6xl">
              🌿
            </div>

            <p className="mt-4">
              AI is analyzing the leaf...
            </p>

          </div>

        )}

        {!loading && (

          <PredictionCard
            disease="Tomato Early Blight"
            confidence={96.8}
            treatment="Apply Mancozeb fungicide and remove infected leaves."
            prevention="Avoid overhead watering and rotate crops regularly."
          />

        )}

      </div>

    </main>

  );
}
