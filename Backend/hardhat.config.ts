import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const ALCHEMY_URL = process.env.ALCHEMY_URL;
const PRIVATE_KEY: any = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    testnet: {
      url: ALCHEMY_URL,
      chainId: 80001,
      gasPrice: 20000000000,
      accounts: [PRIVATE_KEY],
    },
  },
};

module.exports = config;
