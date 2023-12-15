"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/theme-context";
import MobileMenu from "./mobile-menu";
import { buttonVariants } from "./ui/button";
import { titillium_web } from "./ui/fonts";

export type Navlink = {
  text: string;
  href: string;
};

const Navbar = () => {
  const navlinks: Navlink[] = [
    { text: "About", href: "/#about" },
    { text: "Portfolio", href: "/#portfolio" },
    { text: "Skills", href: "/#skills" },
    { text: "Experience", href: "/#experience" },
    { text: "Contact", href: "/#contact" },
  ];

  const { theme } = useTheme();

  return (
    <nav
      id="home"
      className={`px-5 pt-5 ${
        theme === "light"
          ? "bg-slate-50 md:bg-gradient-to-r from-slate-50 via-teal-400/10 to-teal-400/50"
          : "bg-slate-950 md:bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950"
      }`}
    >
      <div className="flex max-w-7xl mx-auto justify-between items-center">
        <Link href="/" className="flex items-center gap-2 ">
          <Image
            quality={100}
            src="/logo.png"
            alt="Carlos Garcia logo"
            width={35}
            height={35}
          />
          <span
            className={`${titillium_web.className} hidden md:block text-xl font-semibold`}
          >
            Carlos Garcia
          </span>
        </Link>

        <div className="hidden md:flex justify-end gap-8 text-xz">
          {navlinks.map(
            (link) =>
              link.text !== "Contact" && (
                <Link key={link.text} className="navlink" href={link.href}>
                  {link.text}
                </Link>
              )
          )}
        </div>
        <div className="flex items-center">
          <Link
            href="/#contact"
            className={buttonVariants({
              variant: "default",
              className: "hidden md:flex",
            })}
          >
            Contact Me
          </Link>
          <MobileMenu navlinks={navlinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
