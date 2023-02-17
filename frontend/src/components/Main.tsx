import { usePrepareContractWrite, useContractWrite } from "wagmi";
import abiContract from "../utils/Porfolio.json";
import { readContract } from "@wagmi/core";

const Main = () => {
  const contractAddress: any = process.env.NEXT_PUBLIC_CONTRACT;
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abiContract.abi,
    functionName: "sendMesaje",
    args: ["solana"],
  });

  const viewMesaje = async () => {
    const data = await readContract({
      address: contractAddress,
      abi: abiContract.abi,
      functionName: "viewMesaje",
      args: [18],
    });

    console.log(data);
  };

  const { write: sendMesaje } = useContractWrite(config);
  return (
    <main>
      <button onClick={() => sendMesaje?.()}>send Mesaje</button>
      <button onClick={viewMesaje}>view Mesaje</button>
    </main>
  );
};
export default Main;
