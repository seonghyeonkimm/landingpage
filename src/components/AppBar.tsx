import Link from "next/link";
import * as React from "react";

import Logo from "src/assets/logo.svg";

type Props = {
  logo?: string;
};

function AppBar({ logo }: Props) {
  return (
    <header>
      <Link href="#">
        <Logo />
      </Link>
      <button>Get Early Access</button>
    </header>
  );
}

export default AppBar;
