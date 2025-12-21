"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY_NAME, SUPPORT_EMAIL } from "@/data/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-brand-background border-t border-brand-surface/30">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link href="/" className="block">
            <div className="relative h-10 w-48 sm:w-56">
              <Image
                src="/assets/logo.png"
                alt="EaseMood - Your calm companion"
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-brand-text-muted hover:text-brand-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-brand-text-muted hover:text-brand-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-brand-text-muted hover:text-brand-primary transition-colors"
            >
              Support
            </Link>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-brand-text-muted hover:text-brand-primary transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-brand-surface/30 text-center">
          <p className="text-sm text-brand-text-muted">
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

