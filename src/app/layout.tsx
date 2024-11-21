import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/header/Header";

import "aos/dist/aos.css";
import Footer from "@/components/footer/Footer";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
export const metadata: Metadata = {
  title: "BLING wedding",
  icons: "/logo.png",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
