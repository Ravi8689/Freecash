import React, { useEffect, useState } from "react";
import { IoStatsChart } from "react-icons/io5";
import ProfileStatsData from "./ProfileStatsData/ProfileStatsData";
import Loading from "./Loading";

const ProfileStats = ({ userProfile }) => {
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
        <div className="profilestats-main text-anovatext1 my-6">
          <div className="profilestats-main-title flex gap-2 font-semibold">
            <IoStatsChart />
            <span className="text-white">Stats</span>
          </div>
          <ProfileStatsData userProfile={userProfile} />
        </div>
      )}
    </>
  );
};

export default ProfileStats;
