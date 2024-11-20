"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import AOS from "aos";
import Blog from "@/components/ui/blog/Blog";
import AutoSlider from "@/components/about/autoSlideHero/AutoSlider";
import CheckOurLastWorks from "@/components/checkourlastworks/CheckOurLastWorks";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main className={styles.homePage_Container}>
      <AutoSlider />
      <Blog />
      <CheckOurLastWorks />
    </main>
  );
}
