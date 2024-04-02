import React from 'react'
import { Avatar, Box, ScrollArea, Text } from "@radix-ui/themes";
import TabContentGeneralScrollAreaMessage from './TabContentGeneralScrollAreaMessage/TabContentGeneralScrollAreaMessage';

const TabContentGeneralScrollArea = ({messages,handleDelete}) => {
  return (
    <ScrollArea
    className="ScrollArea"
    type="always"
    scrollbars="vertical"
  >
    <div className="chat-box-main mb-2">
      <div className="chat-box-main_daytime flex justify-end">
        <span className="text-anovatext1 text-xs">04:00 AM</span>
      </div>
     <TabContentGeneralScrollAreaMessage messages={messages} handleDelete={handleDelete}/>
    </div>
  </ScrollArea>
  )
}

export default TabContentGeneralScrollArea