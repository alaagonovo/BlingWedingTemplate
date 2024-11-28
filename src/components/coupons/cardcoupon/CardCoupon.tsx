import Image from "next/image";
import React, { useState } from "react";
import styles from "./cardcoupone.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
function CardCoupon({ data }: { data: string[] }) {
  const { isVisible, elementRef } = useIntersectionObserver();
  const [Index, setIndex] = useState<number>(0);
  setTimeout(() => {
    if (Index <= 3) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  }, 1000);
  return (
    <div className={styles.card_container} ref={elementRef}>
      {isVisible && (
        <Image
          src={data[Index] || data[0] || data[1] || data[2] || data[3]}
          width={100}
          height={100}
          alt="coupon view"
          quality={100}
          unoptimized={true}
        />
      )}
    </div>
  );
}

export default CardCoupon;
