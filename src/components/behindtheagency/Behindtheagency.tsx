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
      <div
        style={{ overflow: "hidden" }}
        className="flex flex-col justify-between"
      >
        <h2 data-aos="fade-left">
          {/* Esraa Elsayad of BLING WEDDINGS brings years of expertise to luxury
          wedding content creation, focusing on capturing each detail with
          artistry and precision. */}
          A Wedding Planner’s Approach to Luxury Wedding Day Content Creation
        </h2>
        <p data-aos="fade-left">
          {/* Her approach emphasizes collaboration with other creatives to ensure
          flawless moments are captured across photography, videography, and
          more. With a decade of marketing experience, Esraa tailors content
          plans to reflect each couple’s unique vision, adding a personal touch
          to their memories. */}
          In the world of luxury wedding content creation, every detail matters.
          As someone with years of experience in the industry, Esraa Elsayad
          understands this intimately. With her venture, BLING WEDDINGS, Esraa
          has successfully combined her expertise and keen eye to offer content
          creation services that focus on capturing the essence of your special
          day with precision and artistry.
        </p>
        {/* <p data-aos="fade-left">
          Her innovative approach to ideation ensures content not only exceeds
          expectations but also resonates deeply with audiences.
        </p> */}
        <p className={styles.signature} data-aos="fade-up">
          Esraa Elsayad
          <br /> <span>Founder & Creative Director</span>
        </p>
      </div>
    </section>
  );
}

export default Behindtheagency;
