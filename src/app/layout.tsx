// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noahbucheton.fr"),
  title: {
    default: "Noah Bucheton — Développeur web & webdesigner freelance",
    template: "%s | Noah Bucheton",
  },
  description:
    "Création de sites internet, boutiques en ligne, webdesign, développement web et maintenance pour indépendants, associations et entreprises.",
  keywords: [
    "Noah Bucheton",
    "Noah Bucheton EI",
    "développeur web",
    "webdesigner freelance",
    "création site internet",
    "boutique WooCommerce",
    "maintenance WordPress",
    "webdesign",
    "Next.js",
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
    title: "Noah Bucheton — Développeur web & webdesigner freelance",
    description:
      "Création de sites internet, boutiques en ligne, webdesign, développement web et maintenance pour indépendants, associations et entreprises.",
    siteName: "Noah Bucheton",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Noah Bucheton, développeur web et webdesigner freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Bucheton — Développeur web & webdesigner freelance",
    description:
      "Création de sites internet, boutiques en ligne, webdesign, développement web et maintenance pour indépendants, associations et entreprises.",
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
