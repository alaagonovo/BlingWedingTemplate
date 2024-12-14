// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import styles from "./viewcard.module.css";
// // import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// interface IViewCard {
//   img_src?: string;
//   vid_src?: string;
//   img_fallback?: string;
//   index: number;
// }

// function ViewCard({ img_src, vid_src, img_fallback, index }: IViewCard) {
//   // const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track video load status
//   // const { isVisible, elementRef } = useIntersectionObserver();
//   // useEffect(() => {
//   //   // Reset video loading state when the component is re-mounted
//   //   setIsVideoLoaded(false);
//   // }, [vid_src]); // Reset whenever `vid_src` changes

//   return (
//     <div className={styles.main_cover} /*ref={elementRef}*/>
//       {vid_src /*&& isVisible*/ && (
//         <>
//           <video
//             className={
//               `${styles.video}` /*${/*!isVideoLoaded ? styles.hidden : ""}`*/
//             }
//             autoPlay
//             muted
//             loop
//             playsInline
//             poster={img_fallback}
//             // onLoadedData={() => {
//             //   setIsVideoLoaded(true); // Video loaded flag
//             // }}
//             // preload="metadata"
//           >
//             <source src={vid_src} type="video/mp4" />
//           </video>
//           {/* Fallback image */}
//           {/* {!isVideoLoaded && isVisible  && img_fallback && (
//             <Image
//               className={styles.img_Cover}
//               src={img_fallback}
//               alt="view Image"
//               width={345}
//               height={195}
//               // loading="eager"
//               sizes="345px"
//               priority={index <= 5 ? true : false}
//             />
//           )} */}
//         </>
//       )}

//       {/* Image rendering */}
//       {img_src && (
//         /*isVisible &&*/ <Image
//           className={styles.img_Cover}
//           src={img_src}
//           alt="viewImage"
//           width={345}
//           height={195}
//           // loading="eager"
//           sizes="345px"
//           priority={index >= 5 ? true : false}
//         />
//       )}
//     </div>
//   );
// }

// export default ViewCard;
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./viewcard.module.css";

interface IViewCard {
  img_src?: string;
  vid_src?: string;
  img_fallback?: string;
  index: number;
}

const ViewCard = ({ img_src, vid_src, /*img_fallback,*/ index }: IViewCard) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    const currentElement = elementRef.current; // Save the ref's current value

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // No need to add `elementRef` to the dependency array

  return (
    <div ref={elementRef} className={styles.main_cover}>
      {vid_src && isVisible && (
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          // poster={img_fallback}
          preload="metadata"
        >
          <source src={vid_src} type="video/mp4" />
        </video>
      )}
      {img_src && (
        <Image
          className={styles.img_Cover}
          src={img_src}
          alt="viewImage"
          width={345}
          height={195}
          sizes="345px"
          priority={index >= 5 ? true : false}
        />
      )}
    </div>
  );
};

export default ViewCard;
