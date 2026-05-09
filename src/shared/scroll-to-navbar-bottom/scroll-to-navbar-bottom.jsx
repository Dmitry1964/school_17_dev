import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToNavbarBottom = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const navbar = document.querySelector("nav.navbar");
    if (!navbar) {
      return;
    }

    const targetScrollTop = navbar.offsetTop + navbar.offsetHeight;

    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToNavbarBottom;
