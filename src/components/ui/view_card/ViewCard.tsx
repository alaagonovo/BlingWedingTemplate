"use client";

import React, { useState } from "react";
import styles from "./viewcard.module.css";
import Image from "next/image";

interface IViewcard {
  img_src?: string;
  vid_src?: string;
}

function ViewCard({ img_src, vid_src }: IViewcard) {
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
              src={img_src || "/img-vid4.webp"}
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
        />
      )}
    </div>
  );
}

export default ViewCard;
