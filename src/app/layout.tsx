import React from "react";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import { Nunito_Sans, Kristi } from "next/font/google";
import WithAOS from "@/components/withoas/WithAOS";
import Header from "@/components/header/Header";
const Footer = React.lazy(() => import("@/components/footer/Footer"));

// Load Nunito Sans font
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
// Load Kristi font
const kristi = Kristi({
  subsets: ["latin"],
  weight: ["400"], // Kristi supports only 400 weight
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "BLING wedding",
  icons: "/logo.webp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.className} ${kristi.className}`}>
      <body>
        <WithAOS>
          <Header />
          {children}
          <Footer />
        </WithAOS>
      </body>
    </html>
  );
}
