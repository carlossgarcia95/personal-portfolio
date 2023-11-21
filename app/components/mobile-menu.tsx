"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Navlink } from "./navbar";
import ThemeSwitch from "./theme-switch";

const MobileMenu = ({ navlinks }: { navlinks: Navlink[] }) => {
  return (
    <div className="flex md:hidden items-center gap-4">
      <ThemeSwitch />
      <Sheet>
        <SheetTrigger asChild>
          <RxHamburgerMenu size={30} className="hover:cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-7 mt-8 items-end">
            {navlinks.map((link) => (
              <SheetClose key={link.text} asChild>
                <Link href={link.href} className="navlink">
                  {link.text}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
