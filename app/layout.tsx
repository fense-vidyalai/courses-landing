import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/structured-data"

// Initialize the Poppins font with the weights we need
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vidyalai - Expert AP Tutoring for Academic Excellence | Online Tutoring",
  description:
    "Personalized AP tutoring with expert tutors to help your child excel in AP subjects. Flexible scheduling, affordable rates, and proven results.",
  keywords: "AP tutoring, online tutoring, AP exam prep, AP Biology, AP Physics, AP Chemistry, AP Calculus",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className} style={{ scrollBehavior: "auto" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'