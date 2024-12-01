// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import styles from "./cardcoupone.module.css";
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
// function CardCoupon({ data }: { data: string[] }) {
//   const { isVisible, elementRef } = useIntersectionObserver();
//   const [Index, setIndex] = useState<number>(0);

//   useEffect(() => {
//     if (!isVisible || data.length === 0) return; // No images to display

//     const timer = setInterval(() => {
//       if (Index <= 3) {
//         setIndex((prevIndex) => (prevIndex + 1) % data.length);
//       } else {
//         setIndex(0);
//       }
//     }, 700);
//     // Cleanup timer on unmount
//     return () => clearInterval(timer);
//   }, [data, Index, isVisible]);
//   return (
//     <div className={styles.card_container} ref={elementRef}>
//       {/* {isVisible && ( */}
//       <Image
//         src={data[Index] || data[0]}
//         width={100}
//         height={100}
//         alt="coupon view"
//         quality={80}
//         unoptimized={true}
//       />
//       {/* )} */}
//     </div>
//   );
// }

// export default CardCoupon;
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./cardcoupone.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface CardCouponProps {
  data: string[];
  altTexts?: string[]; // Optional alt texts for images
  width?: number | string;
  height?: number | string;
  minInterval?: number; // Minimum interval time in milliseconds
  maxInterval?: number; // Maximum interval time in milliseconds
}

const getRandomInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const CardCoupon: React.FC<CardCouponProps> = ({
  data,
  altTexts = [],

  minInterval = 1500, // Minimum 500ms
  maxInterval = 3500, // Maximum 2000ms
}) => {
  const { isVisible, elementRef } = useIntersectionObserver();
  const [index, setIndex] = useState<number>(0);

  const nextImage = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  }, [data.length]);

  useEffect(() => {
    if (!isVisible || data.length === 0) return;

    const cycleImages = () => {
      nextImage();
      const randomInterval = getRandomInterval(minInterval, maxInterval);
      setTimeout(cycleImages, randomInterval);
    };

    const timerId = setTimeout(
      cycleImages,
      getRandomInterval(minInterval, maxInterval)
    );

    return () => clearTimeout(timerId);
  }, [isVisible, data.length, minInterval, maxInterval, nextImage]);

  const altText =
    altTexts[index] ||
    `Coupon image ${index + 1} of ${data.length}` ||
    "Coupon view";

  return (
    <div className={styles.card_container} ref={elementRef}>
      {isVisible && data.length > 0 && (
        // <div className={styles.image_wrapper}>
        <Image
          src={data[index]}
          width={100}
          height={100}
          alt={altText}
          quality={80}
          unoptimized={true} // Enable optimization
          className={styles.coupon_image}
        />
        // </div>
      )}
    </div>
  );
};

export default CardCoupon;
