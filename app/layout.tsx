import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

const aeonik = localFont({
  src: [
    { path: "../public/fonts/Aeonik-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Aeonik-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Aeonik-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-aeonik",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const geist = localFont({
  src: "../public/fonts/Geist-Variable.woff2",
  variable: "--font-geist",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Product Hub Africa",
  description: "Building the next generation of product professionals across Africa.",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0e13" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${aeonik.variable} ${geist.variable}`} data-scroll-behavior="smooth">
      <body>
        <ScrollToTop />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
