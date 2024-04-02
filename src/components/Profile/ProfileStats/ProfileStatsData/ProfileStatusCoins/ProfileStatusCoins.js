import React from 'react'

const ProfileStatusCoins = ({userProfile}) => {
  return (
    <div className="profilestats-main-items-list col-span-1 bg-anova4 flex flex-col justify-center items-center px-1 py-3 rounded-lg">
            <div className="profilestats-main-items-list-title text-sm">
              <span>Coins Earned</span>
            </div>
            <div className="profilestats-main-items-list-number text-white font-semibold">
              <span>{userProfile.coinsEarned}</span>
            </div>
          </div>
  )
}

export default ProfileStatusCoins