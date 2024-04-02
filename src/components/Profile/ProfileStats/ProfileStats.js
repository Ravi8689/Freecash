import React from "react";
import { IoStatsChart } from "react-icons/io5";
import ProfileStatsData from "./ProfileStatsData/ProfileStatsData";

const ProfileStats = ({userProfile}) => {
  return (
    <div className="profilestats-main text-anovatext1 my-6">
      <div className="profilestats-main-title flex gap-2 font-semibold">
        <IoStatsChart />
        <span className="text-white">Stats</span>
      </div>
        <ProfileStatsData userProfile={userProfile}/>
    </div>
  );
};

export default ProfileStats;
