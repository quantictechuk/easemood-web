import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { COMPANY_NAME, SUPPORT_EMAIL } from "@/data/constants";

export const metadata: Metadata = {
  title: "Terms of Service - EaseMood",
  description: "Terms of Service for EaseMood - Your Calm Companion",
};

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-brand-background">
        {/* Header */}
        <div className="bg-brand-cream border-b border-brand-surface/30">
          <div className="container-max section-padding py-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-text">
              Terms of Service
            </h1>
            <p className="mt-2 text-brand-text-muted">
              Last updated: December 2024
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="container-max section-padding py-12 max-w-4xl">
          <div className="prose prose-lg prose-brand max-w-none">
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                By downloading, installing, or using the EaseMood application ("App"),
                you agree to be bound by these Terms of Service ("Terms"). If you do not
                agree to these Terms, please do not use the App.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                2. Description of Service
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                EaseMood is a personal wellness application designed to help users track
                their mood, journal their thoughts, practice breathing exercises, and
                engage with calming tools. The App is provided by {COMPANY_NAME}.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                3. Not a Medical Service
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                EaseMood is not a medical device and is not intended to diagnose, treat,
                cure, or prevent any disease or mental health condition. The App is
                designed for general wellness purposes only.
              </p>
              <p className="text-brand-text-muted leading-relaxed mt-4">
                If you are experiencing a mental health crisis or emergency, please
                contact emergency services or a mental health professional immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                4. User Responsibilities
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2 mt-2">
                <li>Use the App in accordance with applicable laws</li>
                <li>Not attempt to reverse engineer or modify the App</li>
                <li>Not use the App for any unlawful purpose</li>
                <li>Keep your device secure to protect your personal data</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                All content, features, and functionality of the App are owned by{" "}
                {COMPANY_NAME} and are protected by international copyright, trademark,
                and other intellectual property laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                6. In-App Purchases and Subscriptions
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                Some features of EaseMood may require a subscription or in-app purchase.
                Subscriptions are billed through Apple's App Store and are subject to
                Apple's terms and conditions.
              </p>
              <p className="text-brand-text-muted leading-relaxed mt-4">
                You may cancel your subscription at any time through your App Store
                account settings. Refunds are handled according to Apple's refund policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                The App is provided "as is" and "as available" without warranties of any
                kind, either express or implied. We do not warrant that the App will be
                uninterrupted, error-free, or free of viruses or other harmful
                components.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                To the maximum extent permitted by law, {COMPANY_NAME} shall not be
                liable for any indirect, incidental, special, consequential, or punitive
                damages arising from your use of the App.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                9. Privacy
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                Your use of the App is also governed by our{" "}
                <Link href="/privacy" className="text-brand-primary hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify
                users of any material changes. Your continued use of the App after such
                modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                11. Governing Law
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                These Terms shall be governed by and construed in accordance with the
                laws of England and Wales, without regard to its conflict of law
                provisions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                12. Contact Us
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                If you have any questions about these Terms, please contact us at:{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-brand-primary hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

