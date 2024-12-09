"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./viewcard.module.css";

interface IViewCard {
  img_src?: string;
  vid_src?: string;
  img_fallback?: string;
}

function ViewCard({ img_src, vid_src, img_fallback }: IViewCard) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track video load status

  useEffect(() => {
    // Reset video loading state when the component is re-mounted
    setIsVideoLoaded(false);
  }, [vid_src]); // Reset whenever `vid_src` changes

  return (
    <div className={styles.main_cover}>
      {vid_src && (
        <>
          <video
            className={`${styles.video} ${!isVideoLoaded ? styles.hidden : ""}`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => {
              setIsVideoLoaded(true); // Video loaded flag
            }}
            preload="metadata"
          >
            <source src={vid_src} type="video/mp4" />
          </video>
          {/* Fallback image */}
          {!isVideoLoaded && img_fallback && (
            <Image
              className={styles.img_Cover}
              src={img_fallback}
              alt="view Image"
              width={345}
              height={195}
              // loading="eager"
              sizes="345px"
              // priority
            />
          )}
        </>
      )}

      {/* Image rendering */}
      {img_src && (
        <Image
          className={styles.img_Cover}
          src={img_src}
          alt="viewImage"
          width={345}
          height={195}
          // loading="eager"
          sizes="345px"
          // priority={true}
        />
      )}
    </div>
  );
}

export default ViewCard;
