"use client";

import { Brain, ScanSearch, ShieldCheck, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ScanSearch,
    title: "Disease Detection",
    text: "Upload a crop image and detect diseases instantly.",
  },
  {
    icon: Brain,
    title: "AI Powered",
    text: "Deep learning model trained for high accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Treatment Guide",
    text: "Get prevention and treatment suggestions instantly.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    text: "Works beautifully on desktop, tablet and mobile.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#08120b] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-white">
          Why Choose AgriVision AI?
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-green-500/20 bg-[#121212] p-8 transition"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20">
                  <Icon className="h-8 w-8 text-green-400" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
