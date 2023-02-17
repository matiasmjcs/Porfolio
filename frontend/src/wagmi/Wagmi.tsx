"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  metaMaskWallet,
  walletConnectWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  polygonMumbai,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
const API: any = process.env.NEXT_PUBLIC_ALCHEMY_ID;

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, polygonMumbai],
  [alchemyProvider({ apiKey: API }), publicProvider()]
);
const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      coinbaseWallet({ appName: "Porfolio", chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

interface Props {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Wagmi = ({ children }: Props) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme()} chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Wagmi;
