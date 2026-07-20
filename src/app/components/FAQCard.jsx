import { ChevronDown, ChevronUp } from "@deemlol/next-icons";
import { useState } from "react";

export default function FAQCard({question = '', answer = ''}) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`w-full px-4 py-4 rounded-lg shadow-md bg-magnolia-50 transition-height duration-300 ease-in-out ${open ? "h-22": "h-14"}`}>
          <div onClick={() => setOpen(!open)} tabIndex={1} className="w-full flex justify-between items-center cursor-pointer">
            <p className="font-light">{question}</p>
           {open ? <ChevronUp/> : <ChevronDown />}
          </div>
         {open && <div className={`mt-2 ${open ? "opacity-100": "opacity-0"} transition-opacity delay-300 duration-300 ease-in-out`}>
            <p className={``}>{answer}</p>
          </div>}
        </div>
    );
}