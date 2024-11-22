import React from "react";
import carouselData from "@/data/carouselData";
import AutoCarousel from "@/components/ui/autocarousel/AutoCarousel";
import About from "../About";
function AutoSlider() {
  return (
    <section className="flex flex-col gap-2">
      <div className="max-w-[1077px] mx-auto mt-2 mb-12 px-5 text-center">
        <h1 className="text-center font-extrabold my-12  text-xl  xl:text-7xl">
          Artfully Capturing Memories
        </h1>
        <p className="text-center  text-sm md:text-base  mx-auto mb-6 max-w-[800px]">
          There’s nothing more incredible than finding the one person you can’t
          live without. Our mission is to document your wedding day in a way
          that feels authentic, so that years from now, you can relive each
          incredible moment.
        </p>
      </div>
      <AutoCarousel data={carouselData.line1} />
      <AutoCarousel data={carouselData.line2} reverse={true} />
      <AutoCarousel data={carouselData.line3} />
      <About />
    </section>
  );
}

export default AutoSlider;
