"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: pos.x - 150,
        y: pos.y - 150,
      }}
      transition={{
        type: "spring",
        damping: 30,
      }}
      className="fixed pointer-events-none z-0 w-[300px] h-[300px] rounded-full bg-green-500/20 blur-[140px]"
    />
  );
}
