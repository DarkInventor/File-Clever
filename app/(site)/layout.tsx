// "use client";

// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Lines from "@/components/Lines";
// import ScrollToTop from "@/components/ScrollToTop";
// import { ThemeProvider } from "next-themes";
// import { Inter } from "next/font/google";
// import "../globals.css";
// const inter = Inter({ subsets: ["latin"] });

// import ToasterContext from "../context/ToastContext";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <title>File Clever | Accurate and Timely Tax Filing</title>
//         <meta name="description" content="File Clever ensures your taxes are filed accurately and on time. Experience peace of mind with our expert review and filing services." />
//         <meta name="keywords" content="tax filing, accurate tax filing, timely tax filing, expert tax review, File Clever" />
//         <meta name="author" content="File Clever" />
//         <meta property="og:title" content="File Clever | Accurate and Timely Tax Filing" />
//         <meta property="og:description" content="File Clever ensures your taxes are filed accurately and on time. Experience peace of mind with our expert review and filing services." />
//         <meta property="og:url" content="https://fileclever.com" />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content="/images/og-image.jpg" />
//         <link rel="icon" href="/images/favicon.ico" />
//       </head>
//       <body className={`dark:bg-black ${inter.className}`}>
//         <ThemeProvider
//           enableSystem={false}
//           attribute="class"
//           defaultTheme="light"
//         >
//           <Lines />
//           <Header />
//           <ToasterContext />
//           {children}
//           <Footer />
//           <ScrollToTop />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Lines from "@/components/Lines"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import "../globals.css"
import ToasterContext from "../context/ToastContext"
import type { Metadata } from "next"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "File Clever | Stress-Free Canadian Tax Filing",
  description:
    "Maximize your refund with expert remote tax services. File your taxes effortlessly from home. Our Canadian tax experts ensure accuracy, maximize credits, and secure your best possible refund. Simple, reliable, and tailored for you.",
  keywords: [
    "Canadian tax filing",
    "remote tax services",
    "maximize tax refund",
    "expert tax filing",
    "File Clever",
    "stress-free taxes",
    "Canadian tax experts",
  ],
  authors: [{ name: "File Clever" }],
  openGraph: {
    title: "File Clever | Stress-Free Canadian Tax Filing",
    description:
      "Maximize your refund with expert remote tax services. File your taxes effortlessly from home. Our Canadian tax experts ensure accuracy, maximize credits, and secure your best possible refund.",
    url: "https://fileclever.com",
    siteName: "File Clever",
    images: [
      {
        url: "/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "File Clever - Expert Canadian Tax Filing Services",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "File Clever | Stress-Free Canadian Tax Filing",
    description:
      "Maximize your refund with expert remote tax services. File your taxes effortlessly from home. Our Canadian tax experts ensure accuracy and secure your best possible refund.",
    images: ["/logo-dark.png"],
  },
  icons: {
    icon: "/logo-dark.png",
    apple: "/logo-dark.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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

