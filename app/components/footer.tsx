import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="bg-slate-200">
      <footer className="p-5 text-center space-y-2 border-t border-slate-300 mx-auto max-w-7xl w-10/12">
        <div className="flex justify-center items-center gap-2">
          <Link href="https://linkedin.com/in/carlossgarcia95" target="_blank">
            <AiFillLinkedin size={30} className="hover:cursor-pointer" />
          </Link>
          <Link href="https://github.com/carlossgarcia95" target="_blank">
            <AiFillGithub size={30} className="hover:cursor-pointer" />
          </Link>
        </div>
        <small className="text-xs space-y-2">
          &copy; 2023 Carlos Garcia. All rights reserved.
        </small>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> Designed
          and developed by Carlos Garcia.
        </p>
      </footer>
    </section>
  );
};

export default Footer;
