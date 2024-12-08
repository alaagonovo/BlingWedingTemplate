import React from "react";
import { blogData } from "./data";
import Button from "../Button/Button";
import Slider from "react-slick";
const MobileFrame = React.lazy(() => import("../mobileframe/Mobile"));
import styles from "./blog.module.css";

function Blog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
        },
      },
    ],
  };
  return (
    <section className={styles.blog_section}>
      <h1
        className={styles.main_Title}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="100"
      >
        <span className={styles.mainSpan}>
          imagine <span className={styles.subSpan}>waking up to this...</span>
        </span>
      </h1>
      <div className={styles.main__Cont} id="BLOG">
        <Slider {...settings}>
          {blogData.map((item, index) => (
            <div
              key={index}
              className={styles.mobile_Container}
              data-aos="fade-zoom-in"
              data-aos-delay={index * 200}
            >
              <MobileFrame video={item.vid_src} fallback={item.fallback_img} />
            </div>
          ))}
        </Slider>
      </div>
      <div
        className={styles.view_All}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
      >
        {/* <h1>Explore Our</h1> */}
        <Button link="/coupons" text="EXPLORE COUPONS" />
      </div>
    </section>
  );
}
export default Blog;
