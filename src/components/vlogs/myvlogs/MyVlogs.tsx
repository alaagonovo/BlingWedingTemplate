"use client";
import vlogsvideo from "@/data/vlogsvideo";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./myvlogs.module.css";
import VideoPlayer from "@/components/ui/videoplayer/VideoPlayer";
import "../../ui/videoplayer/common.css";
interface IVideo {
  video_src: string;
  image_src: string;
}
function MyVlogs() {
  const [image_src, setImage_src] = useState<string>("");
  const [video_src, setVideo_src] = useState<string>("");
  const handleUpdateStates = (item: IVideo) => {
    setImage_src(item.image_src);
    setVideo_src(item.video_src);
  };

  return (
    <section className={styles.main_vlog_section}>
      <h1>MY VLOG</h1>
      <div className={styles.second_pink}>
        <div className={styles.first_black}></div>
        <div className={styles.video_Container}>
          {video_src ? (
            <VideoPlayer video_src={video_src} />
          ) : (
            <div
              className="video_img_Container"
              style={{ backgroundImage: `url(${vlogsvideo[0].image_src})` }}
            >
              <button
                className={styles.play_btn}
                onClick={() => {
                  if (setVideo_src) {
                    setVideo_src("/1.mov"); // Call only if defined
                  }
                }}
              >
                <span>
                  <Image
                    src="/svgs/play-solid.svg"
                    width={15}
                    height={15}
                    alt="play Icon"
                  />
                </span>{" "}
                Play Video
              </button>
            </div>
          )}
            <h2>More on this channel</h2>
          <div className={styles.other_Videos}>
            {vlogsvideo.map((item, index) => (
              <div key={index} className={styles.gallery_Item}>
                <Image
                  src={item.image_src}
                  width={200}
                  alt="image_view"
                  height={160}
                  quality={100}
                  onClick={() => handleUpdateStates(item)}
                  className={`${styles.image_gallery} ${
                    item.video_src === video_src
                      ? `${styles.image_selected}`
                      : `${styles.image_unselected}`
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyVlogs;
