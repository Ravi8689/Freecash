import { Avatar } from "@radix-ui/themes";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileId from "./ProfileId/ProfileId";
import ProfileStats from "./ProfileStats/ProfileStats";
import { useStore } from "@/store";

const ProfileDetails = () => {
  const userProfile=useStore((state)=>state.getOneUser)
  return (
    <div className="profiledetail-main mt-10 mb-10">
      <ProfileInfo userProfile={userProfile}/>
      <hr/>
      <ProfileId userProfile={userProfile}/>
      <hr/>
      <ProfileStats userProfile={userProfile}/>
      <hr/>
    </div>
  );
};

export default ProfileDetails;
