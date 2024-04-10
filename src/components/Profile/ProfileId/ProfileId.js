import React, { useState } from "react";
import { RiFileUserFill } from "react-icons/ri";
import { FaCopy } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { IoToggle } from "react-icons/io5";
import Loading from "./Loading";

const ProfileId = ({ userProfile }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="profiledetail-main-group2 text-anovatext1 flex justify-between items-center py-5">
          <div className="profiledetail-main-group2-id flex items-center">
            <div className="profiledetail-main-group2-id-image text-anovatext1">
              <RiFileUserFill />
            </div>
            <div className="profiledetail-main-group2-id-title font-semibold text-white text-lg ml-1">
              <span>ID</span>
            </div>
          </div>
          <div className="profiledetail-main-group2-key flex items-center bg-anova5 rounded-full px-3">
            <span className="secret-keys-text">{userProfile.id}</span>
            <FaCopy />
          </div>
          <div className="profiledetail-main-group2-type flex items-center gap-2">
            <div>
              <RiGitRepositoryPrivateFill />
            </div>
            <div className="text-white">Private</div>
            <div>
              <MdOutlinePrivacyTip />
            </div>
          </div>
          <div className="profiledetail-main-group2-toggle">
            <IoToggle className="text-2xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileId;
