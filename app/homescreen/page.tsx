import Link from "next/link";
import React from "react";
import Header from "./header";
import Image from "next/image";
import logo from "@/assets/Nexus.png";
import { ArrowRight } from "lucide-react";

function HomeScreen() {
  return (
    <div >
      <Header />
      <div className=" flex flex-col font-mono p-5 items-center ">
        <div className="flex  dark:bg-slate-900 justify-between items-center  rounded-lg max-w-screen-2xl bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
          <div className="p-10 max-w-5xl flex flex-col   text-slate-300 space-y-4">
            <div className="text-5xl  font-extrabold">
              Welcome to <b>NEXUS!</b>
              <br /> Where Privacy Meets Connection. <br />
              <br />
            </div>

            <div className="max-w-7xl text-xl">
              Nexus is not just another chat app; it's a sanctuary for your
              conversations, ensuring your privacy is our top priority. Connect
              with friends seamlessly and securely as you explore the realms of
              real-time messaging, making every moment count.
            </div>
            <Link
              href={"/commingsoon"}
              target="_blank"
              className="flex p-5 w-fit rounded-lg bg-sky-600 hover:bg-sky-700"
            >
              Get chatting Now!
              <ArrowRight className="ml-3" />
            </Link>
          </div>
          <Image src={logo} alt="" height={500} width={500} />
        </div>
        <br />
        <br />
        <div className="max-w-screen-2xl  text-lg">
          <b className="text-3xl ">Why Nexus?</b> <br /><br/>
          <div className="ms-5 text-lg space-y-2 font-sans">
            <p>
            🔒 <b>Your Privacy Matters:</b> Nexus ensures your messages are yours and yours alone. While we skip the encryption jargon, rest assured that
            your conversations are handled with utmost care, respecting your
            need for privacy. </p>
            <p>
            🌐 <b>Seamless Connection: </b>Experience real-time, text-only messaging
            that effortlessly connects you with friends. No distractions, just
            pure communication wherever your friends may be.</p> 
            <p>🌟 <b>Focused Simplicity:</b> Nexus strips away the complexities. It's all
            about text, allowing you to express yourself without any unnecessary
            features. Keep it simple, keep it genuine.</p>
            
            <p>💬 <b>Express Yourself, Textually:</b> In a world of emojis and multimedia,
            Nexus champions the power of words. Share thoughts, make plans, and
            create memories, all through the simplicity of text.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
