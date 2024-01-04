"use client";

// components/ScrollToTopButton.js
import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showButtonThreshold = 1325; // Adjust this threshold as needed

      // Update the visibility state based on scroll position
      setIsVisible(scrollY > showButtonThreshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll smoothly to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed right-5 bottom-5 bg-orange-500 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-[1.15] active:scale-105 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <HiArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
