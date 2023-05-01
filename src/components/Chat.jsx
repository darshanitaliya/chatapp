import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import cam from '../Img/cam.png'
import add from '../Img/add.png'
import more from '../Img/more.png'
import { ChatContext } from '../context/ChatContext'

function Chat() {
  const {data }=useContext(ChatContext);
  console.log("chat",data);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat