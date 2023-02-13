"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/Provider";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  const {} = useContext(ThemeContext);

  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}
