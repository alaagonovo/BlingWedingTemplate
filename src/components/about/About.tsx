import React from "react";
import styles from "./about.module.css";
import Button from "../ui/Button/Button";
import ViewCard from "../ui/view_card/ViewCard";
import Image from "next/image";
function About() {
  return (
    <div className={styles.about_container}>
      <h1>ABOUT US</h1>
      <div className={styles.afterTitle}>
        <div className={styles.triangle_left}></div>
        <p className={styles.line}></p>
        <div className={styles.triangle_right}></div>
      </div>
      <p>
        We&apos;re more than just photographers; we&apos;re storytellers
        passionate about capturing the real, raw, and timeless moments of your
        love story.
      </p>
      <p>
        From the first glance to the last dance, we blend artistry with
        authenticity to preserve every heartfelt detail of your wedding day. We
        believe each couple’s love is unique, and our goal is to create moments
        that reflect your personalities and connection. With a keen eye for
        emotion and a dedication to making you feel at ease, we’re here to
        document your once-in-a-lifetime moments, so you can relive them
        forever.
      </p>
      <Button text="Book Your Session" link="/" />
      <div className={styles.image_left} data-aos="fade-right">
        <ViewCard img_src="/1.webp" />
      </div>
      <div className={styles.image_right} data-aos="fade-left">
        <Image src="/2.webp" alt="view image" width={250} height={280} />
      </div>
    </div>
  );
}

export default About;
