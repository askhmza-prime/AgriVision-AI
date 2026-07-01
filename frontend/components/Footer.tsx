import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-green-500/20 bg-black">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">

        <div>
          <h2 className="text-2xl font-bold text-green-400">
            AgriVision AI
          </h2>

          <p className="mt-4 text-gray-400">
            AI Powered Crop Disease Detection platform.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">
            Navigation
          </h3>

          <div className="mt-4 space-y-3 text-gray-400">
            <Link href="/">Home</Link>
            <br />
            <Link href="/detect">Detect</Link>
            <br />
            <Link href="/about">About</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">
            Features
          </h3>

          <div className="mt-4 space-y-3 text-gray-400">
            AI Detection
            <br />
            Treatment Guide
            <br />
            Prevention Tips
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">
            Contact
          </h3>

          <p className="mt-4 text-gray-400">
            support@agrivision.ai
          </p>
        </div>

      </div>

      <div className="border-t border-green-500/20 py-6 text-center text-gray-500">
        © 2026 AgriVision AI. All rights reserved.
      </div>

    </footer>
  );
}
