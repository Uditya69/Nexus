import React, { useContext } from "react";
import Input from "./components/Input";
import { ChatContext } from "../context/ChatContext";
import test from "@/assets/Nexus.png";
import Image from "next/image";
import Messages from "./components/Messages";

interface UserData {
  displayName: string;
}

interface ChatContextData {
  data: {
    chatId: string;
    user: UserData;
  };
  dispatch: () => void;
}

function Chat() {
  //@ts-ignore
  const { data } = useContext<ChatContextData>(ChatContext);

  return (
    <div className=" flex flex-col justify-between items-center h-screen w-5xl ">
      <div className="flex items-center w-full p-2 bg-slate-800 rounded-xl ">
        <div>
          <Image src={test} alt="" className="h-10 w-10" />
        </div>{" "}
        <span>USERNAME</span>
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
