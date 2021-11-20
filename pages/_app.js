import "tailwindcss/tailwind.css";
import "../styles/main.css";
import Web3ContextProvider from "../services/web3";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Web3ContextProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </Web3ContextProvider>
  );
}

export default MyApp;
