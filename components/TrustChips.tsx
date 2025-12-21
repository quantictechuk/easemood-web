"use client";

import { Shield, Ban, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TRUST_ITEMS = [
  {
    icon: Shield,
    label: "Private by design",
  },
  {
    icon: Ban,
    label: "No ads",
  },
  {
    icon: Smartphone,
    label: "On-device protections",
  },
];

export function TrustChips() {
  return (
    <section className="py-12 bg-brand-cream border-y border-brand-surface/30">
      <div className="container-max section-padding">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {TRUST_ITEMS.map((item) => (
            <Badge
              key={item.label}
              variant="trust"
              className="text-sm py-2 px-4 gap-2"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

