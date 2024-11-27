"use client";
import styles from "./page.module.css";
import React from "react";
const Blog = React.lazy(() => import("@/components/ui/blog/Blog"));
import AutoSlider from "@/components/about/autoSlideHero/AutoSlider";

const CheckOurLastWorks = React.lazy(
  () => import("@/components/checkourlastworks/CheckOurLastWorks")
);
const Behindtheagency = React.lazy(
  () => import("@/components/behindtheagency/Behindtheagency")
);
import steps from "@/data/steps";
const Steps = React.lazy(() => import("@/components/steps/Steps"));
const Contactus = React.lazy(() => import("@/components/contactus/Contactus"));

export default function Home() {
  return (
    <main className={styles.homePage_Container}>
      <AutoSlider />
      <Blog />
      <div id="latestworks">
        <CheckOurLastWorks />
      </div>
      <Behindtheagency />
      <Steps steps={steps} />
      <div id="contactus">
        <Contactus />
      </div>
    </main>
  );
}
