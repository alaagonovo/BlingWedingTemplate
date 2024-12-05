import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./cardcoupone.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
// import Link from "next/link";

interface CardCouponProps {
  images: string[];
  altTexts?: string[]; // Optional alt texts for images
  width?: number | string;
  height?: number | string;
  minInterval?: number; // Minimum interval time in milliseconds
  maxInterval?: number;
  discount: number; // Maximum interval time in milliseconds
}

const getRandomInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const CardCoupon: React.FC<CardCouponProps> = ({
  images,
  altTexts = [],
  discount,
  minInterval = 1500,
  maxInterval = 3500,
}) => {
  const { isVisible, elementRef } = useIntersectionObserver();
  const [index, setIndex] = useState<number>(0);

  const nextImage = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isVisible || images.length === 0) return;

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
  }, [isVisible, images.length, minInterval, maxInterval, nextImage]);

  const altText =
    altTexts[index] ||
    `Coupon image ${index + 1} of ${images.length}` ||
    "Coupon view";

  return (
    <div className={styles.card_container} ref={elementRef}>
      {isVisible && images.length > 0 && (
        <>
          <p
            data-aos="fade-left"
            className="absolute bg-red-500 bg-opacity-85 py-1 px-2 text-white text-sm font-thin sm:font-medium sm:text-base top-2 sm:top-8 right-0"
          >
            <span className="inline sm:hidden">-</span>
            {discount}% <span className="hidden sm:inline">OFF</span>
          </p>

          {/* <Link href="/payment"> */}
          <Image
            src={images[index]}
            width={100}
            height={100}
            alt={altText}
            quality={80}
            unoptimized={true} // Enable optimization
            className={styles.coupon_image}
            loading="lazy"
          />
          {/* </Link> */}
        </>
      )}
    </div>
  );
};

export default CardCoupon;
