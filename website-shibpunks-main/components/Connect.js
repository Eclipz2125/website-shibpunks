import { useCallback } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import Web3 from "web3";
import { useWeb3 } from "../services/web3";

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        56: "https://bsc-dataseed.binance.org/",
      },
    },
  },
  metamask: {
    id: "injected",
    name: "MetaMask",
    type: "injected",
    check: "isMetaMask",
  },
};

function Connect() {
  const {
    connected,
    setConnected,
    account,
    setAccount,
    setProvider,
    setWeb3,
    chainId,
    setChainId,
    setError,
    reset,
    disconnect,
  } = useWeb3();

  const modal = new Web3Modal({
    network: "binance",
    providerOptions,
    theme: {
      background: "#101022",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "#14142B",
      hover: "#14142B",
    },
  });

  const connectProvider = useCallback(
    (provider) => {
      console.log("[Web3] setting up provider");
      const web3 = new Web3(provider);
      Promise.all([
        web3.eth.net.getId().then((net) => setChainId(net.chainId)),
        web3.eth.getAccounts().then(([account]) => setAccount(account)),
      ]).then(() => setWeb3(web3));
    },
    [setWeb3, setChainId, setAccount]
  );

  const connect = useCallback(() => {
    modal
      .connect()
      .then((provider) => {
        provider.on("accountsChanged", ([account]) => {
          console.log("[Web3] accountsChanged");
          setAccount(account);
          connectProvider(provider);
        });

        provider.on("chainChanged", (chainId) => {
          console.log("[Web3] chainChanged");
          setChainId(parseInt(chainId, 16));
          connectProvider(provider);
        });

        provider.on("connect", ({ chainId }) => {
          console.log("[Web3] connect");
          setConnected(true);
          setChainId(chainId);
          setError(undefined);
          connectProvider(provider);
        });

        provider.on("disconnect", (error) => {
          console.log("[Web3] disconnect");
          setConnected(false);
          setAccount();
          reset(error);
          console.log(error);
        });

        setProvider(provider);
        setConnected(true);
        connectProvider(provider);
      })
      .catch((error) => console.error(error));
  });

  const deactivate = useCallback(() => {
    disconnect();
    reset();
  }, [disconnect, reset]);

  if (connected) {
    return (
      <div
        onClick={deactivate}
        className="inline-block border-2 text-2xl border-red-600 rounded-lg px-3 py-2 bg-red-600 text-white cursor-pointer hover:bg-red-800 hover:text-white mx-2"
      >
        Disconnect Wallet
      </div>
    );
  }

  return (
    <div
      onClick={connect}
      className="inline-block border-2 text-2xl border-red-600 rounded-lg px-3 py-2 text-white bg-red-600 cursor-pointer hover:bg-red-800 hover:text-white mx-2"
    >
      Connect Wallet
    </div>
  );
}

export default Connect;
