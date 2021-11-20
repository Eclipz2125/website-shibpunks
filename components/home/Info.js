import config from '../config'

const Info = () => {
  return (
    <div className="container justify-center flex flex-col mx-auto max-w-6xl">
      <h3 className="font-bold my-4 text-center text-wrap text-3xl bg-white rounded-3xl text-black p-4">
        <a className="cursor-pointer break-all" href={`https://bscscan.com/token/${config.address}`} target="_blank" rel="noreferrer">
          Contract: {config.address}
        </a>
      </h3>
      <h3 className="font-black my-10 text-center text-white text-6xl drop-shadow-xl textglow-dark">What makes NFTs so unique?</h3>
      <div className="text-black text-3xl px-10 text-center mx-auto mb-12 bg-white rounded-3xl py-4">
        <p className="my-2">NFTs are minted randomly, which means everyone has an equal opportunity to mint NFTs that are of higher value and rare.</p>
        <p className="my-2">The rarity of the NFT will remain a mystery until your purchase is completed.</p>
        <p className="my-2">The NFTs obtained are visible on our interface and will be exchangeable on other NFT marketplaces that cater to the Binance Smart Chain/Solana networks.</p>
        <p className="my-2">You can mint as many NFTs as you like. But once all 10,000 of our premier collection are minted, it will be too late to access the minting cost of 0.20 BNB. After minting, your NFTs will trade at a higher value/price.</p>
      </div>
      {/* <img src="imgs/tile.png" className="mx-auto" width="1000" alt="PunkTile" /> */}
    </div>
  )
}

export default Info
