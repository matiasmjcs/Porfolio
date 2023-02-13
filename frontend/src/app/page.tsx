"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContext } from "react";
import { ThemeContext } from "../context/Provider";

export default function Home() {
  const { numero } = useContext(ThemeContext);

  return (
    <main>
      <ConnectButton
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
      />

      {numero}
    </main>
  );
}
