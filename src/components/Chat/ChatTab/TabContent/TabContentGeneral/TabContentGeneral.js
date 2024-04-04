import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";

import { FiSend } from "react-icons/fi";
import TabContentGeneralScrollArea from './TabContentGeneralScrollArea/TabContentGeneralScrollArea';
import TabContentGeneralForm from './TabContentGeneralForm/TabContentGeneralForm';

const TabContentGeneral = ({messages,handleSubmit,handleDelete,newMessage,setNewMessage}) => {
  return (
    <Tabs.Content
    className="Main-conetnts bg-anova2 p-2 mt-4"
    value="general"
  >
    <div className='height-content_chat overflow-y-scroll'>
    <TabContentGeneralScrollArea setNewMessage={setNewMessage} newMessage={newMessage} messages={messages} handleSubmit={handleSubmit} handleDelete={handleDelete}/>

    </div>

    <TabContentGeneralForm setNewMessage={setNewMessage} newMessage={newMessage} messages={messages} handleSubmit={handleSubmit} handleDelete={handleDelete}/>
  </Tabs.Content>
  )
}

export default TabContentGeneral