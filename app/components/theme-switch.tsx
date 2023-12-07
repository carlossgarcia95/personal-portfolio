"use client";

import { useTheme } from "../context/theme-context";
import React from "react";
import { IoSunnyOutline,  IoMoonOutline} from "react-icons/io5";



export default function ThemeSwitch({ className }: any) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={`flex items-center justify-center z-50 ${className}`} onClick={toggleTheme}>
      {theme === "light" ? (
        <IoSunnyOutline size={28} />
      ) : (
        <IoMoonOutline size={28} className="font-bold" />
      )}
    </button>
  );
}
