import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Nav = (): JSX.Element => {
  return (
    <nav className="nav">
      <div className="nav__divLink">
        <Link href={"/"} className="text1 link">
          Home
        </Link>
        <Link href={"/recurses"} className="text1 link">
          Recurses
        </Link>
      </div>
      <div className="nav__divButton">
        <ConnectButton
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
