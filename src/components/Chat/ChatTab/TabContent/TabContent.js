import React, { useState } from 'react'

import { useStore } from '@/store';
import TabContentGeneral from './TabContentGeneral/TabContentGeneral';
import TabContentHelp from './TabContentHelp/TabContentHelp';

const TabContent = () => {
    const messages = useStore((state) => state.messages);
    const sentMessage = useStore((state) => state.addMessage);
    const removeMessage = useStore((state) => state.removeMessage);
    const [newMessage, setNewMessage] = useState({
      name: "",
      info: "",
      time: "",
      profileImage: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sentMessage({
        id: Math.ceil(Math.random() * 10000),
        name: "Yokohama Honda",
        info: newMessage.info,
        time: new Date().toLocaleTimeString([], {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        }),
        profileImage: "/images/chat/c3.jpg",
      });
    };
  
    const handleDelete = (id) => {
      removeMessage(id);
    };
  return (
    <div>
       <TabContentGeneral setNewMessage={setNewMessage} newMessage={newMessage} messages={messages} handleSubmit={handleSubmit} handleDelete={handleDelete}/>
       <TabContentHelp setNewMessage={setNewMessage} newMessage={newMessage} messages={messages} handleSubmit={handleSubmit} handleDelete={handleDelete}/>

       
    </div>
  )
}

export default TabContent