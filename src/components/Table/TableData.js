import React, { useEffect, useState } from "react";
import Tab from "./Tab/Tab";
import Loading from "./Loading";

const TableData = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <div className="product_main_group4 my-5">
      {loading ? <Loading /> : <Tab />}
    </div>
  );
};

export default TableData;
