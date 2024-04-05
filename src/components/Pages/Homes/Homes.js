"use client";

import TableData from "../../Table/TableData";
import FeaturedOffersCardItem from "../../FeaturedOffersCardItem";
import AnimatedOfferItemHolder from "@/container/AnimatedOfferItemHolder";
import OfferItemHolder from "@/container/OfferItemHolder";
import "../../../../static/css/main.css";
const Homes = () => {
  return (
    <div className="product_main my-1 grid">
    <div className="product_main_group2 my-4 overflow-hidden flex justify-start gap-5">
      <FeaturedOffersCardItem />
      {/* <FeaturedOffersCardItem /> */}
    </div>

    <AnimatedOfferItemHolder />

    <OfferItemHolder />

    <TableData />
  </div>
  )
}

export default Homes