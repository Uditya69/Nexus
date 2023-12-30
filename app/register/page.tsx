"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "@/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

function register() {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //@ts-ignore
  const handlesubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[4].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              //@ts-ignore
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            router.replace("/chatscreen");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900  ">
      <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 p-5 w-4/5 h-4/5 rounded-xl space-x-5 flex flex-col items-center justify-around">
       <Link href={"/"}> 
        <div className="flex flex-row self-start items-center font-mono text-4xl">
          <Image src={logo} alt="" height={100} /> <p>NEXUS</p>{" "}
        </div>
        </Link>

        <p className="text-4xl font-semibold font-sans">Hey There!</p>
        <p className="text-lg  mt-10">
          Ready to chat? Let's begin by creating your account.
        </p>

        <div className="flex flex-col w-fit  items-center p-3">
          <form className="grid space-y-3" onSubmit={handlesubmit}>
            <input
              placeholder="Username"
              required
              className="rounded-xl p-2 ps-5 m-2"
            />
            <input
              placeholder="Email-ID"
              required
              className="rounded-xl p-2 ps-5 m-2"
            />
            <div className=" flex flex-row items-center gap-x-2">
              <input
                placeholder="password"
                type={showPassword ? "text" : "password"}
                className="rounded-xl p-2 m-2"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />{" "}
              visibility
            </div>

            <div className="w-fit mt-2 items-center gap-1">
              <Label htmlFor="picture">Profile Picture</Label>
              <Input id="picture" required type="file" />
            </div>
            <div>
              <Button className="w-fit self-start mx-3">Register</Button>
              <span className="text-xs">
                (Registration implies{" "}
                <Link
                  href={"/privacypolicy"}
                  className="underline cursor-pointer text-blue-400 hover:text-blue-700"
                >
                  privacy policy
                </Link>{" "}
                consent.)
              </span>
              </div>
          </form>
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
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setErr(arg0: boolean) {
  throw new Error("Function not implemented.");
}
