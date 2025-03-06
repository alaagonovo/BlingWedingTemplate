import Image from "next/image";
import React from "react";
import styles from "./aboutcard.module.css";
import Link from "next/link";
export interface ICategory {
  image: string;
  title: string;
  pdf?: string;
}
function AboutCard({ category }: { category: ICategory }) {
  return (
    <>
      {category.pdf ? (
        <Link
          href={`/pdfviewer?src=${encodeURIComponent(category.pdf)}`}
          target="_blank"
        >
          <div className={styles.card_container} data-aos="zoom-in-out">
            <Image src={category.image} alt="cover Image" fill />
            <h6>{category.title}</h6>
          </div>
        </Link>
      ) : (
        <div className={styles.card_container} data-aos="zoom-in-out">
          <Image src={category.image} alt="cover Image" fill />
          <h6>{category.title}</h6>
        </div>
      )}
    </>
  );
}

export default AboutCard;
