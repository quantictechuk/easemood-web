"use client";

import {
  Heart,
  BookOpen,
  Wind,
  MessageCircle,
  BarChart3,
  Lock,
  LucideIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FEATURES } from "@/data/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  BookOpen,
  Wind,
  MessageCircle,
  BarChart3,
  Lock,
};

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 md:py-28 bg-texture">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text">
            Everything you need
          </h2>
          <p className="mt-4 text-lg text-brand-text-muted">
            Gentle tools to help you check in, reflect, and find your calm.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <Card
                key={feature.title}
                className="card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors duration-300">
                    {Icon && (
                      <Icon className="w-6 h-6 text-brand-primary" />
                    )}
                  </div>
                  <CardTitle className="group-hover:text-brand-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

