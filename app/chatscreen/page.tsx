"use client";
import React, { useContext } from "react";
import Chat from "./chats";
import Message from "./message";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
function chatscreen() {
  {
    /*const router = useRouter();
  const  {currentUser}  = useContext(AuthContext);
  //@ts-ignore
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return router.replace('/login');
    }

    return children
  };*/
  }

  return (
    <>
      {/*<ProtectedRoute>*/}

      <Chat />
      <Message />
      {/* <button onClick={()=>signOut(auth)}>logout</button>*/}

      {/*</ProtectedRoute>*/}
    </>
  );
}

export default chatscreen;
