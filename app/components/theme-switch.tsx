"use client";

import { useTheme } from "../context/theme-context";
import React from "react";
import { IoSunnyOutline,  IoMoonOutline} from "react-icons/io5";



export default function ThemeSwitch({ className }: any) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={`flex items-center justify-center ${className}`} onClick={toggleTheme}>
      {theme === "light" ? (
        <IoSunnyOutline size={28} />
      ) : (
        <IoMoonOutline size={28} className="font-bold" />
      )}
    </button>
  );
}

// {
//   <button
// className="hidden fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full md:flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
// onClick={toggleTheme}
// >
// {theme === "light" ? <BsSun /> : <BsMoon />}
// </button>
// }
