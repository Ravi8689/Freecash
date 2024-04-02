import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";


import { useStore } from "@/store";
import TabList from "./TabList/TabList";
import TabContent from "./TabContent/TabContent";

const ChatTab = () => {
  
  return (
    <div className="chat-main-group1-switch  mt-2">
      <Tabs.Root defaultValue="general">
        <TabList/>

        <TabContent/>
      </Tabs.Root>
    </div>
  );
};

export default ChatTab;
