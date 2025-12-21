"use client";

import { Button } from "@/components/ui/button";
import { APP_STORE_URL } from "@/data/constants";

export function FinalCTA() {
  const isComingSoon = !APP_STORE_URL;

  return (
    <section className="py-20 md:py-28 bg-brand-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-6">
            Ready to find your calm?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Start your journey to better self-awareness today.
          </p>

          {isComingSoon ? (
            <Button
              size="lg"
              className="bg-white text-brand-primary hover:bg-white/90 cursor-not-allowed"
              disabled
            >
              <span className="mr-2">🍎</span>
              Coming Soon to App Store
            </Button>
          ) : (
            <Button
              size="lg"
              asChild
              className="bg-white text-brand-primary hover:bg-white/90"
            >
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <span className="mr-2">🍎</span>
                Download on App Store
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

