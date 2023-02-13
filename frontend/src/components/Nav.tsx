import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Nav = (): JSX.Element => {
  return (
    <nav>
      <ConnectButton
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
      />
    </nav>
  );
};

export default Nav;
