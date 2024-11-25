"use client";
import React, { useState } from "react";
import styles from "./viewcard.module.css";
import Image from "next/image";
interface IViewcard {
  img_src?: string;
  vid_src?: string;
}
function ViewCard({ img_src, vid_src }: IViewcard) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const handleLoaded = () => {
    setIsLoaded(true);
  };
  return (
    <div className={styles.main_cover}>
      {img_src && (
        <Image
          className={styles.img_Cover}
          src={img_src}
          alt="viewImage"
          width={345}
          height={195}
          loading="lazy"
        />
      )}
      {/* {isLoaded ? (
        <Image
          className={styles.img_Cover}
          src="/1.webp"
          alt="viewImage"
          width={345}
          height={195}
          loading="lazy"
        />
      ) : (
        !isLoaded && (
          <video
            className={styles.video}
            src={vid_src}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleLoaded}
            // poster="/1.webp"
          />
        )
      )} */}
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
          />
          {/* Fallback image (visible only if the video isn't loaded yet) */}
          {!isLoaded && (
            <Image
              className={styles.img_Cover}
              src={img_src || "/1.webp"} // Use fallback if img_src isn't provided
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
