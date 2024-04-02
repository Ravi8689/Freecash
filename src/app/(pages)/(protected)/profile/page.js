"use client"
import ProfileDetails from "@/components/Profile/ProfileDetails";
import TableData from "@/components/TableData";
import LastTransactionItemHolder from "@/container/LastTransactionItemHolder";
import React from "react";

const page = () => {
  return (
    <div>
      <LastTransactionItemHolder/>
      <ProfileDetails/>
      <TableData/>
    </div>
  );
};

export default page;
