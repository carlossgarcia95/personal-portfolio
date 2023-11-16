import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { buttonVariants } from "./ui/button";

export type Navlink = {
  text: string;
  href: string;
};

const navbar = () => {
  const navlinks: Navlink[] = [
    { text: "Home", href: "/#home" },
    { text: "About", href: "/#about" },
    { text: "Skills", href: "/#skills" },
    { text: "Experience", href: "/#experience" },
    { text: "Portfolio", href: "/#portfolio" },
  ];
  return (
    <nav id="home" className="bg-teal-50/60 px-5 py-3">
      <div className="flex max-w-7xl mx-auto justify-between items-center">
        <Link href="/" className="text-3xl font-normal text-teal-600">
          CG
        </Link>
        <div className="hidden md:flex justify-end gap-8 text-xz">
          {navlinks.map((link) => (
            <Link key={link.text} className="transition" href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className={buttonVariants({ variant: "default" })}
          >
            Contact Me
          </Link>
          <MobileMenu navlinks={navlinks}/>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
