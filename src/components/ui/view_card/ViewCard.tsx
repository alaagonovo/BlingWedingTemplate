import React from "react";
import styles from "./viewcard.module.css";
import Image from "next/image";
interface IViewcard {
  img_src?: string;
  vid_src?: string;
}
function ViewCard({ img_src, vid_src }: IViewcard) {
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
      {vid_src && (
        <video
          className={styles.video}
          src={vid_src}
          autoPlay
          muted
          loop
          playsInline
          // poster="/1.webp"
        />
      )}
    </div>
  );
}

export default ViewCard;
