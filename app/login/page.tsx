"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import NextTopLoader from "nextjs-toploader";
function Login() {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [err, setErr] = useState(false);
  const router = useRouter();
  //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/chatscreen");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-gray-200 ">
      <NextTopLoader />

      <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 p-5 my-auto w-4/5 max-w-4xl h-4/5 rounded-xl space-x-5 flex flex-col items-center justify-around">
        <Link href={"/"}>
          <div className="flex flex-row self-start items-center font-mono text-4xl">
            <Image src={logo} alt="" height={100} /> <p>NEXUS</p>{" "}
          </div>
        </Link>

        <p className="text-4xl font-semibold font-sans">Welcome back!</p>
        <p className="text-lg  mt-14">
          Continue the conversation – log in to your chat account
        </p>

        <form
          className="flex flex-col max-w-4xl items-center  p-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col max-w-4xl items-center self-center space-y-3">
            <input
              placeholder="Email-ID"
              type="email"
              className="rounded-none w-fit p-2  m-2 bg-transparent border-b-2"
            />
            <div className=" flex flex-col  w-fit items-center gap-x-2">
              <input
                placeholder="password"
                type={showPassword ? "text" : "password"}
                className="rounded-none p-2 m-2 bg-transparent border-b-2 "
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex flex-row self-start ms-3  gap-3 items-center">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />{" "}
                <span> visibility</span>
              </div>
            </div>
            <Button className="w-fit self-start mx-3 ">Login</Button>
            {err && <span>Something went wrong</span>}
          </div>
        </form>
        <p className="">
          Don't have an account?{" "}
          <Link
            href={"./register"}
            target=""
            className=" text-blue-400 hover:text-blue-700 "
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
