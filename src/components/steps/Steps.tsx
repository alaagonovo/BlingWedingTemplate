// import React from "react";
// import styles from "./steps.module.css";
// // import Button from "../ui/Button/Button";

// interface Step {
//   title: string;
//   subTitle: string;
//   paragraphs: string[];
//   img?: string; // Optional, as video might be used instead
//   vid?: string; // Optional, as image might be used instead
//   marginTop?: boolean;
// }

// interface StepsProps {
//   steps: Step[];
// }

// const Steps: React.FC<StepsProps> = ({ steps }) => {
//   return (
//     <section className={styles.main_Steps}>
//       {steps.map((item, index) => (
//         <React.Fragment key={index}>
//           {index % 2 === 0 ? (
//             <div
//               className={styles.steps_grid}
//               style={item.marginTop ? { marginTop: "4rem" } : undefined}
//             >
//               {item.vid ? (
//                 <video
//                   className={styles.video_container}
//                   src={item.vid}
//                   controls
//                   autoPlay
//                   loop
//                   muted
//                   // poster="/1.webp"
//                   playsInline
//                 />
//               ) : (
//                 <div
//                   className={styles.img_container}
//                   style={{
//                     backgroundImage: `url(${item.img})`,
//                   }}
//                 ></div>
//               )}
//               <div className={styles.step_content}>
//                 <div className={styles.mobile_Title}>
//                   {/* <h1 data-aos="fade-left">{item.title}</h1> */}
//                   <h2 data-aos="fade-left">{item.subTitle}</h2>
//                 </div>
//                 {item.paragraphs.map((paragraph, i) => (
//                   <p data-aos="fade-left" key={i}>
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className={styles.steps_grid}>
//               <div className={styles.step_content}>
//                 <div className={styles.mobile_Title}>
//                   {/* <h1 data-aos="fade-right">{item.title}</h1> */}
//                   <h2 data-aos="fade-right">{item.subTitle}</h2>
//                 </div>
//                 {item.paragraphs.map((paragraph, i) => (
//                   <p data-aos="fade-right" key={i}>
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>
//               {item.vid ? (
//                 <div className={styles.video_background}>
//                   <video
//                     className={styles.video_container}
//                     src={item.vid}
//                     autoPlay
//                     loop
//                     muted
//                     // poster="/1.webp"
//                     playsInline
//                   />
//                 </div>
//               ) : (
//                 <div
//                   className={styles.img_container}
//                   style={{
//                     backgroundImage: `url(${item.img})`,
//                     backgroundPosition: "right center",
//                   }}
//                 ></div>
//               )}
//             </div>
//           )}
//         </React.Fragment>
//       ))}
//       {/* <div className={styles.bottom_cont} data-aos="fade-up">
//         <h1>Don&apos;t leave it another minute</h1>
//         <Button ="/" width={191} value="INQUIRE" />
//       </div> */}
//     </section>
//   );
// };

// export default Steps;
"use client";
import React, { useEffect, useRef, useState } from "react";
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
  // Helper to track if a step is in the viewport
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!visibleSteps.includes(index)) {
              setVisibleSteps((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the step is visible
      }
    );

    const stepElements = document.querySelectorAll(`.${styles.step}`);
    stepElements.forEach((element) => observer.observe(element));

    return () => {
      stepElements.forEach((element) => observer.unobserve(element));
    };
  }, [visibleSteps]);

  return (
    <section className={styles.main_Steps}>
      {steps.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className={`${styles.steps_grid} ${styles.step}`}
            data-index={index}
            style={item.marginTop ? { marginTop: "4rem" } : undefined}
          >
            {/* Conditionally Render Media (Lazy Loading) */}
            {visibleSteps.includes(index) && (
              <>
                {/* Video */}
                {item.vid ? (
                  <video
                    className={styles.video_container}
                    src={item.vid}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/1.webp" // Fallback image
                  />
                ) : (
                  // Image
                  <div
                    className={styles.img_container}
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                  ></div>
                )}
              </>
            )}

            {/* Step Content */}
            <div className={styles.step_content}>
              <div className={styles.mobile_Title}>
                <h2 data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                  {item.subTitle}
                </h2>
              </div>
              {item.paragraphs.map((paragraph, i) => (
                <p
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  key={i}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Steps;
