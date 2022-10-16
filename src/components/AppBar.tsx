import Link from "next/link";
import * as React from "react";

import Logo from "src/assets/logo.svg";
import * as styles from "./AppBar.css";
import Button from "./Button";

type Props = {
  onRightButtonClick?: () => void;
};

function AppBar({ onRightButtonClick }: Props) {
  return (
    <header className={styles.header}>
      <Link href="#">
        <span>
          <Logo />
        </span>
      </Link>
      <Button type="button" onClick={onRightButtonClick}>
        얼리 엑세스 신청하기
      </Button>
    </header>
  );
}

export default AppBar;
