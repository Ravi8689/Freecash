import Image from "next/image";
import { SiBitcoinsv } from "react-icons/si";

import { IoPlay } from "react-icons/io5";
import Link from "next/link";
import OfferItemCard from "@/components/OfferItemsCard";
import { TbCoinFilled } from "react-icons/tb";
import { useState } from "react";
import Loading from "./Loading";

export default function AnimatedOfferItemHolder() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="group3_premium  bg-anova2 my-5 border-2 border-anova3 rounded-lg p-4 overflow-hidden gap-2">
          <div className="product3_premium_image">
            <Image width={350} height={350} src="/images/dot.png" />
          </div>
          <div className="product_main_group3_sub1 w-full z-20  flex justify-between mb-3">
            <div className="product_main_group3_innergroup1_sub1">
              <span className="flex gap-2 items-center text-green-400 font-medium text-lg">
                <TbCoinFilled />
                Premium
              </span>
            </div>

            <div className="product_main_group3_innergroup1_sub2">
              <button className="bg-anova4 hover:bg-green-600 px-4 py-2 rounded-lg">
                View all
              </button>
            </div>
          </div>

          <div className="product_main_group3_sub2 z-30 owl-carousel owl-theme flex gap-5">
            <OfferItemCard />
          </div>
        </div>
      )}
    </>
  );
}
