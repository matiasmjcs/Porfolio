import React, { createContext, useContext } from "react";
import Wagmi from "@/wagmi/Wagmi";

interface ThemeContextProps {
  numero: number;
}

export const ThemeContext = createContext<ThemeContextProps>({
  numero: 5,
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Provider = ({ children }: Props) => {
  const numero = 5;

  return (
    <ThemeContext.Provider value={{ numero }}>
      <Wagmi>{children}</Wagmi>
    </ThemeContext.Provider>
  );
};

export default Provider;
