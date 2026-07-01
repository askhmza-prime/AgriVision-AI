const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://agrivision-ai-ktvr.onrender.com/predict";

export async function predictDisease(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return response.json();
}
