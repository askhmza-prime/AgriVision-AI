import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UploadCard from "@/components/UploadCard";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">

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
