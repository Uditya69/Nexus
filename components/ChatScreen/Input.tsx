import { AuthContext } from "@/app/context/AuthContext";
import { ChatContext } from "@/app/context/ChatContext";
import { Button } from "@/components/ui/button";
import {  db } from "@/firebase";
import {
  updateDoc,
  doc,
  arrayUnion,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { v4 as uuidv4 } from "uuid"; 

function Input() {
  const [text, setText] = useState("");

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  const handleSend = async () => {
    const messageId = uuidv4(); 
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: messageId,
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });
    

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    //@ts-ignore
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
  };

  return (
    <div className="flex flex-row  justify-between px-3 pt-2 m-2 mt-0  rounded-lg border-2  rounded-br-xl">
      <input
        placeholder="Enter a message..."
        className="p-3 rounded-lg bg-transparent w-full border-none"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={handleKey}
      />
      <Button
        className=" border-0 bg-transparent hover:bg-transparent"
        onClick={handleSend}
      >
        <IoMdSend color="white" size="25" />
      </Button>
    </div>
  );
}

export default Input;
