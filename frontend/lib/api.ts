import { compressImage } from "@/utils/compressImage";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://agrivision-ai-ktvr.onrender.com/predict";


export async function predictDisease(file: File) {
  const formData = new FormData();


  // compress image before sending

  const compressedFile =
    await compressImage(file);


  formData.append(
    "file",
    compressedFile
  );


  const controller =
    new AbortController();


  const timeout =
    setTimeout(
      () => controller.abort(),
      60000
    );


  try {

    const response =
      await fetch(
        API_URL,
        {
          method: "POST",
          body: formData,
          cache: "no-store",
          signal: controller.signal,
        }
      );


    clearTimeout(
      timeout
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


  } catch (error) {


    clearTimeout(
      timeout
    );


    console.error(
      "Prediction Error:",
      error
    );


    if (
      error instanceof DOMException &&
      error.name === "AbortError"
    ) {

      throw new Error(
        "AI server took too long. Please retry."
      );

    }


    throw error;

  }

}
