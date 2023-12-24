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
    // If user is not logged in, redirect to login page
    router.replace('/login');
    return null; 
  }

  // If user is logged in, render the protected content
  return <>{children}</>;
}

function ChatScreen() {
  return (
    <ProtectedRoute>
      <div className=" flex flex-row p-2 gap-x-2 mx-auto my-auto justify-between items-center">
      <div className="flex flex-row gap-x-2 ">
      <Sidebar />
      <Chat/>
      </div>
      <div className="">
      <Navbar/>
      </div>
      </div>
    </ProtectedRoute>
  );
}

export default ChatScreen;

