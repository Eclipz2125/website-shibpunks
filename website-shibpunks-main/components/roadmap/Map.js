import React from "react";

const Map = () => {
  return (
    <div className="container bg-none mx-auto w-full h-full">
      <h3 className="font-bold my-8 text-center text-yellow-500 text-5xl textglow">
        Roadmap
      </h3>
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 mb-8 pb-4 text-yellow-500">
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-black Opacity 85 col-start-2 col-end-5 p-4 rounded-3xl my-8 ml-auto shadow-lg">
            <h3 className="font-semibold text-xl mb-1">Phase 1</h3>
            <p className="leading-tight text-justify text-lg">
              10,000 mint of exclusive NFTs on the Binance Smart Chain
              network (BSC)
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-black Opacity 85 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow"></div>
          </div>
        </div>
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-black pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black Opacity 85 shadow"></div>
          </div>
          <div className="bg-black Opacity 85 col-start-6 col-end-9 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-xl mb-1">Phase 2</h3>
            <p className="leading-tight text-justify text-lg">
              10,000 mint of limited edition NFTs on the Solana
              network
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-black Opacity 85 col-start-2 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-xl mb-1">Phase 3</h3>
            <p className="leading-tight text-justify text-lg">
              Launch of NFTs merch shop with limited edition NFT art
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-black Opacity 85 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black Opacity 85 shadow"></div>
          </div>
        </div>
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-black pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black opacity 85 shadow"></div>
          </div>
          <div className="bg-black Opacity 85 col-start-6 col-end-9 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-xl mb-1">Phase 4</h3>
            <p className="leading-tight text-justify text-lg">
              Integration of NFT holdings with access to limited edition merch
              drops and merch discounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
