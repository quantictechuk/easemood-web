"use client";

import Image from "next/image";
import { APP_STORE_URL } from "@/data/constants";

export function FinalCTA() {
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

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105 active:scale-95"
          >
            <Image
              src="/assets/app-store-badge-white.svg"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="h-[60px] w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

