import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { COMPANY_NAME, SUPPORT_EMAIL } from "@/data/constants";

export const metadata: Metadata = {
  title: "Privacy Policy - EaseMood",
  description: "Privacy Policy for EaseMood - Your Calm Companion",
};

export default function PrivacyPage() {
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
              Privacy Policy
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
                Introduction
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                {COMPANY_NAME} ("we," "our," or "us") operates the EaseMood mobile
                application (the "App"). This Privacy Policy explains how we collect,
                use, and protect your information when you use our App.
              </p>
              <p className="text-brand-text-muted leading-relaxed mt-4">
                We are committed to protecting your privacy. EaseMood is designed with
                privacy as a core principle—your personal reflections and journal
                entries are yours alone.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-brand-text mt-6 mb-3">
                Information You Provide
              </h3>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li>Display name and preferences (stored locally on your device)</li>
                <li>Mood check-in data (stored locally on your device)</li>
                <li>Journal entries (stored locally on your device)</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-text mt-6 mb-3">
                Opt-In Analytics (Optional)
              </h3>
              <p className="text-brand-text-muted leading-relaxed">
                If you choose to help improve EaseMood, we may collect anonymous usage
                analytics such as:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2 mt-2">
                <li>App feature usage patterns (anonymized)</li>
                <li>App performance metrics</li>
                <li>Crash reports to help us fix bugs</li>
              </ul>
              <p className="text-brand-text-muted leading-relaxed mt-4">
                This data is collected only with your explicit consent and can be
                disabled at any time in the app settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                Information We Do NOT Collect
              </h2>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2">
                <li>Raw journal text or mood notes</li>
                <li>Your location data</li>
                <li>Your contacts</li>
                <li>Advertising identifiers or tracking data</li>
                <li>Any data for ad profiling</li>
                <li>Biometric data (Face ID is processed locally by iOS)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                How We Use Your Information
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                Any information we collect is used solely to:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2 mt-2">
                <li>Provide and improve the App experience</li>
                <li>Fix bugs and improve app stability</li>
                <li>Understand anonymous usage patterns to guide development</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                Data Storage and Security
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                Your personal data (journal entries, mood check-ins, preferences) is
                stored locally on your device. We do not have access to this data.
              </p>
              <p className="text-brand-text-muted leading-relaxed mt-4">
                Face ID authentication is handled entirely by iOS and no biometric data
                is ever stored or transmitted by EaseMood.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                Data Sharing
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                We do not sell, share, or trade your personal data. We do not use your
                data for advertising purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                Your Rights
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-brand-text-muted space-y-2 mt-2">
                <li>Disable analytics at any time in app settings</li>
                <li>Delete all your data by uninstalling the app</li>
                <li>Request information about any data we may hold</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                Children's Privacy
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                EaseMood is not directed at children under 13. We do not knowingly
                collect information from children under 13.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                Changes to This Policy
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you
                of any changes by posting the new Privacy Policy on this page and
                updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-brand-text mb-4">
                Contact Us
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us
                at:{" "}
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

