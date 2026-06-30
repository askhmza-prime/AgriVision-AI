import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgriVision AI",
  description: "AI Powered Crop Disease Detection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
