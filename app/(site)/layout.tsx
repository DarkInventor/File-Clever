"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>File Clever | Accurate and Timely Tax Filing</title>
        <meta name="description" content="File Clever ensures your taxes are filed accurately and on time. Experience peace of mind with our expert review and filing services." />
        <meta name="keywords" content="tax filing, accurate tax filing, timely tax filing, expert tax review, File Clever" />
        <meta name="author" content="File Clever" />
        <meta property="og:title" content="File Clever | Accurate and Timely Tax Filing" />
        <meta property="og:description" content="File Clever ensures your taxes are filed accurately and on time. Experience peace of mind with our expert review and filing services." />
        <meta property="og:url" content="https://fileclever.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
