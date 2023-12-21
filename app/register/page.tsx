"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function register() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900  ">
      <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 p-5 w-4/5 h-4/5 rounded-xl space-x-5 flex flex-col items-center justify-around">
        <div className="flex flex-row self-start items-center font-mono text-4xl">
          <Image src={logo} alt="" height={100} /> <p>NEXUS</p>{" "}
        </div>

        <p className="text-4xl font-semibold font-sans">Hey There!</p>
        <p className="text-lg  mt-10">
          Ready to chat? Let's begin by creating your account.
        </p>

        <div className="flex flex-col w-fit  items-center p-3">
          <div className="grid space-y-3">
            <input
              placeholder="Username"
              required
              className="rounded-xl p-2 m-2"
            />
            <input
              placeholder="Email-ID"
              required
              className="rounded-xl p-2 m-2"
            />
            
              <input placeholder="password" className="rounded-xl p-2 m-2" />
            
            
          
          <div className="w-fit mt-2 items-center gap-1">
            <Label htmlFor="picture">Profile Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <Button className="w-fit self-start mx-3">Register</Button>
          </div>
        </div>
        <p>
          Do have an account?
          <Link
            href={"./login"}
            target=""
            className="text-blue-400 hover:text-blue-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default register;
