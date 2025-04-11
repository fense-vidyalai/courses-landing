import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";
import { GA_TRACKING_ID } from "@/lib/gtag";

// Initialize the Poppins font with the weights we need
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Vidyalai - Expert AP Tutoring for Academic Excellence | Online Tutoring",
  description:
    "Personalized AP tutoring with expert tutors to help your child excel in AP subjects. Flexible scheduling, affordable rates, and proven results.",
  keywords:
    "AP tutoring, online tutoring, AP exam prep, AP Biology, AP Physics, AP Chemistry, AP Calculus",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon/apple-touch-icon-120x120.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={poppins.className}
      style={{ scrollBehavior: "auto" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script src={"/static/js/gtag.js"} />
        <script src={"/static/js/ga.js"} />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
