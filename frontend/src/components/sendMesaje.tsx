import React, { useState } from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import abiContract from "../utils/Porfolio.json";

const SendMesaje = (): JSX.Element => {
  const contractAddress: any = process.env.NEXT_PUBLIC_CONTRACT;

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abiContract.abi,
    functionName: "sendMesaje",
    args: [inputValue],
  });
  const { write: sendMesaje } = useContractWrite(config);

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMesaje?.();
  };

  return (
    <section className="sendMesaje">
      <h2 className="sendMesaje__h1">
        Send me a message with your Favorite Wallet
      </h2>
      <form className="sendMesaje__form" onSubmit={send}>
        <textarea
          className="sendMesaje__textarea"
          name="textarea"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="sendMesaje__button"
          value={"send Mesaje"}
        />
      </form>
    </section>
  );
};

export default SendMesaje;
