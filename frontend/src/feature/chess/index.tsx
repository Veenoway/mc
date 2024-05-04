import { ExtraLargeFont } from "@/components/font";
import { ethers } from "ethers";
import { chessABI } from "./abi";

export const Chess = () => {
  const providerURL = process.env.NEXT_PUBLIC_ALCHEMY_URL as string;
  const provider = new ethers.providers.JsonRpcProvider(providerURL);
  const contractAddress = "0xeb63214a19AAbE42941695c7c15a495898F398fC";
  const signer = ethers.Wallet.createRandom();
  signer.connect(provider);
  const contract = new ethers.Contract(contractAddress, chessABI, provider);

  const testFetch = async () => {
    console.log("I start");
    try {
      const tx = await contract.initBoard();
      console.log("test", tx);
    } catch (e) {
      console.log(e);
    }
  };

  testFetch();

  return (
    <div className="">
      <ExtraLargeFont>chess</ExtraLargeFont>
    </div>
  );
};
