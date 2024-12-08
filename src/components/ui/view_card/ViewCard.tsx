"use client";

import React, { useState } from "react";
import styles from "./viewcard.module.css";
import Image from "next/image";

interface IViewcard {
  img_src?: string;
  vid_src?: string;
  img_fallback?: string;
}

function ViewCard({ img_src, vid_src, img_fallback }: IViewcard) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className={styles.main_cover}>
      {vid_src && (
        <>
          <video
            className={`${styles.video} ${!isLoaded ? styles.hidden : ""}`}
            src={vid_src}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleLoaded}
            preload="metadata"
          />
          {/* Fallback image */}
          {!isLoaded && (
            <Image
              className={styles.img_Cover}
              src={img_fallback!}
              alt="viewImage"
              width={345}
              height={195}
              loading="eager"
              priority
              
            />
          )}
        </>
      )}
      {img_src && (
        <Image
          className={styles.img_Cover}
          src={img_src}
          alt="viewImage"
          width={345}
          height={195}
          loading="eager"
          blurDataURL="/img-vid4.webp"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 345px"
        />
      )}
    </div>
  );
}

export default ViewCard;
