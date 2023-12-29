"use client";
import React, { useContext } from "react";
import Chat from "./Chat";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

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
      <div className=" flex flex-row  gap-x-2 mx-auto my-auto justify-between items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
       <div>{/*empty div*/} </div>
        <div className="flex flex-row self-center min-w-fit h-2/3  bg-neutral-950">
          <Sidebar />
         <div className="max-w-4xl border-l-2 border-zinc-600 "> <Chat /></div>
        </div>
        <div className=" sticky">
          <Navbar />
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default ChatScreen;
