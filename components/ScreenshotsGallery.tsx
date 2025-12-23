"use client";

import Image from "next/image";
import { SCREENSHOTS, APP_STORE_URL } from "@/data/constants";

export function ScreenshotsGallery() {
  return (
    <section id="screenshots" className="py-20 md:py-28 bg-texture">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text">
            Take a closer look
          </h2>
          <p className="mt-4 text-lg text-brand-text-muted">
            Explore the calm, intuitive experience of EaseMood.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SCREENSHOTS.map((screenshot, index) => (
            <div
              key={screenshot.src}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <Image
                  src={screenshot.src}
                  alt={screenshot.caption}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm text-center text-brand-text-muted group-hover:text-brand-text transition-colors">
                {screenshot.caption}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105 active:scale-95"
          >
            <Image
              src="/assets/app-store-badge-black.svg"
              alt="Download on the App Store"
              width={160}
              height={54}
              className="h-[54px] w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

