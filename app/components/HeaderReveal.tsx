"use client";
import { useEffect, useState } from "react";
function HeaderReveal({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);
  return (
    <div
      className={`fixed top-0 left-0 w-full  transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } z-50`}
    >
      {children}
    </div>
  );
}

export default HeaderReveal;
