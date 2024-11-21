import React from "react";
import styles from "./story.module.css";
import Link from "next/link";
function StorySection() {
  return (
    <section className={styles.section_story}>
      <div className={styles.main_grid_story}>
        <div className={styles.texts}>
          <h1 data-aos="fade-right">THIS IS MY STORY</h1>
          <p>
            We love a girl who knows what she wants, and for #MariahCarey it’s
            an emerald-cut engagement ring. 👏 Find out what she did with each
            sparkler—including the 35-carat diamond worth $10 million from
            ex-fiancé James Packer—at the link in bio. 💍
          </p>
          <Link href="/" className={styles.follow_Link}>
            Follow Me
          </Link>
        </div>
        <div className={styles.viewImage}></div>
      </div>
    </section>
  );
}

export default StorySection;
