import React, { useContext, useEffect, useRef } from 'react'
import { AuthConext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext';

function Message({ message }) {

  const {currentUser}=useContext(AuthConext);
  const {data}=useContext(ChatContext);

  const ref=useRef()

  useEffect(()=>{
   ref.current?.scrollIntoView({behavior:'smooth'})
  },[message])

  console.log("message",message);

  return (
    <div ref={ref} className={`message ${message.senderId===currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <img src={message.senderId===currentUser.uid?currentUser.photoURL:data.user.photoURL} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message