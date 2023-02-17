"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/Provider";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/global.css";

export default function Home() {
  const {} = useContext(ThemeContext);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
