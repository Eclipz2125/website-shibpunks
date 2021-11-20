import React, { useState, useEffect } from 'react'
import Mint from './Mint'
import Web3 from 'web3'
import Progress from 'react-progressbar'
import numeral from 'numeral'
import config from '../config'

const MintModal = ({ forceReload, setForceReload }) => {
  const [NFTMintNumber, setNFTMintNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const [dataFetch, setDataFetch] = useState({
    price: { wei: 0, bnb: 0 },
    currentSupply: 0,
    maxSupply: 10000,
    maxMultipleMint: 420,
  })

  const abi = require('../../services/abi.json')
  const web3 = new Web3(new Web3.providers.HttpProvider(config.provider))
  const contractWeb3 = new web3.eth.Contract(abi, config.address)

  async function getData() {
    setIsLoading(true)

    const price = await contractWeb3.methods
      .price()
      .call()
      .then(data => data)

    const currentSupply = await contractWeb3.methods
      .totalSupply()
      .call()
      .then(data => data)

    const maxMultipleMint = await contractWeb3.methods
      .maxMultipleMint()
      .call()
      .then(data => data)

    const maxSupply = await contractWeb3.methods
      .maxSupply()
      .call()
      .then(data => data)

    setDataFetch({
      price: { wei: price, bnb: web3.utils.fromWei(price) },
      currentSupply: currentSupply,
      maxSupply: maxSupply,
      maxMultipleMint: maxMultipleMint,
    })

    setIsLoading(false)
  }

  function updateNFTMint(action) {
    if (action === 'add') setNFTMintNumber(NFTMintNumber + 1)
    if (action === 'minus') {
      if (NFTMintNumber === 1) return
      setNFTMintNumber(NFTMintNumber - 1)
    }
  }

  useEffect(() => getData(), [forceReload])

  return (
    <div className="flex flex-col">
      <div className="bg-white shadow-md rounded-3xl p-4">
        <div className="flex-none lg:flex">
          <div className=" h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
            <img src="logo4.png" alt="Punk" className="mx-auto object-scale-down lg:object-cover lg:h-48 rounded-2xl" />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-xs text-black font-medium ">NFTs</div>
              <div className="text-black">
                <span className="text-3xl text-black font-medium">Mint </span>
                <button className="text-4xl text-black" onClick={() => updateNFTMint('minus')}>
                  -
                </button>
                <span className="text-4xl px-2 text-black">{NFTMintNumber}</span>
                <button className="text-4xl text-black" onClick={() => updateNFTMint('add')}>
                  +
                </button>
                {!isLoading && <span className="text-3xl text-black"> @ {NFTMintNumber == 1 ? '0.20' : numeral(dataFetch.price.bnb * NFTMintNumber).format('0[.]00')} BNB</span>}
              </div>
            </div>
            <p className="mt-3"></p>
            {/* <div className="flex py-2 text-sm text-gray-500">
              <div className="flex-1 inline-flex items-center">
                <p className="text-xl">Minted: {dataFetch.currentSupply}</p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <p className="text-xl">Total: {dataFetch.maxSupply}</p>
              </div>
            </div> */}
            <Progress color="#4F8338" completed={(dataFetch.currentSupply / dataFetch.maxSupply) * 100} />
            <div className="flex p-4 pb-2 border-t border-gray-200"></div>
            <div className="flex space-x-3 text-sm font-medium">
              <div className="flex-auto flex space-x-3">
                <Mint mintCost={dataFetch.price.wei} mintAmount={NFTMintNumber} maxMultipleMint={dataFetch.maxMultipleMint} setForceReload={() => setForceReload(Math.random())} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MintModal
