import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Index = ({ children }) => {
  return (
    <>
      <Head>
        <title>NFT</title>
      </Head>
      <div className="font-custom p-20m h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Index;
