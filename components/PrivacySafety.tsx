"use client";

import Link from "next/link";
import { Check, X, Shield, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRIVACY_POINTS } from "@/data/constants";

export function PrivacySafety() {
  return (
    <section id="privacy" className="py-20 md:py-28 bg-brand-primary/5">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-primary/10 mb-6">
              <Shield className="w-8 h-8 text-brand-primary" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text">
              Your privacy matters
            </h2>
            <p className="mt-4 text-lg text-brand-text-muted max-w-xl mx-auto">
              EaseMood is built with privacy at its core. Your reflections are yours alone.
            </p>
          </div>

          {/* Privacy Points */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What we collect */}
            <div className="bg-brand-cream rounded-2xl p-6 md:p-8">
              <h3 className="font-semibold text-lg text-brand-text mb-4">
                What we collect
              </h3>
              <ul className="space-y-3">
                {PRIVACY_POINTS.collect.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-brand-text-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we don't collect */}
            <div className="bg-brand-cream rounded-2xl p-6 md:p-8">
              <h3 className="font-semibold text-lg text-brand-text mb-4">
                What we never collect
              </h3>
              <ul className="space-y-3">
                {PRIVACY_POINTS.dontCollect.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-brand-text-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Face ID note */}
          <div className="flex items-center justify-center gap-3 text-center mb-8 p-4 bg-brand-cream/50 rounded-xl">
            <Fingerprint className="w-5 h-5 text-brand-primary" />
            <p className="text-brand-text-muted">
              Face ID is processed locally on your device. No biometric data is ever stored or transmitted.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/terms">Terms of Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

