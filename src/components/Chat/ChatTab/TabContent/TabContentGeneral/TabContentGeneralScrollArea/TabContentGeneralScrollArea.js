import React, { useEffect, useState } from 'react'
import { Avatar, Box, ScrollArea, Text } from "@radix-ui/themes";
import TabContentGeneralScrollAreaMessage from './TabContentGeneralScrollAreaMessage/TabContentGeneralScrollAreaMessage';
import Loading from '@/components/Chat/Loading';

const TabContentGeneralScrollArea = ({messages,handleDelete}) => {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
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
     <TabContentGeneralScrollAreaMessage messages={messages} handleDelete={handleDelete}/>
    </div>
    }
  </ScrollArea>
  )
}

export default TabContentGeneralScrollArea