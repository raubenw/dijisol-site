import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

export const metadata: Metadata = {
  title: "DijiSol — Professional WordPress & Digital Development",
  description:
    "Professional WordPress development, long-term website maintenance, SaaS platforms, and digital solutions for organisations and businesses.",
  keywords:
    "WordPress development, WordPress maintenance, organisational websites, SaaS development, digital platform support",
  openGraph: {
    title: "DijiSol — Professional WordPress & Digital Development",
    description:
      "Professional WordPress development, long-term website maintenance, and digital platform support.",
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
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
