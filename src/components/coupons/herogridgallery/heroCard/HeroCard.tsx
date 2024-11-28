import Image from "next/image";
import React from "react";
import styles from "../herogrid.module.css";
import { Tables } from "../../../../../database.types";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
function HeroCard({ item }: { item: Tables<"vendors"> }) {
  const { isVisible, elementRef } = useIntersectionObserver();
  return (
    <div className={styles.imageContainer} ref={elementRef}>
      {isVisible && item.images && (
        <Image
          src={item.images[2]}
          alt="coupon banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      )}
      {/* {visibleItems.includes(index) && item.src_vid && (
    <video
      className={styles.video_container}
      src={item.src_vid}
      autoPlay
      loop
      muted
      playsInline
    />
  )} */}
    </div>
  );
}

export default HeroCard;
