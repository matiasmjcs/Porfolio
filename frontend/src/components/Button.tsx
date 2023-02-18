import React from "react";

interface Props {
  text: string;
  funcion: () => void;
}

const Button = ({ text, funcion }: Props) => {
  return (
    <button className="button" onClick={funcion}>
      {text}
    </button>
  );
};

export default Button;
