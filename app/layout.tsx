import type { Metadata, Viewport } from "next";
import { Outfit, Fraunces } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#38593f",
};

export const metadata: Metadata = {
  title: "EaseMood - Your Calm Companion",
  description:
    "A calm space to reflect. Mood check-ins, private journaling, breathing exercises, and a gentle companion—at your pace.",
  keywords: [
    "mental health",
    "mood tracking",
    "journaling",
    "breathing exercises",
    "mindfulness",
    "wellness",
    "iOS app",
  ],
  authors: [{ name: "Quantic Technologies" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "EaseMood - Your Calm Companion",
    description:
      "A calm space to reflect. Mood check-ins, private journaling, breathing exercises, and a gentle companion—at your pace.",
    type: "website",
    locale: "en_GB",
    siteName: "EaseMood",
  },
  twitter: {
    card: "summary_large_image",
    title: "EaseMood - Your Calm Companion",
    description:
      "A calm space to reflect. Mood check-ins, private journaling, breathing exercises, and a gentle companion—at your pace.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-brand-background font-sans">
        {children}
      </body>
    </html>
  );
}

