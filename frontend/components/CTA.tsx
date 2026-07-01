import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-green-700 text-white text-center px-6">

      <h2 className="text-5xl font-bold">
        Ready to Protect Your Crops?
      </h2>

      <p className="mt-6 text-xl max-w-2xl mx-auto">

        Upload a crop image and let our AI
        detect diseases within seconds.

      </p>

      <Link href="/detect">

        <button className="mt-10 bg-white text-green-700 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition">

          Start Detecting →

        </button>

      </Link>

    </section>
  );
}
