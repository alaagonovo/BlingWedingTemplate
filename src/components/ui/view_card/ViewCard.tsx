// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import styles from "./viewcard.module.css";
// import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// interface IViewCard {
//   img_src?: string;
//   vid_src?: string;
//   img_fallback?: string;
// }

// function ViewCard({ img_src, vid_src, img_fallback }: IViewCard) {
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track video load status
//   const { isVisible, elementRef } = useIntersectionObserver();
//   useEffect(() => {
//     // Reset video loading state when the component is re-mounted
//     setIsVideoLoaded(false);
//   }, [vid_src]); // Reset whenever `vid_src` changes

//   return (
//     <div className={styles.main_cover} ref={elementRef}>
//       {vid_src && isVisible && (
//         <>
//           <video
//             className={`${styles.video} ${!isVideoLoaded ? styles.hidden : ""}`}
//             autoPlay
//             muted
//             loop
//             playsInline
//             onLoadedData={() => {
//               setIsVideoLoaded(true); // Video loaded flag
//             }}
//             preload="metadata"
//           >
//             <source src={vid_src} type="video/mp4" />
//           </video>
//           {/* Fallback image */}
//           {!isVideoLoaded && isVisible && img_fallback && (
//             <Image
//               className={styles.img_Cover}
//               src={img_fallback}
//               alt="view Image"
//               width={345}
//               height={195}
//               loading="eager"
//               sizes="345px"
//               priority={true}
//             />
//           )}
//         </>
//       )}

//       {/* Image rendering */}
//       {img_src && isVisible && (
//         <Image
//           className={styles.img_Cover}
//           src={img_src}
//           alt="viewImage"
//           width={345}
//           height={195}
//           loading="eager"
//           sizes="345px"
//           priority={true}
//         />
//       )}
//     </div>
//   );
// }

// export default ViewCard;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./viewcard.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface IViewCard {
  img_src?: string;
  vid_src?: string;
  img_fallback?: string;
}

function ViewCard({ img_src, vid_src, img_fallback }: IViewCard) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track video load status
  const { isVisible, elementRef } = useIntersectionObserver();

  // Reset video loading status when `vid_src` changes
  useEffect(() => {
    setIsVideoLoaded(false);
  }, [vid_src]);

  // Render video or image based on visibility
  const renderVideo = () => (
    <video
      className={`${styles.video} ${!isVideoLoaded ? styles.hidden : ""}`}
      autoPlay
      muted
      loop
      playsInline
      onLoadedData={() => setIsVideoLoaded(true)} // Video loaded flag
      preload="metadata"
    >
      <source src={vid_src} type="video/mp4" />
    </video>
  );

  const renderImage = (src: string, alt: string) => (
    <Image
      className={styles.img_Cover}
      src={src}
      alt={alt}
      width={345}
      height={195}
      loading="eager"
      sizes="345px"
      priority
    />
  );

  return (
    <div className={styles.main_cover} ref={elementRef}>
      {vid_src && isVisible ? (
        <>
          {renderVideo()}
          {!isVideoLoaded && img_fallback && renderImage(img_fallback, "Fallback Image")}
        </>
      ) : null}

      {img_src && isVisible && renderImage(img_src, "View Image")}
    </div>
  );
}

export default ViewCard;
