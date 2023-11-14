import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { Button } from "./ui/button";

type Navlink = {
  text: string;
  href: string;
};

const navbar = () => {
  const navLinks: Navlink[] = [
    { text: "Home", href: "/#home" },
    { text: "About", href: "/#about" },
    { text: "Skills", href: "/#skills" },
    { text: "Portfolio", href: "/#portfolio" },
    { text: "Education", href: "/#education" },
  ];
  return (
    <nav className="sticky border-b px-5 py-3">
      <div className="flex max-w-7xl mx-auto justify-between items-center">
        <Link href="/" className="text-3xl font-normal">
          CG
        </Link>
        <div className="hidden md:flex justify-end gap-8 text-xz">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              className="transition"
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button size={"sm"}>Contact Me</Button>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default navbar;
