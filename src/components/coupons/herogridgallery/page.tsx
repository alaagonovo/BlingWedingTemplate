"use client";

import React from "react";
import styles from "./herogrid.module.css";
import { Tables } from "../../../../database.types";
import HeroCard from "./heroCard/HeroCard";
function HeroCoupons({ data }: { data: Tables<"vendors">[] }) {
  return (
    <section className={styles.main_hero_grid}>
      {data?.map((item, index) => (
        <HeroCard item={item} key={index} />
      ))}
      {/* /* render seclaton* */}
      {data.length === 0 &&
        Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "560px",
              background: "#e0e0e0",
            }}
            className="skeliton"
          ></div>
        ))}
    </section>
  );
}
export default HeroCoupons;
