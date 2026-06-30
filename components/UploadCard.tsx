"use client";

import { useRef, useState } from "react";

export default function UploadCard() {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
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
        className="border-2 border-dashed border-green-500 rounded-2xl h-72 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition"
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

    </div>
  );
}
