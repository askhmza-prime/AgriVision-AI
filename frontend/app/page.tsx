import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import UploadCard from "@/components/UploadCard";

const Features = dynamic(() => import("@/components/Features"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b07] text-white">
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <UploadCard />
      </section>

      <Features />

      <CTA />

      <Footer />
    </main>
  );
}
