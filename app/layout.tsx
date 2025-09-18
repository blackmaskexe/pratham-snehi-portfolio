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
  title: "Pratham Snehi - Full-Stack Developer & AI Enthusiast",
  description: "Passionate full-stack developer specializing in React Native, AI integration, and cloud architecture. AWS & Microsoft certified. Building innovative mobile apps and web solutions.",
  keywords: [
    "Pratham Snehi",
    "Full-Stack Developer",
    "React Native",
    "React",
    "TypeScript",
    "AI Developer",
    "AWS Certified",
    "Microsoft Certified",
    "Mobile App Development",
    "Web Development",
    "Node.js",
    "Cloud Architecture"
  ],
  authors: [{ name: "Pratham Snehi" }],
  creator: "Pratham Snehi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prathamsnehi.com",
    title: "Pratham Snehi - Full-Stack Developer & AI Enthusiast",
    description: "Passionate full-stack developer specializing in React Native, AI integration, and cloud architecture. AWS & Microsoft certified.",
    siteName: "Pratham Snehi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratham Snehi - Full-Stack Developer",
    description: "Passionate full-stack developer specializing in React Native, AI integration, and cloud architecture.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
