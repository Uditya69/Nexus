"use client"
import { Timestamp, doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '@/firebase';
import { AuthContext } from '@/app/context/AuthContext';
import { ChatContext } from '@/app/context/ChatContext';


function Chats() {
  const [chats, setChats] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        console.log("Current data: ", doc.data());
      
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
console.log(Object.entries(chats))
  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className=" flex flex-row items-center gap-2 p-2"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" className='h-7 w-7 rounded-full'/>
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;

