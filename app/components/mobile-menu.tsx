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
import { Button } from "./ui/button";

const MobileMenu = ({ navlinks }: { navlinks: Navlink[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu
          size={30}
          className="block hover:cursor-pointer md:hidden "
        />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-6 mt-8 items-end">
          {navlinks.map((link) => (
            <SheetClose asChild>
              <Link href={link.href}>{link.text}</Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
