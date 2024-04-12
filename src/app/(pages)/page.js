"use client";
import React, { useEffect, useState } from "react";
import Homes from "@/components/Pages/Homes/Homes";
import LastTransactionItemHolder from "@/container/LastTransactionItemHolder";


const Home = () => {
  return (
    <div className="">
      <LastTransactionItemHolder />
      <Homes />
    </div>
  );
};

export default Home;
