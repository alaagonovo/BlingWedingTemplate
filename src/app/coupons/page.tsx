"use client";
import React, { useEffect, useState } from "react";
import HeroCoupons from "@/components/coupons/herogridgallery/page";
import { createClient } from "@/supabase/client";
import { Tables } from "../../../database.types";
import HomeTitle from "@/components/coupons/hometitle/HomeTitle";
import OtherCoupons from "@/components/coupons/couponssection/OtherCoupons";

function Page() {
  const supabase = createClient();
  const [vendors, setVendors] = useState<Tables<"vendors">[] | null>();
  const fetchCoupons = async () => {
    const { data, error } = await supabase.from("vendors").select();
    if (error) {
      console.error("Error fetching price lists:", error);
    } else {
      console.log("Price lists fetched:", data);
      setVendors(data);
    }
  };
  useEffect(() => {
    fetchCoupons();
  }, []);
  return (
    <div className="main_Margin">
      <HeroCoupons data={vendors?.slice(4, 8) || []} />
      <HomeTitle />
      <OtherCoupons
        data={vendors?.slice(0, 4).concat(vendors?.slice(8)) || []}
      />
    </div>
  );
}

export default Page;
