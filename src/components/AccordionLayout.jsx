import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function AccordionLayout({ answer, question }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full rounded-lg transition-all duration-700 ease-in-out">
      <div
        className={`flex justify-between items-center cursor-pointer ${
          open ? "" : "border-t-2"
        }`}
        onClick={() => setOpen(!open)}
      >
        <p className="px-2 py-2">{question}</p>
        <FaChevronDown
          className={`mx-2 ${
            open ? "rotate-180 hover:rotate-360" : "hover:rotate-180"
          } transition-all duration-700 ease-in-out`}
        />
      </div>
      <div
        className={`w-full transition-all duration-700 ease-in-out ${
          open ? "border-t-2 border-dark/20 py-6" : "h-0"
        }`}
      >
        <p className={`${open ? "visible" : "hidden"} text-sm mx-2 text-zinc-600`}>
          {answer}
        </p>
      </div>
    </div>
  );
}
