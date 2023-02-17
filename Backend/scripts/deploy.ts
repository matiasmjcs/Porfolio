import { ethers } from "hardhat";

async function main() {
  const Porfolio = await ethers.getContractFactory("Porfolio");
  const porfolio = await Porfolio.deploy();

  await porfolio.deployed();

  console.log(`deployed to ${porfolio.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
