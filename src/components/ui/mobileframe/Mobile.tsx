"use client";
import React, { useEffect, useRef, useState } from "react";
import "./mobile.css";
import Image from "next/image";

interface IMobileframe {
  video?: string;
  image?: string;
}

function MobileFrame({ video, image }: IMobileframe) {
  const [isVisible, setIsVisible] = useState<boolean>(false); // To track if the component is in the viewport
  // const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false); // To track if the video is loaded
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to check if the component is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "700px 0px",
        threshold: 0, // Load when 10% of the component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const commonStyle: React.CSSProperties = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "28px",
    display: "block",
  };

  return (
    <div className="mobile_container" ref={containerRef}>
      <div className="specker_notch">
        <p className="speker_ele"></p>
        <p className="camera_ele"></p>
      </div>
      <p className="button left_top_btn"></p>
      <p className="button left_avarage_btn"></p>
      <p className="button left_bottom_btn"></p>
      <p className="button right_btn"></p>
      <div className="mobile_content">
        {/* Lazy-load the image */}
        {image && isVisible && (
          <Image style={commonStyle} src={image} alt="product" loading="lazy" />
        )}

        {/* Lazy-load the video */}
        {video && isVisible && (
          <>
            <video
              src={video}
              loop
              autoPlay
              muted
              playsInline
              style={{
                ...commonStyle,
                // display: isVideoLoaded ? "block" : "none",
              }}
              // onLoadedData={() => setIsVideoLoaded(true)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default MobileFrame;
