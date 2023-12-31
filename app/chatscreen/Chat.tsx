import React, { useContext, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";

import Messages from "@/components/ChatScreen/Messages";
import Input from "@/components/ChatScreen/Input";
import NextTopLoader from "nextjs-toploader";

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className=" flex flex-col justify-between items-center h-[95vh] ">
      <NextTopLoader />

      <div className="flex items-center justify-center w-full pt-3  gap-x-5 bg-opacity-10 rounded-tr-xl font-mono">
        <img
          src={data.user?.photoURL}
          alt=""
          className="h-10 w-10 rounded-full"
        />
        <span className="text-2xl ">{data.user?.displayName}</span>
      </div>
      <div className="self-start overflow-y-scroll ">
        {data.user && <Messages />}
      </div>
      <div className="w-full ">{data.user && <Input />}</div>
    </div>
  );
}

export default Chat;
