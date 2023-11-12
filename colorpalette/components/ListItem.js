import { useState } from "react";
import { BiSolidCopy } from "react-icons/bi";

export const ListItem = ({ hex, rgb }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e) => {
    const color = hex;
    //console.log("Color to copy:", color);
    navigator.clipboard.writeText(color);
  };
  //console.log("Hex value:", hex);
  return (
    <li
      className=" list-none w-36 h-36 rounded-xl m-2 transition-transform transform hover:scale-103 hover:-translate-y-1 hover:ease-in-out duration-300"
      style={{ background: rgb }}
    >
      <span
        className=" flex items-center justify-between cursor-pointer border-b font-medium  text-gray-800 bg-slate-400 bg-opacity-20 p-[6px]"
        onClick={(e) => {
          copyToClipboard(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        {copied ? "copied!" : hex}
        <BiSolidCopy />
      </span>
    </li>
  );
};
