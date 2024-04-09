import React, { useState } from 'react'
import { Avatar, Box, ScrollArea, Text } from "@radix-ui/themes";
import TabContentHelpScrollAreaMessage from './TabContentHelpScrollAreaMessage/TabContentHelpScrollAreaMessage';
import Loading from '@/components/Chat/Loading';


const TabContentHelpScrollArea = ({messages,handleSubmit,handleDelete,newMessage,setNewMessage}) => {
  const [loading,setLoading]=useState(true)
  return (
    <ScrollArea
    className=""
    type="always"
    scrollbars="vertical"
  >
    {loading ? <Loading/> : 
    <div className="chat-box-main mb-2">
      <div className="chat-box-main_daytime flex justify-end">
        <span className="text-anovatext1 text-xs">04:00 AM</span>
      </div>
    <TabContentHelpScrollAreaMessage setNewMessage={setNewMessage} newMessage={newMessage} messages={messages} handleSubmit={handleSubmit} handleDelete={handleDelete}/>
    </div>}
  </ScrollArea>
  )
}

export default TabContentHelpScrollArea