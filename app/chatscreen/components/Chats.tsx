"use client"
import { Timestamp, doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '@/firebase';
import { AuthContext } from '@/app/context/AuthContext';
import { ChatContext } from '@/app/context/ChatContext';

interface ChatData {
  chats: Array<{
    userInfo: {
      displayName: string;
      photoURL: string;
    };
    lastMessage?: {
      text: string;
      date: Timestamp;
    };
  }>;
}

function Chats() {
  const [chats, setChats] = useState<Array<ChatData["chats"][0]>>([]);
  const currentUser = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        console.log("Current data: ", doc.data());
        const data = doc.data() as ChatData;
        setChats(data?.chats || []);
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const contextValue = useContext(ChatContext);
  const dispatch = contextValue.dispatch;

  const handleSelect = (user: { displayName: string; photoURL: string; }) => {
    //@ts-ignore
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className="chats">
      {chats
        .sort((a, b) => (b.lastMessage?.date.seconds || 0) - (a.lastMessage?.date.seconds || 0))
        .map((chat) => (
          <div
            className="userChat"
            key={chat.userInfo.displayName}
            onClick={() => handleSelect(chat.userInfo)}
          >
            <img src={chat.userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat.userInfo.displayName}</span>
              <p>{chat.lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Chats;
