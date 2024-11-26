
"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./steps.module.css";

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
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedIndexes = new Set(visibleIndexes);
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            updatedIndexes.add(index); // Mark as visible
          }
        });
        setVisibleIndexes(updatedIndexes);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleIndexes]);

  return (
    <section className={styles.main_Steps}>
      {steps.map((item, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <div
              ref={(el: HTMLDivElement | null): void => {
                stepRefs.current[index] = el; // Do not return anything
              }}
              data-index={index}
              className={styles.steps_grid}
              style={item.marginTop ? { marginTop: "4rem" } : undefined}
            >
              {item.vid ? (
                <video
                  className={styles.video_container}
                  src={visibleIndexes.has(index) ? item.vid : undefined} // Lazy load video
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div
                  className={styles.img_container}
                  style={{
                    backgroundImage: visibleIndexes.has(index)
                      ? `url(${item.img})`
                      : undefined, // Lazy load image
                  }}
                ></div>
              )}
              <div className={styles.step_content}>
                <div className={styles.mobile_Title}>
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
            <div
              ref={(el: HTMLDivElement | null): void => {
                stepRefs.current[index] = el; // Do not return anything
              }}
              data-index={index}
              className={styles.steps_grid}
            >
              <div className={styles.step_content}>
                <div className={styles.mobile_Title}>
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
                    src={visibleIndexes.has(index) ? item.vid : undefined} // Lazy load video
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              ) : (
                <div
                  className={styles.img_container}
                  style={{
                    backgroundImage: visibleIndexes.has(index)
                      ? `url(${item.img})`
                      : undefined, // Lazy load image
                    backgroundPosition: "right center",
                  }}
                ></div>
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Steps;
