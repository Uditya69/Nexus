import React, { useContext } from "react";
import Input from "./components/Input";
import { ChatContext } from "../context/ChatContext";

import Messages from "./components/Messages";



function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className=" flex flex-col justify-between items-center h-screen w-5xl ">
      <div className="flex items-center w-full p-2 bg-slate-800 rounded-xl ">
        <div>
          <img src={''} alt="" className="h-10 w-10" />
        </div>
        <span>{data.user?.displayName}</span>
      </div>
      <div className="self-start">
        <Messages />
      </div>
      <div className="w-full">
        <Input />
      </div>
    </div>
  );
}

export default Chat;
