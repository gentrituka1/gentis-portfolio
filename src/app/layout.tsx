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
  title: "Genti's Portfolio | Gentrit Uka",
  description: "Portfolio of Gentrit Uka - Frontend Developer based in Pristina, Kosovo. TypeScript, React, Next.js, React Native, GraphQL.",
  openGraph: {
    title: "Genti's Portfolio | Gentrit Uka",
    description: "Frontend Developer — Pristina, Kosovo. TypeScript, React, Next.js, React Native, GraphQL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen font-sans antialiased bg-surface text-[#e8e6e3]">
        {children}
      </body>
    </html>
  );
}
