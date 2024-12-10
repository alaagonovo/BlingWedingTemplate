// "use client";
// import React, { useEffect, useState } from "react";
// import "./autoCarousel.css";
// import Slider from "react-slick";
// import ViewCard from "@/components/ui/view_card/ViewCard";
// import Skilliton from "@/components/ui/autocarousel/Skilliton";

// interface IAutoCarousel {
//   img_src?: string;
//   vid_src?: string;
//   img_fallback?: string;
// }

// function AutoCarousel({
//   data,
//   reverse,
// }: {
//   data: IAutoCarousel[];
//   reverse?: boolean;
// }) {
//   const [windowWidth, setWindowWidth] = useState<number | null>(null);
//   // Update window width dynamically
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     // Only set windowWidth after the component mounts
//     if (typeof window !== "undefined") {
//       setWindowWidth(window.innerWidth);
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // If windowWidth is not yet set (i.e., still null), we can return a loader or nothing
//   if (windowWidth === null || !data || data.length === 0) {
//     return <Skilliton />;
//   }

//   // Calculate slidesToShow directly in render or as a simple calculation
//   const slidesToShow = Math.max(1, windowWidth / 365);

//   const sliderSettings = {
//     infinite: true, // Ensures infinite looping of slides
//     slidesToShow, // Show the calculated number of slides
//     slidesToScroll: 1, // Scroll one slide at a time
//     autoplay: true, // Auto scroll the slides
//     speed: 7000, // Transition speed between slides (in milliseconds)
//     autoplaySpeed: 0, // Set to 0 for continuous autoplay (no delay between slides)
//     cssEase: "linear", // Smooth, linear transition for scrolling
//     rtl: reverse || false, // Reverse slide direction (for RTL languages)
//     pauseOnHover: false, // Prevent pausing the autoplay when hovering over the slider
//     swipeToSlide: true, // Allow user to swipe slides
//     responsive: [
//       {
//         breakpoint: 768, // Mobile breakpoint
//         settings: {
//           speed: 10000, // Adjust speed for mobile
//           autoplaySpeed: 0, // Ensure continuous scroll on mobile
//         },
//       },
//     ],
//   };

//   if (data.length > 0) {
//     return (
//       <section>
//         <div className="slider-container">
//           <Slider {...sliderSettings}>
//             {data.map((item, index) => (
//               <ViewCard
//                 img_src={item.img_src} // Fallback image
//                 vid_src={item.vid_src}
//                 img_fallback={item.img_fallback}
//                 key={index}
//               />
//             ))}
//           </Slider>
//         </div>
//       </section>
//     );
//   }
// }

// export default AutoCarousel;
"use client";
import React, { useEffect, useState, useCallback } from "react";
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

  // Debounced window resize handler for better performance
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Calculate slidesToShow dynamically before the useMemo hook
  // const slidesToShow = windowWidth
  //   ? Math.max(1, Math.floor(windowWidth / 365))
  //   : 1; // Default to 1 slide if windowWidth is not available
  const slidesToShow = Math.max(1, windowWidth! / 365);
  // Memoize sliderSettings to prevent unnecessary recalculations
  const sliderSettings = React.useMemo(
    () => ({
      infinite: true,
      slidesToShow, // Number of slides based on the window width
      slidesToScroll: 1,
      autoplay: true,
      speed: 7000,
      autoplaySpeed: 0,
      cssEase: "linear",
      rtl: reverse || false,
      pauseOnHover: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768, // Mobile breakpoint
          settings: {
            speed: 10000,
            autoplaySpeed: 0,
          },
        },
      ],
    }),
    [slidesToShow, reverse] // Recalculate when the number of slides to show or reverse changes
  );

  // If windowWidth is not yet set or data is empty, show loader or empty state
  if (windowWidth === null || !data || data.length === 0) {
    return <Skilliton />; // Consider improving the "Skilliton" loading experience if necessary
  }

  return (
    <section>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {data.map((item, index) => (
            <ViewCard
              img_src={item.img_src}
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

export default AutoCarousel;
