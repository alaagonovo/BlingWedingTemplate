import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./cardcoupone.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
function CardCoupon({ data }: { data: string[] }) {
  const { isVisible, elementRef } = useIntersectionObserver();
  const [Index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (!isVisible || data.length === 0) return; // No images to display

    const timer = setInterval(() => {
      if (Index <= 3) {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
      } else {
        setIndex(0);
      }
    }, 1000);
    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, [data, Index, isVisible]);
  return (
    <div className={styles.card_container} ref={elementRef}>
      {/* {isVisible && ( */}
      <Image
        src={data[Index] || data[0]}
        width={100}
        height={100}
        alt="coupon view"
        quality={80}
        unoptimized={true}
      />
      {/* )} */}
    </div>
  );
}

export default CardCoupon;
