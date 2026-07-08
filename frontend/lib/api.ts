import { compressImage } from "@/utils/compressImage";


const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://agrivision-ai-ktvr.onrender.com";


export async function predictDisease(file: File) {

  const compressedFile =
    await compressImage(file);


  const formData =
    new FormData();


  formData.append(
    "file",
    compressedFile
  );


  const response =
    await fetch(
      `${API_URL}/predict`,
      {
        method: "POST",
        body: formData,
      }
    );


  const data =
    await response.json();


  if (!response.ok) {

    throw new Error(
      data.detail ||
      "Prediction failed"
    );

  }


  return data;

}
