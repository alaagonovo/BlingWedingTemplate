import React from "react";
import styles from "./othercoupons.module.css";
import { Tables } from "../../../../database.types";
import CardCoupon from "../cardcoupon/CardCoupon";
function OtherCoupons({ data }: { data: Tables<"vendors">[] }) {
  return (
    <section className={styles.coupons_main_grid}>
      {data?.map((item, index) => (
        <CardCoupon
          key={index}
          images={item.images || []}
          discount={item.discount}
        />
      ))}
    </section>
  );
}

export default OtherCoupons;
