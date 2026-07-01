const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://agrivision-ai-ktvr.onrender.com/predict";

export async function predictDisease(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || "Prediction failed");
    }

    return response.json();
  } catch (error) {
    clearTimeout(timeout);

    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Request timed out.");
    }

    throw error;
  }
}
