import "./scrollToTopButton.css";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();
  return (
    <button
      onClick={scrollToTop}
      className={`${isVisible && "visible"} scroll-to-top-button`}
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
