import { Button } from "@/components/ui/button";
import React from "react";
import { FiSend } from "react-icons/fi";

function Input() {
  return (
    <div className="flex flex-row">
      <input placeholder="Enter a message..." className="p-3 rounded-lg bg-slate-600" />
      <Button className=" border-0 bg-transparent hover:bg-slate-950 "><FiSend color='white' size='25'/>
</Button>
    </div>
  );
}

export default Input;
