"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-50">

      <Link
      href="/"
      className="text-3xl font-bold text-green-700">

      🌿 AgriVision AI

      </Link>

      <div className="flex gap-8 font-medium">

        <Link href="/">
          Home
        </Link>

        <Link href="/detect">
          Detection
        </Link>

        <Link href="/about">
          About
        </Link>

      </div>

    </nav>
  );
}
