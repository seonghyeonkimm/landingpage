import * as React from "react";
import throttle from "src/utils/throttle";

export default function useWindowSrollYPosition() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}
