import Link from "next/link";
import * as React from "react";

import Logo from "src/assets/logo.svg";
import * as styles from "./AppBar.css";
import Button from "./Button";

function AppBar() {
  return (
    <header className={styles.header}>
      <Link href="#">
        <span>
          <Logo />
        </span>
      </Link>
      <Button type="button">Get Early Access</Button>
    </header>
  );
}

export default AppBar;
