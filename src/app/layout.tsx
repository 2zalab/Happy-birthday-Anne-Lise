import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joyeux Anniversaire Naogaï Anne Lise! 🎂",
  description: "Une carte d'anniversaire magique et personnalisée pour Naogaï Anne Lise. Souhaits d'anniversaire remplis de joie et de bonheur.",
  keywords: ["anniversaire", "carte", "Naogaï", "joyeux anniversaire", "cadeau virtuel"],
  authors: [{ name: "Isaac" }],
  openGraph: {
    title: "Joyeux Anniversaire Naogaï Anne Lise! 🎂",
    description: "Une carte d'anniversaire magique et personnalisée pour Naogaï Anne Lise",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}