import { Avatar } from "@radix-ui/themes";
import React from "react";
import { TbCoinFilled } from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { RiMacbookLine } from "react-icons/ri";
import { ImTablet } from "react-icons/im";
import Image from "next/image";

const ProductPopDetail = ({product}) => {
  return (
    <div className="popDetail-main flex flex-col md:flex-row justify-center md:justify-start items-center">
      <div className="popDetail-main-image md:mx-2">
        <Image
          className="rounded-lg"
          width={90}
          height={90}
          alt="image"
          src={product.image}
        />
      </div>
      <div className="px-2 flex justify-center flex-col items-center md:block">
        <div className="popDetail-main-title font-semibold my-2">
          <span className="text-white">{product.title}</span>
        </div>
        <div className="popDetail-main-price flex items-center mb-1">
          <TbCoinFilled className="mr-1 text-yellow-500" />
          <span className="font-semibold text-white text-sm">{product.price}</span>
        </div>
        <div className="popDetail-main-devices">
          <div className="popDetail-main-devices-item flex gap-2 item-center">
            <div className="bg-anova6 rounded-full text-xs p-1">
              <FaApple />
            </div>
            <div className="bg-anova6 rounded-full text-xs p-1">
              <FaMobileAlt />
            </div>
            <div className="bg-anova6 rounded-full text-xs p-1">
              <FaWindows />
            </div>
            <div className="bg-anova6 rounded-full text-xs p-1">
              <RiMacbookLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopDetail;
