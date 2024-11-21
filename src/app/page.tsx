"use client";
import styles from "./page.module.css";
import Blog from "@/components/ui/blog/Blog";
import AutoSlider from "@/components/about/autoSlideHero/AutoSlider";
import CheckOurLastWorks from "@/components/checkourlastworks/CheckOurLastWorks";
import Behindtheagency from "@/components/behindtheagency/Behindtheagency";
import steps from "@/data/steps";
import Steps from "@/components/steps/Steps";
import Contactus from "@/components/contactus/Contactus";
export default function Home() {
  return (
    <main className={styles.homePage_Container}>
      <AutoSlider />
      <Blog />
      <CheckOurLastWorks />
      <Behindtheagency />
      <Steps steps={steps} />
      <Contactus />
    </main>
  );
}
