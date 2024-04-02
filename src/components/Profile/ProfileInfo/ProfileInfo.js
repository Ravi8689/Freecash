import { Avatar } from "@radix-ui/themes";
import React from "react";
import { MdVerifiedUser } from "react-icons/md";
const ProfileInfo = ({userProfile}) => {
  return (
    <div className="profiledetail-main-group1 flex items-center p-2 gap-3 mb-4">
      <div className="profiledetail-main-group1-image flex flex-col justify-center items-center">
        <Avatar
          className="mr-2"
          size="6"
          radius="full"
          src={userProfile.userImage}
          fallback="N"
        />
        <span className="bg-red-600 rounded-full px-2 text-sm font-semibold mt-1">lvl 1</span>
      </div>
      <div className="profiledetail-main-group1-info text-anovatext1">
        <div className="profiledetail-main-group1-info-time text-sm font-medium">
          <span>Joined {userProfile.time}</span>
        </div>
        <div className="profiledetail-main-group1-info-name text-lg lg:text-4xl font-semibold text-white my-1">
          <p>{userProfile.name}</p>
        </div>
        <div className="profiledetail-main-group1-info-email text-sm font-medium flex items-center">
          <p>{userProfile.email}</p>
          <MdVerifiedUser className="ml-2 text-green-500"/>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
