// import React from "react";
// import PropTypes from "prop-types";
// import styles from "./steps.module.css";
// import Button from "../ui/button/Button";

// function Steps({ steps }) {
//   return (
//     <section className={styles.main_Steps}>
//       {steps.map((item, index) => (
//         <React.Fragment key={index}>
//           {index % 2 === 0 ? (
//             <div
//               className={styles.steps_grid}
//               style={item.marginTop ? { marginTop: "4rem" } : null}
//             >
//               <div
//                 className={styles.img_container}
//                 style={{
//                   backgroundImage: `url(${item.img})`,
//                 }}
//               ></div>
//               <div className={styles.step_content}>
//                 <div className={styles.mobile_Title}>
//                   <h1>{item.title}</h1>
//                   <h2>{item.subTitle}</h2>
//                 </div>
//                 {item.paragraphs.map((paragraph, i) => (
//                   <p key={i}>{paragraph}</p>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div
//               className={styles.steps_grid}
//               style={item.marginTop ? { marginTop: "4rem" } : null}
//             >
//               <div className={styles.step_content}>
//                 <div className={styles.mobile_Title}>
//                   <h1>{item.title}</h1>
//                   <h2>{item.subTitle}</h2>
//                 </div>
//                 {item.paragraphs.map((paragraph, i) => (
//                   <p key={i}>{paragraph}</p>
//                 ))}
//               </div>

//               <div
//                 className={styles.img_container}
//                 style={{
//                   backgroundImage: `url(${item.img})`,
//                   backgroundPosition: "right center",
//                 }}
//               ></div>
//             </div>
//           )}
//         </React.Fragment>
//       ))}
//       <div className={styles.bottom_cont} data-aos="fade-up">
//         <h1>Don&apos;t leave it another minute</h1>
//         <Button path="/" width={191} value="INQUIRE" />
//       </div>
//     </section>
//   );
// }

// Steps.propTypes = {
//   steps: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       subTitle: PropTypes.string.isRequired,
//       paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
//     })
//   ).isRequired,
// };

// export default Steps;
// import React from "react";
// import styles from "./steps.module.css";
// import Button from "../ui/Button/Button";

// interface Step {
//   title: string;
//   subTitle: string;
//   paragraphs: string[];
//   img: string;
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
//               <div
//                 className={styles.img_container}
//                 style={{
//                   backgroundImage: `url(${item.img})`,
//                 }}
//               ></div>
//               <div className={styles.step_content}>
//                 <div className={styles.mobile_Title}>
//                   <h1>{item.title}</h1>
//                   <h2>{item.subTitle}</h2>
//                 </div>
//                 {item.paragraphs.map((paragraph, i) => (
//                   <p key={i}>{paragraph}</p>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div
//               className={styles.steps_grid}
//               style={item.marginTop ? { marginTop: "4rem" } : undefined}
//             >
//               <div className={styles.step_content}>
//                 <div className={styles.mobile_Title}>
//                   <h1>{item.title}</h1>
//                   <h2>{item.subTitle}</h2>
//                 </div>
//                 {item.paragraphs.map((paragraph, i) => (
//                   <p key={i}>{paragraph}</p>
//                 ))}
//               </div>
//               <div
//                 className={styles.img_container}
//                 style={{
//                   backgroundImage: `url(${item.img})`,
//                   backgroundPosition: "right center",
//                 }}
//               ></div>
//             </div>
//           )}
//         </React.Fragment>
//       ))}
//       {/* <div className={styles.bottom_cont} data-aos="fade-up">
//         <h1>Don&apos;t leave it another minute</h1>
//         <Button link="/"  ="INQUIRE" />
//       </div> */}
//     </section>
//   );
// };

// export default Steps;
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
                  <h1>{item.title}</h1>
                  <h2>{item.subTitle}</h2>
                </div>
                {item.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : (
            <div
              className={styles.steps_grid}
              style={item.marginTop ? { marginTop: "4rem" } : undefined}
            >
              <div className={styles.step_content}>
                <div className={styles.mobile_Title}>
                  <h1>{item.title}</h1>
                  <h2>{item.subTitle}</h2>
                </div>
                {item.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
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
