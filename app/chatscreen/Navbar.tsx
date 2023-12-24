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
      <Link href={"/"}>
        <Image src={logo} alt="" height={50} />{" "}
      </Link>

      <Button className="bg-transparent" onClick={()=>signOut(auth)}>
        <IoIosLogOut color="white" size={35} />
      </Button>
      <ModeToggle />
    </div>
  );
}

export default Navbar;
