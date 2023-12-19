import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Header from "./header";

function HomeScreen() {
  return (
    <body>
        <Header/>
    <main>
      <div className=" font-mono">
        <div className="p-10 flex flex-col  mx-auto dark:bg-slate-800 bg-black text-slate-300 space-y-4">
          <div className="text-5xl mx-auto font-extrabold">Welcome to <b>NEXUS!</b>-Where Privacy Meets Connection. <br /></div>
            
            <div className="max-w-7xl mx-auto">
            Nexus is not just another chat app; it's a sanctuary for your
            conversations, ensuring your privacy is our top priority. Connect
            with friends seamlessly and securely as you explore the realms of
            real-time messaging, making every moment count.
            </div>
            <Link href={'/chatscreen'} target="_blank">Get chatting now!</Link>
          <h3>
            Why Nexus? <br/>🔒 Your Privacy Matters: Nexus ensures your messages are
            yours and yours alone. While we skip the encryption jargon, rest
            assured that your conversations are handled with utmost care,
            respecting your need for privacy. <br/>🌐 Seamless Connection: Experience
            real-time, text-only messaging that effortlessly connects you with
            friends. No distractions, just pure communication wherever your
            friends may be. <br/>🌟 Focused Simplicity: Nexus strips away the
            complexities. It's all about text, allowing you to express yourself
            without any unnecessary features. Keep it simple, keep it genuine.<br/>
            💬 Express Yourself, Textually: In a world of emojis and multimedia,
            Nexus champions the power of words. Share thoughts, make plans, and
            create memories, all through the simplicity of text.
          </h3>
        </div>
      </div>
    </main>
    </body>
  );
}

export default HomeScreen;
