"use client";

import UploadCard from "@/components/UploadCard";
import { useState } from "react";

export default function DetectPage() {

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

      </div>

    </main>

  );
}
