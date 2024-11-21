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
            <h1>CHECK OUT OUR LATEST WORK!</h1>
          </div>
          {latestWork.map((item, index) => (
            <LastWorkCard
              // title={item.title}
              // year={item.year}
              defaultImage={item.defaultImage}
              hoverImage={item.hoverImage}
              key={index}
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
