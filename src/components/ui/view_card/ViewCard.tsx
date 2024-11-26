// "use client";
// import React, { useState } from "react";
// import styles from "./viewcard.module.css";
// import Image from "next/image";
// interface IViewcard {
//   img_src?: string;
//   vid_src?: string;
// }
// function ViewCard({ img_src, vid_src }: IViewcard) {
//   const [isLoaded, setIsLoaded] = useState<boolean>(false);
//   const handleLoaded = () => {
//     setIsLoaded(true);
//   };
//   return (
//     <div className={styles.main_cover}>
//       {img_src && (
//         <Image
//           className={styles.img_Cover}
//           src={img_src}
//           alt="viewImage"
//           width={345}
//           height={195}
//           loading="lazy"
//         />
//       )}
//       {/* {isLoaded ? (
//         <Image
//           className={styles.img_Cover}
//           src="/1.webp"
//           alt="viewImage"
//           width={345}
//           height={195}
//           loading="lazy"
//         />
//       ) : (
//         !isLoaded && (
//           <video
//             className={styles.video}
//             src={vid_src}
//             autoPlay
//             muted
//             loop
//             playsInline
//             onLoadedData={handleLoaded}
//             // poster="/1.webp"
//           />
//         )
//       )} */}
//       {vid_src && (
//         <>
//           <video
//             className={`${styles.video} ${!isLoaded ? styles.hidden : ""}`}
//             src={vid_src}
//             autoPlay
//             muted
//             loop
//             playsInline

//             onLoadedData={handleLoaded}
//           />
//           {/* Fallback image (visible only if the video isn't loaded yet) */}
//           {!isLoaded && (
//             <Image
//               className={styles.img_Cover}
//               src={img_src || "/1.webp"} // Use fallback if img_src isn't provided
//               alt="viewImage"
//               width={345}
//               height={195}
//               loading="lazy"
//             />
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default ViewCard;
"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./viewcard.module.css";
import Image from "next/image";

interface IViewcard {
  img_src?: string;
  vid_src?: string;
}

function ViewCard({ img_src, vid_src }: IViewcard) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false); // To check if the video is loaded
  const [isVisible, setIsVisible] = useState<boolean>(false); // To track visibility in the viewport
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to handle visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Adjust visibility threshold
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className={styles.main_cover} ref={containerRef}>
      {img_src && (
        <Image
          className={`${styles.img_Cover} ${isLoaded ? styles.hidden : ""}`}
          src={img_src}
          alt="viewImage"
          width={345}
          height={195}
          loading="lazy"
        />
      )}
      {vid_src && (
        <>
          {/* Video: Lazy loaded based on visibility */}
          {isVisible && (
            <video
              ref={videoRef}
              className={`${styles.video} ${!isLoaded ? styles.hidden : ""}`}
              src={vid_src}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={handleLoaded}
            />
          )}

          {/* Fallback image: Shown until the video loads */}
          {!isLoaded && (
            <Image
              className={styles.img_Cover}
              src={img_src || "/1.webp"} // Fallback image if img_src isn't provided
              alt="viewImage"
              width={345}
              height={195}
              loading="lazy"
            />
          )}
        </>
      )}
    </div>
  );
}

export default ViewCard;
