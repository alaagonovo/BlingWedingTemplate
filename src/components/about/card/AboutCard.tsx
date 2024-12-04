import Image from "next/image";
import React from "react";
import styles from "./aboutcard.module.css";
export interface ICategory {
  image: string;
  title: string;
}
function AboutCard({ category }: { category: ICategory }) {
  return (
    <div className={styles.card_container} data-aos="zoom-in-out">
      <Image src={category.image} alt="cover Image" fill />
      <h6>{category.title}</h6>
    </div>
  );
}

export default AboutCard;
