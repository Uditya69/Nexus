"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900  ">
      <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 p-5 my-auto w-4/5 h-4/5 rounded-xl space-x-5 flex flex-col items-center justify-around">
        <div className="flex flex-row self-start items-center font-mono text-4xl">
          <Image src={logo} alt="" height={100} /> <p>NEXUS</p>{" "}
        </div>

        <p className="text-4xl font-semibold font-sans">Welcome back!</p>
        <p className="text-lg  mt-14">
          Continue the conversation – log in to your chat account
        </p>

        <div className="flex flex-col w-fit items-center  p-3">
          <div className="grid space-y-3">
            <input placeholder="Email-ID" className="rounded-xl p-2 m-2" />
            <div className="">
              <input placeholder="password" className="rounded-xl p-2 m-2" />
            </div>
            <Button className="w-fit self-start mx-3">Login</Button>
          </div>
        </div>
        <p className="">
          Don't have an account?
          <Link href={"./register"} target="" className=" text-blue-400 hover:text-blue-700">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
