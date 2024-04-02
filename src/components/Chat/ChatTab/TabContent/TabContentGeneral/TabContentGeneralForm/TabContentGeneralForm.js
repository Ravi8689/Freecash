import React from 'react'
import { FiSend } from 'react-icons/fi'

const TabContentGeneralForm = ({messages,handleSubmit,handleDelete,newMessage,setNewMessage}) => {
  return (
    <div className="chat-writing-box mt-1">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          value={newMessage.info}
          onChange={(e) => setNewMessage({ info: e.target.value })}
          className="text-xs bg-anova5 w-72 px-1 py-2 rounded"
          placeholder="Type your messages here"
        />
        <button className="bg-green-600 ml-2 p-2 rounded">
          <FiSend />
        </button>
      </form>
    </div>
  )
}

export default TabContentGeneralForm