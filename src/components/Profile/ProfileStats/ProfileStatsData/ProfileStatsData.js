import React from "react";
import ProfileStatusBalance from "./ProfileStatusBalance/ProfileStatusBalance";
import ProfileStatusOffers from "./ProfileStatusOffers/ProfileStatusOffers";
import ProfileStatusUserReferCount from "./ProfileStatusUserReferCount/ProfileStatusUserReferCount";
import ProfileStatusCoins from "./ProfileStatusCoins/ProfileStatusCoins";
import ProfileStatusReferEarn from "./ProfileStatusReferEarn/ProfileStatusReferEarn";
import ProfileStatusReferrer from "./ProfileStatusReferrer/ProfileStatusReferrer";

const ProfileStatsData = ({userProfile}) => {
  return (
    <div className="profilestats-main-items grid grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
 
          <ProfileStatusBalance userProfile={userProfile}/>

          <ProfileStatusOffers userProfile={userProfile}/>

          <ProfileStatusCoins userProfile={userProfile}/>


          <ProfileStatusReferEarn userProfile={userProfile}/>
          <ProfileStatusReferrer userProfile={userProfile}/>

          <ProfileStatusUserReferCount userProfile={userProfile}/>
   
    </div>
  );
};

export default ProfileStatsData;
