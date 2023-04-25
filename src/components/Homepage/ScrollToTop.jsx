import { useState, useEffect } from "react";
import "./ScrollToTop.css";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const style = { opacity: isVisible ? 1 : 0 };

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(typeof style);

  return (
    <section className="scroll-button">
      <button type="button" onClick={handleScrollToTop} style={style}>
        ↑
      </button>
    </section>
  );
};
