import Link from "next/link";
import * as React from "react";

import Button from "./Button";
import useWindowSrollYPosition from "src/hooks/useWindowScrollYPosition";

import * as styles from "./AppBar.css";

import Logo from "src/assets/logo.svg";

function AppBar() {
  const scrollYPosition = useWindowSrollYPosition();

  return (
    <header className={styles.header({ scroll: scrollYPosition > 0 })}>
      <div className={styles.wrapper}>
        <Link href="#">
          <span>
            <Logo />
          </span>
        </Link>
        <Button type="button">Get Early Access</Button>
      </div>
    </header>
  );
}

export default AppBar;
