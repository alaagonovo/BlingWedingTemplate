"use client";
import React, { useEffect, useState } from "react";
import "./autoCarousel.css";
import Slider from "react-slick";
import ViewCard from "@/components/ui/view_card/ViewCard";
import Skilliton from "@/components/ui/autocarousel/Skilliton";

interface IAutoCarousel {
  img_src?: string;
  vid_src?: string;
  img_fallback?: string;
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
  if (windowWidth === null || !data || data.length === 0) {
    return <Skilliton />;
  }

  // Calculate slidesToShow directly in render or as a simple calculation
  const slidesToShow = Math.max(1, windowWidth / 365);

  const sliderSettings = {
    infinite: true, // Ensures infinite looping of slides
    slidesToShow, // Show the calculated number of slides
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto scroll the slides
    speed: 7000, // Transition speed between slides (in milliseconds)
    autoplaySpeed: 0, // Set to 0 for continuous autoplay (no delay between slides)
    cssEase: "linear", // Smooth, linear transition for scrolling
    rtl: reverse || false, // Reverse slide direction (for RTL languages)
    pauseOnHover: false, // Prevent pausing the autoplay when hovering over the slider
    swipeToSlide: true, // Allow user to swipe slides
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          speed: 10000, // Adjust speed for mobile
          autoplaySpeed: 0, // Ensure continuous scroll on mobile
        },
      },
    ],
  };

  if (data.length > 0) {
    return (
      <section>
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {data.map((item, index) => (
              <ViewCard
                img_src={item.img_src} // Fallback image
                vid_src={item.vid_src}
                img_fallback={item.img_fallback}
                key={index}
              />
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}

export default AutoCarousel;
