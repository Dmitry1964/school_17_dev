import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const ScrollBottom = () => {

  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [pathname])
  return null
}

export default ScrollBottom
