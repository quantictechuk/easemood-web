import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { SUPPORT_EMAIL, COMPANY_NAME } from "@/data/constants";

export const metadata: Metadata = {
  title: "Support - EaseMood",
  description: "Get help and support for EaseMood - Your Calm Companion",
};

export default function SupportPage() {
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
              Support
            </h1>
            <p className="mt-2 text-brand-text-muted">
              We're here to help you with EaseMood.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container-max section-padding py-12 max-w-4xl">
          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription className="text-base">
                  Have a question or need help? Send us an email and we'll get back to
                  you as soon as possible.
                </CardDescription>
                <Button asChild className="mt-4 w-full">
                  <a href={`mailto:${SUPPORT_EMAIL}`}>
                    Email Us
                  </a>
                </Button>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-brand-primary" />
                </div>
                <CardTitle>FAQ</CardTitle>
                <CardDescription className="text-base">
                  Check our frequently asked questions for quick answers to common
                  questions about EaseMood.
                </CardDescription>
                <Button variant="outline" asChild className="mt-4 w-full">
                  <Link href="/#faq">
                    View FAQ
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>

          {/* Common Topics */}
          <div className="bg-brand-cream rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-text mb-6">
              Common Support Topics
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-brand-text mb-2">
                  Account & Data
                </h3>
                <p className="text-brand-text-muted">
                  Your data is stored locally on your device. If you need to reset or
                  delete your data, you can do so in the app settings or by uninstalling
                  and reinstalling the app.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-text mb-2">
                  Subscriptions
                </h3>
                <p className="text-brand-text-muted">
                  Subscriptions are managed through the App Store. To cancel or modify
                  your subscription, go to Settings → Your Name → Subscriptions on your
                  iPhone or iPad.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-text mb-2">
                  Face ID Issues
                </h3>
                <p className="text-brand-text-muted">
                  If Face ID isn't working properly, ensure Face ID is enabled in your
                  device settings. You can also disable Face ID for EaseMood in the app's
                  Profile settings.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-text mb-2">
                  Feature Requests
                </h3>
                <p className="text-brand-text-muted">
                  We love hearing from our users! Send us an email with your ideas and
                  suggestions for improving EaseMood.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <MessageCircle className="w-8 h-8 text-brand-primary mx-auto mb-4" />
            <h2 className="font-serif text-xl font-semibold text-brand-text mb-2">
              Still need help?
            </h2>
            <p className="text-brand-text-muted mb-4">
              Reach out to us directly at
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-lg text-brand-primary hover:underline font-medium"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="text-sm text-brand-text-muted mt-6">
              {COMPANY_NAME}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

