import React from "react";
import styles from "./herosectionstyle.module.css";
function HeroSection() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.texts}>
        <h1 data-aos="zoom-out">NEVER MISS A THING</h1>
        {/* <p>Vlogging About Beauty, Fashion, Life Hacks & My Life!</p> */}
      </div>
    </section>
  );
}

export default HeroSection;
