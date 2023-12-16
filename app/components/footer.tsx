import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ThemeSwitch from "./theme-switch";

const Footer = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <footer className="p-5 space-y-4 md:pt-0 text-center border-t border-slate-300 dark:border-slate-600 mx-auto max-w-7xl w-11/12">
        <div className="flex self-center justify-center md:hidden">
          <ThemeSwitch />
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link href="https://linkedin.com/in/carlossgarcia95" target="_blank">
            <AiFillLinkedin size={34} className="hover:cursor-pointer" />
          </Link>
          <Link href="https://github.com/carlossgarcia95" target="_blank">
            <AiFillGithub size={34} className="hover:cursor-pointer" />
          </Link>
        </div>
        <p className="text-xs space-y-2">
          &copy; 2023 Carlos Garcia. All rights reserved.
        </p>
        <p className="text-xs">
          <span className="font-semibold">About website:</span> Designed and
          developed by Carlos Garcia.
        </p>
      </footer>
    </section>
  );
};

export default Footer;
