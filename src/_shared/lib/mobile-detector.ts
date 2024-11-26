import { useEffect, useState } from "react";

export const MOBILE_SIZE = 960;

export const useMobileDetector = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = () => {
    return width <= MOBILE_SIZE;
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return { isMobile };
};
