// App Store URL - Set to empty string for "Coming Soon" state
// TODO: Replace with actual App Store URL when app is live
export const APP_STORE_URL = "";

export const SUPPORT_EMAIL = "support@quantictechnologies.co.uk";
export const COMPANY_NAME = "Quantic Technologies";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/support" },
];

export const FEATURES = [
  {
    title: "Mood Check-ins",
    description: "Take a gentle moment to check in with yourself. Select how you're feeling and add optional notes.",
    icon: "Heart",
  },
  {
    title: "Private Journal",
    description: "Write down your thoughts in a safe, private space. Express freely without judgment.",
    icon: "BookOpen",
  },
  {
    title: "Breathing & Grounding",
    description: "Calm breathing exercises and the 5-4-3-2-1 grounding technique to bring you back to the present.",
    icon: "Wind",
  },
  {
    title: "Gentle Companion",
    description: "Ease is here to listen. Talk through your thoughts with a calm, understanding companion.",
    icon: "MessageCircle",
  },
  {
    title: "Insights",
    description: "View your mood patterns and activity trends over time to better understand yourself.",
    icon: "BarChart3",
  },
  {
    title: "Face ID Lock",
    description: "Protect your private reflections with Face ID. Your journal stays yours alone.",
    icon: "Lock",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Check in",
    description: "Start with a simple mood check-in. How are you feeling right now?",
    screenshot: "/assets/app-screenshots/3.png",
  },
  {
    step: 2,
    title: "Reflect",
    description: "Journal your thoughts, chat with Ease, or explore calming tools.",
    screenshot: "/assets/app-screenshots/5.png",
  },
  {
    step: 3,
    title: "Reset",
    description: "Use breathing exercises and grounding techniques to find your calm.",
    screenshot: "/assets/app-screenshots/7.png",
  },
];

export const SCREENSHOTS = [
  { src: "/assets/app-screenshots/1.png", caption: "Welcome screen" },
  { src: "/assets/app-screenshots/2.png", caption: "Your calm companion" },
  { src: "/assets/app-screenshots/3.png", caption: "Mood check-ins" },
  { src: "/assets/app-screenshots/4.png", caption: "Chat with Ease" },
  { src: "/assets/app-screenshots/5.png", caption: "Private journal" },
  { src: "/assets/app-screenshots/6.png", caption: "Calming tools" },
  { src: "/assets/app-screenshots/7.png", caption: "Breathing exercise" },
  { src: "/assets/app-screenshots/8.png", caption: "Privacy settings" },
];

export const FAQS = [
  {
    question: "Is my journal private?",
    answer: "Absolutely. Your journal entries are stored locally on your device and are never uploaded to our servers. We cannot read or access your personal reflections.",
  },
  {
    question: "Do you sell data?",
    answer: "No, never. We do not sell, share, or monetize your personal data. EaseMood is designed with privacy as a core principle.",
  },
  {
    question: "Is the app free?",
    answer: "Yes! EaseMood is completely free during early access. All features are available at no cost. When we introduce premium subscriptions in the future, rest assured that essential core features will always remain free.",
  },
  {
    question: "Can I use it offline?",
    answer: "Most features work offline, including mood check-ins, journaling, and breathing exercises. Some features like the chat companion may require an internet connection.",
  },
  {
    question: "Will there be subscriptions?",
    answer: "Not right now. The app is fully free during early access. We'll update you when we introduce premium subscriptions, but the essential core features of the app will always remain free at no cost.",
  },
];

export const PRIVACY_POINTS = {
  collect: [
    "Minimal, opt-in analytics to improve the app experience",
    "Your chosen display name and preferences (stored on device)",
    "Crash reports to fix bugs (opt-in)",
  ],
  dontCollect: [
    "Raw journal text or mood notes",
    "Your location or contacts",
    "Advertising identifiers or tracking data",
    "Any data for ad profiling or sale",
  ],
};

