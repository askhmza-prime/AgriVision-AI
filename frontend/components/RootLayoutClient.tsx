"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

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

export default function RootLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <CursorGlow />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  );
}
