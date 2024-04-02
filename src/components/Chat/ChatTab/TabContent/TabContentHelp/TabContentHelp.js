import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";
import { Avatar, Box, ScrollArea, Text } from "@radix-ui/themes";
import { MdEmojiEmotions } from "react-icons/md";
import { MdOutlineShare } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import TabContentHelpScrollArea from './TabContentHelpScrollArea/TabContentHelpScrollArea';
import TabContentHelpForm from './TabContentHelpForm/TabContentHelpForm';

const TabContentHelp = ({messages,handleSubmit,handleDelete,newMessage,setNewMessage}) => {
  return (
    <Tabs.Content className="bg-anova2 p-2 mt-4" value="help">
      <TabContentHelpScrollArea setNewMessage={setNewMessage} newMessage={newMessage} messages={messages} handleSubmit={handleSubmit} handleDelete={handleDelete}/>

    <TabContentHelpForm setNewMessage={setNewMessage} newMessage={newMessage} messages={messages} handleSubmit={handleSubmit} handleDelete={handleDelete}/>
  </Tabs.Content>
  )
}

export default TabContentHelp