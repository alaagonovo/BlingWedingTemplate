import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

import "aos/dist/aos.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "900"],
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
      <body className={fraunces.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
