import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { IoIosLogOut } from "react-icons/io";
import { ModeToggle } from "../components/ThemeToggler";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

function Navbar() {
  return (
    <div className="flex flex-col place-items-center my-auto gap-5">
      
      <Link href={"/"} className="hover:bg-black hover:bg-opacity-20 rounded-lg">
        <Image src={logo} alt="" height={50} />{" "}
      </Link>

      <Button className="bg-transparent hover:bg-black hover:bg-opacity-20" onClick={()=>signOut(auth)}>
        <IoIosLogOut filter="invert(1)" size={35} />
      </Button>
      <ModeToggle  />
    </div>
  );
}

export default Navbar;
