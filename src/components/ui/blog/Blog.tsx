import styles from "./blog.module.css";
import { blogData } from "./data";
import Button from "../Button/Button";
import React from "react";
import Slider from "react-slick";
import MobileFrame from "../mobileframe/Mobile";

function Blog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,

    responsive: [
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
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
            <div key={index} className={styles.mobile_Container}>
              <MobileFrame video={item} />
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
        <h1>Explore Our</h1>
        <Button link="/packages" text="COUPONS" />
      </div>
    </section>
  );
}
export default Blog;
