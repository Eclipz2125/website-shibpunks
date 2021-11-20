import Web3 from 'web3'

const addr = '0xaf03879a3e5937d1a4350d0324e2d7b0a749ea78'

const config = {
  address: Web3.utils.toChecksumAddress(process.env.address || addr),
  name: '',
  symbol: '',
  telegram: '',
  twitter: '',
  nftBaseUri: 'https://api.stonedpunksnft.io',
  provider: 'https://bsc-dataseed1.defibit.io/:443', // mainnet
  //   provider: 'https://data-seed-prebsc-1-s1.binance.org:8545/', // testnet
}

export default config
