import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import Items from "./Items/Items";
import './style.css'
const SkelectonItem = () => {
  return (
    <div className="product_main_group3 my-5 z-30 overflow-hidden gap-2">
      <div className="product_main_group3_sub1 flex justify-between mb-3">
        <div className="product_main_group3_innergroup1_sub1">
          <span className="flex gap-2 items-center text-anovatext1 font-medium text-lg">
            <IoIosStar />
            Clothes
          </span>
        </div>

        <div className="product_main_group3_innergroup1_sub2">
          <button className="bg-anova4 hover:bg-green-600 px-4 py-2 rounded-lg">
            View all
          </button>
        </div>
      </div>
      
      <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
        <Items />
      </div>
    </div>
  );
};

export default SkelectonItem;
