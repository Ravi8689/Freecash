import React, { Suspense, useEffect, useState } from "react";
import ProductPop from "./ProductPop/ProductPop";
import Image from "next/image";
import { TbCoinFilled } from "react-icons/tb";
import { useStore } from "@/store";

const ProductItem = ({ item }) => {
  return (

      <div className="product_main_group3_sub2_item bg-anova4 w-28 md:w-32 p-3 flex flex-col rounded-lg">
        <div className="product_main_group3_innergroup2_item_image flex flex-col  items-center ">
          <Image
            width={150}
            height={150}
            className="rounded-lg w-20 md:w-36"
            alt="product image"
            src={item.image}
          />
          <div className="play-button-icon text-white ">
            <ProductPop product={item} />
          </div>
        </div>

        <div className="product_main_group3_innergroup2_item_content mt-3">
          <div className="product_main_group3_innergroup2_item_content_title font-semibold text-xs md:text-sm">
            <p>{item.title}</p>
          </div>
          <div className="product_main_group3_innergroup2_item_content_category font-medium text-xs text-anovatext1">
            <p>{item.category}</p>
          </div>
          <div className="product_main_group3_innergroup2_item_content_price mt-2 text-xs md:text-sm">
            <span className="flex flex-nowrap items-center gap-1 font-semibold">
              <TbCoinFilled className="w-4 h-4 text-yellow-400" />
              {item.price}
            </span>
          </div>
        </div>
      </div>
 
  );
};

export default ProductItem;
