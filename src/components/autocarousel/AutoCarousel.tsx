"use client";

import carouselData from "../../data/carouselData";
import About from "../about/About";
import ViewCard from "../ui/view_card/ViewCard";

function AutoCarousel() {
  return (
    <section className="flex flex-col gap-2 overflow-hidden ">
      <div className="w-full inline-flex flex-nowrap">
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll gap-5 ">
          {carouselData.map((item, index) => (
            <ViewCard
              img_src={item.img_src}
              vid_src={item.vid_src}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="w-full inline-flex flex-nowrap">
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse gap-5 ">
          {carouselData.map((item, index) => (
            <ViewCard
              img_src={item.img_src}
              vid_src={item.vid_src}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="w-full inline-flex flex-nowrap">
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll gap-5 ">
          {carouselData.map((item, index) => (
            <ViewCard
              img_src={item.img_src}
              vid_src={item.vid_src}
              key={index}
            />
          ))}
        </div>
      </div>
      <About />
    </section>
  );
}

export default AutoCarousel;
