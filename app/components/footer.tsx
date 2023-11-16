import React from "react";

const Footer = () => {
  return (
    <footer className="px-5 pb-5 pt-2 text-center">
      <small className="mb-2 block text-xs">
        &copy; 2023 Carlos Garcia. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Designed and
        developed by Carlos Garcia. Built with React & Next.js, TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
