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

      <div className=" flex flex-row h-screen  gap-x-2 mx-auto my-auto justify-between items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <div>{/*empty div*/} </div>
        <div className="flex my-10 flex-row h-[95vh] w-[90vw] self-center min-w-fit rounded-xl bg-neutral-950 bg-opacity-[75%]">
          <div className="w-[25vw]">
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
