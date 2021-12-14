import { useState, useEffect, useCallback } from "react";
import { throttle } from "../utils";

const useHeaderStyle = ({ sideMenu, top, sizeThreshold } = {}) => {
  const [isTop, setIsTop] = useState(top);
  const [showSide, setShowSide] = useState(sideMenu);

  const handleScroll = useCallback(
    throttle(() => {
      const topScroll = window.scrollY < 100;
      if (topScroll !== isTop) {
        console.log(topScroll);
        setIsTop(topScroll);
      }
    }),
    [isTop],
  );

  const handleResize = useCallback(
    throttle(() => {
      if (window.innerWidth > sizeThreshold && showSide) {
        setShowSide((prevState) => !prevState);
      }
    }),
    [showSide],
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (showSide) {
      document.querySelector("#__next").className = "blur";
    } else {
      document.querySelector("#__next").className = "";
    }
  }, [showSide]);

  return { isTop, showSide, setShowSide };
};

export default useHeaderStyle;
