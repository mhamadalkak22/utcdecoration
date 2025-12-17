import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AOSProvider } from "@/components/aos-provider"
import { AnimatedBackground } from "@/components/animated-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UTC Decoration - Home Decor Solutions",
  description:
    "UTC's mission is to conduct a thorough study of its clients' needs through a careful and professional assessment to provide the best services related to all aspects of home decor.",
  keywords: "home decor, aluminum services, steel services, glass services, decoration, mirrors, railings, parking canopies, UTC decoration",
  authors: [{ name: "UTC Decoration" }],
  openGraph: {
    title: "UTC Decoration - Home Decor Solutions",
    description: "Providing the best services related to all aspects of home decor including aluminum, steel, glass, and decoration services.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/logo-20utc-20decoration.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo-20utc-20decoration.png", type: "image/png", sizes: "64x64" },
    ],
    apple: [
      { url: "/images/logo-20utc-20decoration.png", sizes: "180x180" },
    ],
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0066FF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.className} antialiased`}>
        {/* Animated background for entire site */}
        <AnimatedBackground />
        {/* Initialize scroll animations */}
        <AOSProvider />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
