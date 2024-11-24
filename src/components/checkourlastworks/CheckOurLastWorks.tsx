import React from "react";
import styles from "./LastWorks.module.css";
import LastWorkCard from "../ui/lastWorkCard/LastWorkCard";
import latestWork from "@/data/latestWork";
function CheckOurLastWorks() {
  return (
    <section className={styles.main_latest_works}>
      <div className={styles.top_Part}>
        <div className={styles.content}>
          <div className={styles.title_Container}>
            <h1 data-aos="fade-right">CHECK OUT OUR LATEST WORK!</h1>
          </div>
          {latestWork.map((item, index) => (
            <LastWorkCard
              defaultImage={item.defaultImage}
              hoverImage={item.hoverImage}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className={styles.bottom_Part}>
        <p>Events / Portrait photographer / Weddings & film maker</p>
      </div>
    </section>
  );
}

export default CheckOurLastWorks;
