import type { Metadata } from "next";
import { Toaster } from "sonner";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollToTopButton from "./components/scroll-to-top-button";
import ThemeSwitch from "./components/theme-switch";
import { inter } from "./components/ui/fonts";
import ThemeContextProvider from "./context/theme-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos Garcia Portfolio",
  description:
    "Carlos' Garcia professional portfolio. Includes project management and full-stack development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <GoogleAnalyticsScript />
      <body
        className={`${inter.className} antialiased bg-slate-50 text-slate-900 font-medium dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <Navbar />
          <main className="mx-auto">{children}</main>
          <ScrollToTopButton />
          <ThemeSwitch className="hidden md:flex fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950" />
          <Toaster richColors />
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
