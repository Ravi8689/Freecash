 'use client'
import LastTransactionItem from "@/components/LastTransactionsItem";
import { GoDotFill } from "react-icons/go";
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { SiRipple } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";
import { useState } from "react";
import { useStore } from "@/store";



export default function LastTransactionItemHolder() {
  const cryptos=useStore((state)=>state.currencies)
  console.log('crypto list',cryptos)

  return (
    <div className="product_main_group1 text-white mb-2 overflow-hidden flex justify-start gap-2 mt-1">
    <div className="product_main_group1_sub1 px-3 bg-anovanavbar flex justify-center items-center rounded">
      <span className=" ">
        <GoDotFill className="text-green-500" />
      </span>
    </div>

    <div className="product_main_group1_sub2 flex gap-2 owl-carousel owl-theme">
      {cryptos.map((item, index) => {
        return (
          <LastTransactionItem key={index} item={item}/>
        );
      })}
    </div>
  </div>
  );
}
