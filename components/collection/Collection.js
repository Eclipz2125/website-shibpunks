import React, { useEffect, useState } from 'react'
import { useWeb3 } from '../../services/web3'
import Card from './Card'
import Web3 from 'web3'
import ClaimContent from '../claim/ClaimContent'
import config from '../config'

const claimTokens = [
  {
    name: 'BNB',
    image: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.svg',
    address: '0x0000000000000000000000000000000000000000',
    link: 'https://coinmarketcap.com/currencies/binance-coin/',
  },
  {
    name: 'BUSD',
    image: 'https://cryptologos.cc/logos/binance-usd-busd-logo.svg',
    address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    link: 'https://coinmarketcap.com/currencies/binance-usd/',
  },
  {
    name: 'BTC',
    image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg',
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    link: 'https://coinmarketcap.com/currencies/bitcoin/',
  },
  {
    name: 'ETH',
    image: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    link: 'https://coinmarketcap.com/currencies/ethereum/',
  },
  {
    name: 'DOGE',
    image: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg',
    address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    link: 'https://coinmarketcap.com/currencies/dogecoin/',
  },
  {
    name: 'ADA',
    image: 'https://cryptologos.cc/logos/cardano-ada-logo.svg',
    address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    link: 'https://coinmarketcap.com/currencies/cardano/',
  },
  {
    name: 'MATIC',
    image: 'https://cryptologos.cc/logos/polygon-matic-logo.svg',
    address: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
    link: 'https://coinmarketcap.com/currencies/polygon/',
  },
  {
    name: 'CAKE',
    image: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.svg',
    address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    link: 'https://coinmarketcap.com/currencies/pancakeswap/',
  },
  {
    name: 'DOT',
    image: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg',
    address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    link: 'https://coinmarketcap.com/currencies/polkadot-new/',
  },
  {
    name: 'LINK',
    image: 'https://cryptologos.cc/logos/chainlink-link-logo.svg',
    address: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
    link: 'https://coinmarketcap.com/currencies/chainlink/',
  },
  {
    name: 'LTC',
    image: 'https://cryptologos.cc/logos/litecoin-ltc-logo.svg',
    address: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
    link: 'https://coinmarketcap.com/currencies/litecoin/',
  },
  {
    name: 'XLM',
    image: 'https://cryptologos.cc/logos/stellar-xlm-logo.svg',
    address: '0x43C934A845205F0b514417d757d7235B8f53f1B9',
    link: 'https://coinmarketcap.com/currencies/stellar/',
  },
  {
    name: 'XRP',
    image: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg',
    address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
    link: 'https://coinmarketcap.com/currencies/xrp/',
  },
].map(token => ({
  label: (
    <div className="flex" key={token.address}>
      <img className="w-10 max-h-6 pr-5" src={token.image} />
      {token.name}
    </div>
  ),
  value: Web3.utils.toChecksumAddress(token.address),
  name: token.name,
  image: token.image,
  link: token.link,
}))

const Collection = () => {
  const [forceReload, setForceReload] = useState(Math.random())
  const { connected, account } = useWeb3()
  const [NFTData, setNFTData] = useState(new Set([]))
  const [isEmpty, setIsEmpty] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const abi = require('../../services/abi.json')
  const web3 = new Web3(new Web3.providers.HttpProvider(config.provider))
  const contractWeb3 = new web3.eth.Contract(abi, config.address)

  useEffect(() => {
    if (account !== undefined) fetchNFTs(account)
  }, [account])

  async function fetchNFTs(account) {
    setNFTData(new Set([]))
    const userBal = parseInt(await contractWeb3.methods.balanceOf(account).call())
    if (userBal > 0) {
      setIsLoading(true)
      await Promise.all([...Array(userBal).keys()].map(i => contractWeb3.methods.tokenOfOwnerByIndex(account, i).call())).then(ids => setNFTData(NFTData => new Set([...NFTData, ...ids])))
      setIsLoading(false)
    } else {
      setIsEmpty(true)
    }
  }

  return (
    <section className="pt-5 pb-2 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-2 lg:my-20 text-center text-white">
          <h3 className="font-bold text-5xl textglow my-2">My Collection</h3>
          <h3 className="mt-10 mb-6 text-4xl font-bold font-heading">{connected ? NFTData.size ? <>You have {NFTData.size} NFT</> : <>You do not have any NFT attached to this wallet</> : <>Connect your wallet to see your NFTs!</>}</h3>
        </div>
      </div>
      {connected && NFTData.size ? (
        <section>
          <div className="max-w-2xl mx-auto mb-10">
            <ClaimContent forceReload={forceReload} setForceReload={() => setForceReload(Math.random())} />
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center -mx-4 mb-4">
              {Array.from(NFTData)
                .sort((a, b) => a - b)
                .map(id => (
                  <Card id={id} key={id} />
                ))}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </section>
  )
}

export { Collection as default, claimTokens }
