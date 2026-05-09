import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToNavbarBottom = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) {
      return;
    }

    const targetScrollTop = navbar.offsetTop;
    console.log("targetScrollTop:", targetScrollTop);

    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToNavbarBottom;
