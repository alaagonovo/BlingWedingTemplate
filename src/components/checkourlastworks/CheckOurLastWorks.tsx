"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./LastWorks.module.css";
import LastWorkCard from "../ui/lastWorkCard/LastWorkCard";
import latestWork from "@/data/latestWork";
function CheckOurLastWorks() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [scrollvalue, setScrollVale] = useState(0);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWindowWidth);
    setScrollVale(1110 - (windowWidth - 580));
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
      setScrollVale(1110 - (windowWidth - 580));
    };
  }, [windowWidth]);
  const handleScroll = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      if (e.deltaY > 0) {
        // Scrolling down (wheel down)

        scrollRef.current.style.transform = `translateX(-${scrollvalue}px)`;
      } else {
        // Scrolling up (wheel up)
        scrollRef.current.style.transform = "translateX(0px)";
      }
    }
  };
  return (
    <section className={styles.main_latest_works} onWheel={handleScroll}>
      <div className={styles.top_Part}>
        <div className={styles.content}>
          <div className={styles.title_Container}>
            <h1 data-aos="fade-right">CHECK OUT OUR LATEST WORK!</h1>
          </div>
          <div className={styles.main_Scroll}>
            <div
              className={styles.trace_container}
              ref={scrollRef}
              onWheel={handleScroll}
            >
              {latestWork.map((item, index) => (
                <LastWorkCard
                  defaultImage={item.defaultImage}
                  hoverImage={item.hoverImage}
                  key={index}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_Part}>
        <p>Events / Portrait photographer / Weddings & film maker</p>
      </div>
    </section>
  );
}

export default CheckOurLastWorks;
