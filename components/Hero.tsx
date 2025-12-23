"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, SCREENSHOTS } from "@/data/constants";

// Remove unused variable check - APP_STORE_URL is now always defined
import { cn } from "@/lib/utils";

const HERO_SCREENSHOTS = SCREENSHOTS.slice(0, 3);

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SCREENSHOTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-surface/50 rounded-full blur-3xl" />
      </div>

      <div className="container-max section-padding relative z-10 pt-28 md:pt-36 pb-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-text leading-tight animate-fade-in-up">
              A calm space
              <br />
              <span className="text-brand-primary">to reflect.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-text-muted max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-100">
              Mood check-ins, private journaling, breathing, and a gentle
              companion—at your pace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start items-center animate-fade-in-up delay-200">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <Image
                  src="/assets/app-store-badge-black.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={54}
                  className="h-[54px] w-auto"
                  priority
                />
              </a>

              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="#screenshots">See how it works</a>
              </Button>
            </div>
          </div>

          {/* Right: Phone Mockup with Carousel */}
          <div className="flex justify-center animate-fade-in delay-300 mt-8 lg:mt-0">
            <div className="relative">
              {/* Phone frame */}
              <div className="phone-mockup w-[240px] sm:w-[280px] lg:w-[320px] lg:animate-float">
                <div className="phone-screen aspect-[9/19.5]">
                  <div className="relative w-full h-full">
                    {HERO_SCREENSHOTS.map((screenshot, index) => (
                      <Image
                        key={screenshot.src}
                        src={screenshot.src}
                        alt={screenshot.caption}
                        fill
                        className={cn(
                          "object-cover transition-opacity duration-500",
                          currentSlide === index ? "opacity-100" : "opacity-0"
                        )}
                        priority={index === 0}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Carousel dots */}
              <div className="flex justify-center gap-2 mt-6">
                {HERO_SCREENSHOTS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      currentSlide === index
                        ? "w-6 bg-brand-primary"
                        : "bg-brand-surface hover:bg-brand-primary/50"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <ChevronDown className="w-6 h-6 text-brand-text-muted" />
        </div>
      </div>
    </section>
  );
}

