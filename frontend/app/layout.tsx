import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";

const CursorGlow = dynamic(
  () => import("@/components/CursorGlow"),
  {
    ssr: false,
  }
);

const PageTransition = dynamic(
  () => import("@/components/PageTransition"),
  {
    ssr: false,
  }
);

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
      <body suppressHydrationWarning>
        <CursorGlow />

        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
