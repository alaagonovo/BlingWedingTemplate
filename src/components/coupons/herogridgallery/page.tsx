import Image from "next/image";
import React from "react";
import styles from "./herogrid.module.css";
function HeroCoupons() {
  const heroImages = [
    "/gallery4.webp",
    "/gallery1.webp",
    "/gallery5.webp",
    "/storyvlog.png",
  ];
  return (
    <section className={styles.main_hero_grid}>
      {heroImages.map((item, index) => (
        <div className={styles.imageContainer} key={index}>
          <Image
            src={item} // Replace with your image path
            alt="coupon banner"
            layout="fill"
            objectFit="cover" // Ensures the image covers the container
            priority // Optional: Preload the image for faster LCP
          />
        </div>
      ))}
    </section>
  );
}

export default HeroCoupons;
