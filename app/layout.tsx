import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import ScrollToTop from "@/app/_components/ScrollToTop";
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
  title: "HARUKI | Frontend Developer",
  description: "「ちょっと楽しい」をつくる HARUKI のポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
