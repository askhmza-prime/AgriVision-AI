"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-150);
  const mouseY = useMotionValue(-150);

  const x = useSpring(mouseX, {
    damping: 30,
    stiffness: 200,
  });

  const y = useSpring(mouseY, {
    damping: 30,
    stiffness: 200,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed pointer-events-none z-0 w-[300px] h-[300px] rounded-full bg-green-500/20 blur-[140px]"
    />
  );
}
