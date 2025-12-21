"use client";

import Image from "next/image";
import { HOW_IT_WORKS } from "@/data/constants";

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text">
            Simple steps to feeling better
          </h2>
          <p className="mt-4 text-lg text-brand-text-muted">
            Your journey to calm, one gentle step at a time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {HOW_IT_WORKS.map((step, index) => (
            <div key={step.step} className="flex flex-col items-center text-center group">
              {/* Step number */}
              <div className="w-12 h-12 rounded-full bg-brand-primary text-white font-semibold text-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.step}
              </div>

              {/* Screenshot */}
              <div className="relative w-48 h-96 mb-6 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={step.screenshot}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-semibold text-brand-text mb-2">
                {step.title}
              </h3>
              <p className="text-brand-text-muted max-w-xs">
                {step.description}
              </p>

              {/* Connector line (hidden on last item) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+6rem)] w-[calc(100%-12rem)] h-0.5 bg-gradient-to-r from-brand-primary/30 to-brand-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

