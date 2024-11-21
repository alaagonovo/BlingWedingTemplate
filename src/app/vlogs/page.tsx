import HeroSection from "@/components/vlogs/herosection/HeroSection";
import MyVlogs from "@/components/vlogs/myvlogs/MyVlogs";
import StorySection from "@/components/vlogs/storysection/StorySection";
import React from "react";

function page() {
  return (
    <div className="main_Margin">
      <HeroSection />
      <MyVlogs />
      <StorySection />
    </div>
  );
}

export default page;
