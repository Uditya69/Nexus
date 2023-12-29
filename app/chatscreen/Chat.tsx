import React, { useContext, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";

import Messages from "./components/Messages";
import InputTab from "./components/Input";

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className=" flex flex-col justify-between items-center max-h-screen w-4xl ">
      <div className="flex items-center justify-center w-full py-4 bg-neutral-950   font-mono">
        <span className="text-2xl ">{data.user?.displayName}</span>
      </div>
      <div className="self-start overflow-y-scroll ">
        <Messages />
      </div>
      <div className="w-full">
        <InputTab />
      </div>
    </div>
  );
}

export default Chat;
