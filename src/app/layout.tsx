// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noahbucheton.fr"),
  title: {
    default: "Noah Bucheton | Développeur Web & Designer",
    template: "%s | Noah Bucheton",
  },
  description:
    "Portfolio de Noah Bucheton, développeur web & designer : projets web, UI/UX, branding et réalisations créatives.",
  keywords: [
    "Noah Bucheton",
    "portfolio",
    "développeur web",
    "web designer",
    "UI UX",
    "Next.js",
    "freelance",
  ],
  authors: [{ name: "Noah Bucheton" }],
  creator: "Noah Bucheton",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://noahbucheton.fr",
  },
  openGraph: {
    type: "website",
    url: "https://noahbucheton.fr",
    title: "Noah Bucheton | Développeur Web & Designer",
    description:
      "Portfolio de Noah Bucheton : projets web, UI/UX, branding et réalisations créatives.",
    siteName: "Noah Bucheton",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.jpg", // mets une vraie image dans /public
        width: 1200,
        height: 630,
        alt: "Portfolio Noah Bucheton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Bucheton | Développeur Web & Designer",
    description:
      "Portfolio de Noah Bucheton : projets web, UI/UX, branding et réalisations créatives.",
    images: ["/og-image.jpg"],
  },
    icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}