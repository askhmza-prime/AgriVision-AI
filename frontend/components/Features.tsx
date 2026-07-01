"use client";

import { Brain, Zap, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";
import { memo } from "react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Advanced deep learning for accurate results.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get disease detection in seconds.",
  },
  {
    icon: Leaf,
    title: "Treatment Guide",
    description: "Personalized treatment and prevention tips.",
  },
  {
    icon: Users,
    title: "Farmer Friendly",
    description: "Simple, easy to use for everyone.",
  },
];

function Features() {
  return (
    <section className="bg-[#07130a] py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Four Horizontal Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20">
                  <Icon className="h-7 w-7 text-green-400" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-lg">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Features);
