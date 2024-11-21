import HeroSection from "@/components/vlogs/herosection/HeroSection";
import MyVlogs from "@/components/vlogs/myvlogs/MyVlogs";
import React from "react";

function page() {
  return (
    <div className="main_Margin">
      <HeroSection />
      <MyVlogs />
    </div>
  );
}

export default page;
