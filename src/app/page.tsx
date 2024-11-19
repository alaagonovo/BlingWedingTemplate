"use client";
import AutoCarousel from "@/components/autocarousel/AutoCarousel";
import styles from "./page.module.css";
import { useEffect } from "react";
import AOS from "aos";
import Blog from "@/components/ui/blog/Blog";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main className={styles.homePage_Container}>
      <AutoCarousel />
      <Blog/>
    </main>
  );
}
