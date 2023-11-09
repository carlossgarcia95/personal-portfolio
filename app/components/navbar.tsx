import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type Navlink = {
  text: string;
  href: string;
};

const navbar = () => {
  const navLinks: Navlink[] = [
    { text: "Home", href: "/#home" },
    { text: "About", href: "/#about" },
    { text: "Projects", href: "/#projects" },
    { text: "Experience", href: "/#experience" },
  ];
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <div className="flex justify-between items-center">
        <Link href="/">Carlos Garcia</Link>
        <div className="flex justify-end gap-8">
          {navLinks.map((link) => (
            <Link href={link.href}>{link.text}</Link>
          ))}
        </div>
        <Button>Contact Me</Button>
      </div>
    </nav>
  );
};

export default navbar;
