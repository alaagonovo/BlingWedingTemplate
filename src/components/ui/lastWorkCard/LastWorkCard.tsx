import React from "react";
import styles from "./lastworkcard.module.css";
interface CardProps {
  // title: string;
  // year: string;
  index: number;
  defaultImage: string;
  hoverImage: string;
}
const LastWorkCard: React.FC<CardProps> = ({
  // title,
  // year,
  index,
  defaultImage,
  hoverImage,
}) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay={index * 150}
      className={styles.card}
      style={
        {
          "--defaultImage": `url(${defaultImage})`,
          "--hoverImage": `url(${hoverImage})`,
        } as React.CSSProperties
      }
    >
      <div className={styles.img_Container}></div>
    </div>
  );
};

export default LastWorkCard;
