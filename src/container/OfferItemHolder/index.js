import { SiBitcoinsv } from "react-icons/si";

import { IoIosStar } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useStore } from "@/store";

export default function OfferItemHolder() {
  const products = useStore((state) => state.products);
  const getProducts = useStore((state) => state.getProducts);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  // console.log("new", products);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="product_main_group3 my-5 z-30 overflow-hidden gap-2">
          <div className="product_main_group3_sub1 flex justify-between mb-3">
            <div className="product_main_group3_innergroup1_sub1">
              <span className="flex gap-2 items-center text-anovatext1 font-medium text-lg">
                <IoIosStar />
                Featured
              </span>
            </div>

            <div className="product_main_group3_innergroup1_sub2">
              <button className="bg-anova4 hover:bg-green-600 px-4 py-2 rounded-lg">
                View all
              </button>
            </div>
          </div>

          <div className="product_main_group3_sub2 owl-carousel owl-theme flex gap-5">
          {products.filter((items)=>items.type === 'featured').map((item, index) => {
              return <ProductCard key={index} item={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
