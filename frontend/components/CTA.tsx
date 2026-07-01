"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-[#07130a] py-28">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mx-auto max-w-5xl rounded-[40px] border border-green-500/20 bg-gradient-to-r from-green-900/30 to-black/40 p-14 text-center backdrop-blur-xl"
      >

        <h2 className="text-5xl font-bold text-white">
          Healthy Crops.
          <br />
          Smarter Farming.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Detect diseases before they spread and improve your crop health using AI.
        </p>

        <Link
          href="/detect"
          className="mt-10 inline-block rounded-2xl bg-green-500 px-10 py-5 font-bold text-white transition hover:scale-105"
        >
          Start Detecting
        </Link>

      </motion.div>

    </section>
  );
}
