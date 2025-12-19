import type { Metadata } from "next";
import { Fraunces, Syne } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed | Software Architect & Founder",
  description: "Ahmed Khafaji - Crafting digital experiences with precision and purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${syne.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="bg-paper text-ink selection:bg-accent/30 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
