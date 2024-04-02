import React from 'react'
import { Avatar, Box, ScrollArea, Text } from "@radix-ui/themes";
import { MdEmojiEmotions } from "react-icons/md";
import { MdOutlineShare } from "react-icons/md";
const TabContentGeneralScrollAreaMessage = ({messages,handleDelete}) => {
  return (
    <div className="chat-box-main_chatCollection flex flex-col mt-2">
    {/* user list chat 1 */}
    {messages.map((item, index) => {
      return (
        <div
          key={index}
          className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs"
        >
          <div className="chat-box-main_chatCollection_user_image">
            <Avatar
              radius="full"
              src={item.profileImage}
              fallback="A"
            />
          </div>
          <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
            <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
              <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                <span className="text-white font-semibold">
                  {item.name}
                </span>
              </div>

              <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                  <span>{item.time}</span>
                </div>
                <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                  <MdEmojiEmotions />
                </div>
                <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                  <MdOutlineShare />
                </div>
              </div>
            </div>
            <div className="chat-box-main_chatCollection_user_messagebox-chat flex justify-between items-center">
              <span>{item.info} </span>
              <button
                className="bg-red-500 text-white p-1 rounded"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    })}
  </div>  )
}

export default TabContentGeneralScrollAreaMessage