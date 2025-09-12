import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ICISRI 2025 - International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT",
    template: "%s | ICISRI 2025"
  },
  description: "Join ICISRI 2025 at PIET, Jaipur - International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT. Explore cutting-edge research in AI, semiconductor technology, robotics, and IoT applications.",
  keywords: [
    "ICISRI 2025",
    "International Conference",
    "Intelligent Systems",
    "Semiconductors",
    "Robotics",
    "IoT",
    "Internet of Things",
    "Artificial Intelligence",
    "PIET Jaipur",
    "Research Conference",
    "Technology Conference",
    "IEEE Conference",
    "Academic Conference"
  ],
  authors: [{ name: "PIET IoT Department" }],
  creator: "Poornima Institute of Engineering and Technology",
  publisher: "PIET IoT Department",
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://icisri.piet.poornima.org",
    title: "ICISRI 2025 - International Conference on Intelligent Systems",
    description: "International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT at PIET, Jaipur. Submit your research papers and join leading experts.",
    siteName: "ICISRI 2025",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICISRI 2025 - International Conference on Intelligent Systems",
    description: "Join ICISRI 2025 at PIET, Jaipur. Conference on Intelligent Systems Using Semiconductors for Robotics and IoT.",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>{children}</body>
    </html>
  );
}
