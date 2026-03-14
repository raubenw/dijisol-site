import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "DijiSol — Digital Solutions That Deliver",
  description:
    "Web development, SaaS apps, Android apps, and AI-powered solutions. We build intelligent software that grows your business.",
  keywords: "web development, SaaS, Android apps, AI integration, software development, digital solutions",
  openGraph: {
    title: "DijiSol — Digital Solutions That Deliver",
    description: "Web development, SaaS apps, Android apps, and AI-powered solutions.",
    url: "https://dijisol.com",
    siteName: "DijiSol",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
