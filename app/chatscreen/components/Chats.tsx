"use client";
import { Timestamp, doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "@/firebase";
import { AuthContext } from "@/app/context/AuthContext";
import { ChatContext } from "@/app/context/ChatContext";

function Chats() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

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
  return (
    <div className="chats">
      
      {Object.entries(chats) 
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className=" flex flex-row border-b-2 items-center gap-2 p-2 hover:bg-zinc-900"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
          src={chat[1].userInfo.photoURL}
              alt=""
              className="h-8 w-8 rounded-full"
            />
            <div>
              <span className="text-lg">
                {chat[1].userInfo.displayName}</span>
              <p className="text-sm ms-1 text-zinc-400">
                {chat[1].lastMessage?.text &&
                chat[1].lastMessage.text.length > 25
                  ? `${chat[1].lastMessage.text.slice(0, 20)}...`
                  : chat[1].lastMessage.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Chats;
