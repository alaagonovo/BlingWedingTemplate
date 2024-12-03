import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../herogrid.module.css";
import { Tables } from "../../../../../database.types";
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function HeroCard({ item }: { item: Tables<"vendors"> }) {
  // const { isVisible, elementRef } = useIntersectionObserver();
  const [currentImageIndex, setCurrentImageIndex] = useState(4); // Track the current image index
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Store the interval ID

  const handleMouseEnter = () => {
    if (item.images && item.images.length > 1) {
      const id = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const imagesLength = item.images?.length ?? 0; // Use 0 if images is undefined
          return imagesLength > 0 ? (prevIndex + 1) % imagesLength : 0;
        }); // Cycle through images
      }, 1000); // Change every second
      setIntervalId(id);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(4); // Reset to the original image
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval
      setIntervalId(null);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup interval on component unmount
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div
      className={styles.imageContainer}
      // ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        /*isVisible &&*/ item.images && (
          <Image
            src={item.images[currentImageIndex]}
            alt="coupon banner"
            width={100}
            height={100}
            unoptimized={true}
            // sizes=" (max-width: 769px) 100vw,50vw"
            priority
          />
        )
      }
    </div>
  );
}

export default HeroCard;
