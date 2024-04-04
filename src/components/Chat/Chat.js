"use client";

import React, { useState } from "react";
import "../../../static/css/chat.css";
import UserStatus from "./UserStatus/UserStatus";
import ChatTab from "./ChatTab/ChatTab";

const Chat = () => {
  return (
    <div className="h-screen z-40 chat-main bg-anova3 py-2" style={{ width: "342px" }}>
      <div className="chat-main-group1">
        <UserStatus />
        <ChatTab />
      </div>
    </div>
  );
};

export default Chat;
