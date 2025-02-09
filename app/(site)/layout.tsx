"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Lines from "@/components/Lines"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import "../globals.css"
import ToasterContext from "../context/ToastContext"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>File Clever | Stress-Free Canadian Tax Filing</title>
        <meta
          name="description"
          content="Maximize your refund with expert remote tax services. File your taxes effortlessly from home. Our Canadian tax experts ensure accuracy, maximize credits, and secure your best possible refund. Simple, reliable, and tailored for you."
        />
        <meta
          name="keywords"
          content="Canadian tax filing, remote tax services, maximize tax refund, expert tax filing, File Clever, stress-free taxes, Canadian tax experts"
        />
        <meta name="author" content="File Clever" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fileclever.com" />
        <meta property="og:title" content="File Clever | Stress-Free Canadian Tax Filing" />
        <meta
          property="og:description"
          content="Maximize your refund with expert remote tax services. File your taxes effortlessly from home. Our Canadian tax experts ensure accuracy, maximize credits, and secure your best possible refund."
        />
        <meta property="og:image" content="https://fileclever.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="File Clever" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://fileclever.com" />
        <meta name="twitter:title" content="File Clever | Stress-Free Canadian Tax Filing" />
        <meta
          name="twitter:description"
          content="Maximize your refund with expert remote tax services. File your taxes effortlessly from home. Our Canadian tax experts ensure accuracy and secure your best possible refund."
        />
        <meta name="twitter:image" content="https://fileclever.com/og-image.png" />

        <link rel="icon" href="/logo-dark.png" />
      </head>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

