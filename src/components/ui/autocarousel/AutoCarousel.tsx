"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ViewCard from "../view_card/ViewCard";
import "./autoCarousel.css";
interface IAutoCarousel {
  img_src?: string;
  vid_src?: string;
}

function AutoCarousel({
  data,
  reverse,
}: {
  data: IAutoCarousel[];
  reverse?: boolean;
}) {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  // Update window width dynamically
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Only set windowWidth after the component mounts
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If windowWidth is not yet set (i.e., still null), we can return a loader or nothing
  if (windowWidth === null) {
    return (
      <div
        style={{
          display: "flex",
          gap: "15px",
          padding: "20px",
          overflowX: "hidden",
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "330px",
              height: "180px",
              background: "#e0e0e0",
              borderRadius: "10px",
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Calculate slidesToShow directly in render or as a simple calculation
  const slidesToShow = Math.max(1, windowWidth / 365);

  // Slider settings
  const sliderSettings = {
    infinite: true,
    slidesToShow,
    slidesToScroll: 1, // Smooth scrolling, one item at a time
    autoplay: true,
    speed: 5000, // Adjust for smooth infinite scrolling
    autoplaySpeed: 1000, // Constant scroll with linear ease
    cssEase: "linear",
    rtl: reverse || false,
    pauseOnHover: false,
  };

  // Skeleton loader while data is being processed
  if (!data || data.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          gap: "15px",
          padding: "20px",
          overflowX: "hidden",
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "330px",
              height: "180px",
              background: "#e0e0e0",
              borderRadius: "10px",
            }}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <section>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {data.map((item, index) => (
            <ViewCard
              img_src={item.img_src} // Fallback image
              vid_src={item.vid_src}
              key={index}
            />
          ))}
          {data.length < slidesToShow &&
            Array.from({
              length: Math.ceil(slidesToShow - data.length),
            }).map((_, index) => (
              <div
                key={`placeholder-${index}`}
                style={{
                  width: "330px",
                  height: "180px",
                  background: "#d3d3d3",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#888" }}>More content coming...</span>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
}

export default AutoCarousel;
