import { Button } from "@/components/ui/button";
import { auth, provider } from "@/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = ({setIsAuth }) => {
  const googlesignin = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      cookies.set("auth-token", res.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return(
    <>
    <p>Sign in with google to continue</p>
    <Button onClick={googlesignin}> Sign in </Button>
    </>
  )
};
