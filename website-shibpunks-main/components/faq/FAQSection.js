import React from 'react'

const FAQSection = () => {
  return (
    <div className="max-w-6xl mx-auto my-20">
      <div className="container px-4 mx-auto">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-yellow-500 textglow-dark">Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 text-yellow-400 text-center pt-4 bg-black opacity-85 rounded-3xl">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 mb-12  ">
            <h4 className="mb-2 md:mb-4 text-3xl font-semibold">How many NFT are minted?</h4>
            <p className="text-2xl leading-loose">10,000 Unique Collectible Characters with a proof of ownership stored on the blockchain.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 mb-12">
            <h4 className="mb-2 md:mb-4 text-3xl font-semibold">What Network will NFT be minted on?</h4>
            <p className="text-2xl leading-loose">NFT will initially be minted on the Binance Smart Chain (BSC). We will have limited edition drops on the Solana network as well.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 mb-12">
            <h4 className="mb-2 md:mb-4 text-3xl font-semibold">When is the launch date?</h4>
            <p className="text-2xl leading-loose">We plan to launch on November 25th, 2021</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 mb-12">
            <h4 className="mb-2 md:mb-4 text-3xl font-semibold">Are all NFTs worth the same?</h4>
            <p className="text-2xl leading-loose">
              Different punks hold a different value and vary based on their rarity. Rarity is randomized on every mint.
              <br />
              NFTs have become very popular investments within the cryptocurrency space. And the popularity of NFTs will only continue to grow, therefore making NFTs more valuable as time goes on.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 mb-12">
            <h4 className="mb-2 md:mb-4 text-3xl font-semibold">What utility does NFT provide?</h4>
            <p className="text-2xl leading-loose">NFT designs will be translated onto various customizable cannabis products. We will be launching the NFT merch shop soon! Holding NFTs will allow you to access limited edition merch at the shop.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 mb-12">
            <h4 className="mb-2 md:mb-4 text-3xl font-semibold">Will there be more NFT collections after the first mint?</h4>
            <p className="text-2xl leading-loose">Yes, we will continue to launch limited edition art for your NFT collection. Each drop will be unique to that collection.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
