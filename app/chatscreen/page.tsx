"use client";
import React, { useContext } from "react";
import Chat from "./Chat";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  if (!currentUser) {
    router.replace("/login");
    return null;
  }

  return <>{children}</>;
}

function ChatScreen() {
  return (
    <ProtectedRoute>
      <NextTopLoader />

      <div className=" flex flex-row h-full  gap-x-2 mx-auto my-0 justify-between items-center  bg-gradient-to-bl from-stone-200 via-stone-400 to-neutral-200   dark:bg-gradient-to-b dark:from-gray-950 dark:via-blue-950 dark:to-gray-950">
        <div>{/*empty div*/} </div>
        <div className="flex my-10 flex-row h-[95vh] w-[90vw] self-center min-w-fit rounded-xl text-black dark:text-gray-300 bg-white bg-opacity-70 dark:bg-neutral-950 dark:bg-opacity-[70%]">
          <div className="w-[30vw] md:w-[25vw] lg:w-[23vw]">
            <Sidebar />
          </div>
          <div className="w-[65vw] h-full border-l-2 border-zinc-600 ">
            {" "}
            <Chat />
          </div>
        </div>
        <div className=" sticky">
          <Navbar />
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default ChatScreen;
