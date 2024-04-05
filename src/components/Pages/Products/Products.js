"use client";

import TableData from "../../Table/TableData";
import FeaturedOffersCardItem from "../../FeaturedOffersCardItem";
import AnimatedOfferItemHolder from "@/container/AnimatedOfferItemHolder";
import OfferItemHolder from "@/container/OfferItemHolder";
import "../../../../static/css/main.css";

const Products = () => {
  return (
    <div className="product_main my-1">
      <AnimatedOfferItemHolder />

      <OfferItemHolder />

      <TableData />
    </div>
  );
};

export default Products;
