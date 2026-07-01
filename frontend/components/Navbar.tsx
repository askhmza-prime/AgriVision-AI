"use client";

import Link from "next/link";
import { Leaf, Volume2, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 z-50 w-full"
      >
        <div className="mx-auto max-w-7xl px-6 mt-5 rounded-full border border-green-500/10 bg-black/20 backdrop-blur-2xl">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={closeMenu}
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 shadow-lg shadow-green-500/30"
              >
                <Leaf className="h-7 w-7 text-green-400" />
              </motion.div>

              <div>
                <h1 className="text-2xl font-bold text-white">
                  AgriVision AI
                </h1>

                <p className="text-xs text-gray-400">
                  AI Powered Crop Disease Detection
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-10 md:flex">
              <Link
                href="/"
                className="relative font-semibold text-green-400 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-green-400 after:shadow-[0_0_12px_#22c55e]"
              >
                Home
              </Link>

              <Link
                href="/detect"
                className="transition duration-300 hover:scale-110 hover:text-green-400 text-white"
              >
                Detect
              </Link>

              <Link
                href="/about"
                className="transition duration-300 hover:scale-110 hover:text-green-400 text-white"
              >
                About
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 md:flex">
              <Link
                href="/detect"
                className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-7 py-3 font-semibold text-white shadow-xl shadow-green-500/40 transition-all duration-300 hover:scale-105"
              >
                Start Detecting 🌿
              </Link>

              <motion.button
                whileHover={{ rotate: 20, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-green-500/30 transition hover:bg-green-500/10"
              >
                <Volume2 className="h-5 w-5 text-white" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-500/30 text-white md:hidden"
            >
              {open ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-3xl border border-green-500/20 bg-black/90 p-6 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-5">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-lg font-semibold text-green-400"
              >
                Home
              </Link>

              <Link
                href="/detect"
                onClick={closeMenu}
                className="text-lg text-white transition hover:text-green-400"
              >
                Detect
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="text-lg text-white transition hover:text-green-400"
              >
                About
              </Link>

              <Link
                href="/detect"
                onClick={closeMenu}
                className="mt-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-3 text-center font-semibold text-white shadow-xl shadow-green-500/40"
              >
                Start Detecting 🌿
              </Link>

              <motion.button
                whileHover={{ rotate: 20, scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="mx-auto mt-2 flex h-11 w-11 items-center justify-center rounded-full border border-green-500/30 transition hover:bg-green-500/10"
              >
                <Volume2 className="h-5 w-5 text-white" />
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
        }
