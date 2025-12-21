import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustChips } from "@/components/TrustChips";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { PrivacySafety } from "@/components/PrivacySafety";
import { ScreenshotsGallery } from "@/components/ScreenshotsGallery";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustChips />
        <FeaturesGrid />
        <HowItWorks />
        <PrivacySafety />
        <ScreenshotsGallery />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

