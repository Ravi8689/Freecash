import React from 'react'
import { FaUsers } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import UserStatusCount from './UserStatusCount/UserStatusCount'

const UserStatus = () => {
  return (
    <div className="chat-main-group1-userstatus px-2 flex gap-2 items-center text-anovatext1">
    <FaUsers />
    <span className="flex items-center">
      <GoDotFill className="text-green-400" />
      <UserStatusCount/>
    </span>
  </div>
  )
}

export default UserStatus