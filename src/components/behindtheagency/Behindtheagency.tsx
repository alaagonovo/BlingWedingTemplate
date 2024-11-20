import React from "react";
import styles from "./behindtheagency.module.css";
function Behindtheagency() {
  return (
    <section className={styles.main_behind_agency}>
      <div className={styles.title_Container}>
        <div className={styles.img_container}>
          <h1>BEHIND the AGENCY</h1>
          <div
            data-aos="fade-right"
            style={{ backgroundImage: "url(/Esraa.webp)" }}
            className={styles.Image}
          ></div>
        </div>
      </div>
      <div>
        <h2>
          Esraa Elsayad of BLING WEDDINGS brings years of expertise to luxury
          wedding content creation, focusing on capturing each detail with
          artistry and precision.
        </h2>
        <p>
          Her approach emphasizes collaboration with other creatives to ensure
          flawless moments are captured across photography, videography, and
          more. With a decade of marketing experience, Esraa tailors content
          plans to reflect each couple’s unique vision, adding a personal touch
          to their memories.
        </p>
        <p>
          Her innovative approach to ideation ensures content not only exceeds
          expectations but also resonates deeply with audiences.
        </p>
        <p className={styles.signature}>
          Esraa Elsayad
          <br /> <span>Creative Director</span>
        </p>
      </div>
    </section>
  );
}

export default Behindtheagency;
