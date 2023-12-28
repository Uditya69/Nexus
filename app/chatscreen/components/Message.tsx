import React, { useContext, useEffect, useRef } from "react";
import test from "@/assets/Nexus.png";
import { AuthContext } from "@/app/context/AuthContext";
import { ChatContext } from "@/app/context/ChatContext";

interface MessageProps {
  senderId: string;
  text: string;
  img?: string;
}

const Message: React.FC<{ message: MessageProps }> = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  if (!message || !message.senderId) {
    return null; 
  }

  return (
    <div
      ref={messageRef}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="flex items-center p-3">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL || "fallback_image_url"
              : data.user.photoURL || "fallback_image_url"
          }
          alt=""
          className="h-7 w-7 rounded-full"
        />
        <span className="rounded-3xl border bg-neutral-800 p-3">
          <p>{message.text}</p>
          {message.img && <img src={message.img} alt="" className="h-7 w-7 rounded-full"/>}
        </span>
      </div>
    </div>
  );
};

export default Message;
