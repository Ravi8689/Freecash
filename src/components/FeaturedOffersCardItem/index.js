import { useStore } from "@/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoPlay } from "react-icons/io5";
import { SiBitcoinsv } from "react-icons/si";
import Loading from "./Loading";

export default function FeaturedOffersCardItem() {
  const banners = useStore((state) => state.banners);
  const getBanners=useStore((state)=>state.getBanners)

  useEffect(()=>{
    getBanners()
  },[getBanners])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex gap-5">
          {banners.map((item, index) => {
            return (
              <div
                key={index}
                className="product_main_group2_item  flex flex-col gap-2 w-40 md:w-72 rounded-lg bg-anova4 pb-2"
              >
                <div className="product_main_group3_innergroup2_item_image">
                  <Image
                    className=""
                    width={350}
                    height={100}
                    alt="product image"
                    src={item.image}
                  />
                  <div className="play-button-icon text-white ">
                    <IoPlay />
                  </div>
                </div>
                <div className="product_main_group2_item_content flex flex-col md:flex-row md:justify-between md:items-center px-2  py-1">
                  <div className="product_main_group2_item_content_group1">
                    <div className="product_main_group2_item_content_group1_title product_main_group3_innergroup2_item_content_title font-semibold text-xs md:text-sm">
                      <p>{item.title}</p>
                    </div>
                    <div className="product_main_group2_item_content_group1_category font-medium text-xs md:text-sm text-anovatext1">
                      <p>{item.company}</p>
                    </div>
                  </div>
                  <div className="product_main_group2_item_content_group2 mt-2 md:mt-1">
                    <span className="flex flex-nowrap items-center gap-1 text-xs md:text-sm font-semibold">
                      <SiBitcoinsv className="w-4 h-4 text-yellow-400" />
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
