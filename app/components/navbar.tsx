import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { buttonVariants } from "./ui/button";

export type Navlink = {
  text: string;
  href: string;
};

const navbar = () => {
  const navlinks: Navlink[] = [
    { text: "About", href: "/#about" },
    { text: "Skills", href: "/#skills" },
    { text: "Experience", href: "/#experience" },
    { text: "Portfolio", href: "/#portfolio" },
  ];
  return (
    <nav id="home" className="px-5 pt-5 dark:bg-slate-950">
      <div className="flex max-w-7xl mx-auto justify-between items-center">
        <Link href="/" className="text-3xl font-normal">
          CG
        </Link>
        <div className="hidden md:flex justify-end gap-8 text-xz">
          {navlinks.map((link) => (
            <Link key={link.text} className="transition" href={link.href}>
              {link.text}
            </Link>
          ))}
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

export default navbar;
