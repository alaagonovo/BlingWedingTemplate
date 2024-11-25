import React from "react";
import styles from "./steps.module.css";
// import Button from "../ui/Button/Button";

interface Step {
  title: string;
  subTitle: string;
  paragraphs: string[];
  img?: string; // Optional, as video might be used instead
  vid?: string; // Optional, as image might be used instead
  marginTop?: boolean;
}

interface StepsProps {
  steps: Step[];
}

const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (
    <section className={styles.main_Steps}>
      {steps.map((item, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <div
              className={styles.steps_grid}
              style={item.marginTop ? { marginTop: "4rem" } : undefined}
            >
              {item.vid ? (
                <video
                  className={styles.video_container}
                  src={item.vid}
                  controls
                  autoPlay
                  loop
                  muted
                  // poster="/1.webp"
                  playsInline
                />
              ) : (
                <div
                  className={styles.img_container}
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                ></div>
              )}
              <div className={styles.step_content}>
                <div className={styles.mobile_Title}>
                  {/* <h1 data-aos="fade-left">{item.title}</h1> */}
                  <h2 data-aos="fade-left">{item.subTitle}</h2>
                </div>
                {item.paragraphs.map((paragraph, i) => (
                  <p data-aos="fade-left" key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.steps_grid}>
              <div className={styles.step_content}>
                <div className={styles.mobile_Title}>
                  {/* <h1 data-aos="fade-right">{item.title}</h1> */}
                  <h2 data-aos="fade-right">{item.subTitle}</h2>
                </div>
                {item.paragraphs.map((paragraph, i) => (
                  <p data-aos="fade-right" key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {item.vid ? (
                <div className={styles.video_background}>
                  <video
                    className={styles.video_container}
                    src={item.vid}
                    autoPlay
                    loop
                    muted
                    // poster="/1.webp"
                    playsInline
                  />
                </div>
              ) : (
                <div
                  className={styles.img_container}
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition: "right center",
                  }}
                ></div>
              )}
            </div>
          )}
        </React.Fragment>
      ))}
      {/* <div className={styles.bottom_cont} data-aos="fade-up">
        <h1>Don&apos;t leave it another minute</h1>
        <Button ="/" width={191} value="INQUIRE" />
      </div> */}
    </section>
  );
};

export default Steps;
