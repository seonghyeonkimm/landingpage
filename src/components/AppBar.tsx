import * as React from "react";
import Link from "next/link";

import useWindowSrollYPosition from "src/hooks/useWindowScrollYPosition";

import Button from "./Button";

import Logo from "src/assets/logo.svg";

import * as styles from "./AppBar.css";

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
