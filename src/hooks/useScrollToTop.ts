import { useEffect, useState } from "react";

export const useScrollToTop = (offset: number = 400) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > offset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return { isVisible, scrollToTop };
};
