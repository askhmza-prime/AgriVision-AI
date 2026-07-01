import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "AgriVision AI",
  description: "AI Powered Crop Disease Detection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CursorGlow />

        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
