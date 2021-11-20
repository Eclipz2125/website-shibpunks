import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import Web3 from 'web3'
import config from '../config'
import { useWeb3 } from '../../services/web3'
import Change from './Change'
import { claimTokens } from './Collection'

const rejectAttr = new Set(['Reward Multiplier', 'Reward Currency'])

const Card = ({ id }) => {
  const [forceReload, setForceReload] = useState(Math.random())
  const { account, connected, web3 } = useWeb3()
  const [selectedToken, setSelectedToken] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const [NFTInfo, setNFTInfo] = useState({
    id: '',
    description: '',
    name: '',
    image: '',
    attributes: [],
  })

  const [nftRewardData, setNftRewardData] = useState({
    hasCustomClaimToken: '',
    nftCustomClaimToken: '',
    rewardToken: { name: '', image: '', link: '' },
  })

  const abi = require('../../services/abi.json')
  const contractWeb3 = new web3.eth.Contract(abi, config.address)

  async function getData() {
    await fetch(`${config.nftBaseUri}/api/meta/${id}`)
      .then(response => response.json())
      .then(data => setNFTInfo(data))
      .catch(() => {})

    const hasCustomClaimToken = await contractWeb3.methods
      .hasCustomClaimToken(id)
      .call()
      .then(data => data)

    const nftCustomClaimToken = await contractWeb3.methods
      .nftCustomClaimToken(id)
      .call()
      .then(data => data)

    let rewardToken = hasCustomClaimToken === false ? claimTokens.find(i => i.name == 'BNB') : claimTokens.find(i => i.value.toLowerCase() === nftCustomClaimToken.toLowerCase())
    if (rewardToken === undefined) {
      rewardToken = {
        name: await new web3.eth.Contract([JSON.parse(`{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}`)], userCustomClaimToken).methods
          .symbol()
          .call()
          .catch(() => {}),
        image: `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/${nftCustomClaimToken}/logo.png`,
        link: `https://poocoin.app/tokens/${nftCustomClaimToken}`,
      }
    }

    setNftRewardData({
      hasCustomClaimToken: hasCustomClaimToken,
      nftCustomClaimToken: nftCustomClaimToken,
      rewardToken: rewardToken,
    })
  }

  useEffect(() => {
    if (account) getData()
  }, [forceReload, account, selectedToken])

  return (
    <div className="mb-8 mx-2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white rounded-xl">
      <div className="rounded justify-center">
        <img className="rounded-t object-cover h-128 imageglow" src={`${NFTInfo.image}`} alt="" />
        <p className="mt-5 text-xl text-center font-heading">
          Reward Currency:
          <a className="cursor-pointer" href={nftRewardData.rewardToken.link} target="_blank" rel="noreferrer">
            <img className="h-8 px-3" src={nftRewardData.rewardToken.image} style={{ display: 'inline' }} />
            {nftRewardData.rewardToken.name}
            <i className="fa fa-external-link ml-1" style={{ fontSize: '14px', verticalAlign: 'top' }}></i>
          </a>
        </p>
        <p className="mt-2 text-xl text-center font-heading">Change NFT Reward</p>

        <div className="flex space-x-4 justify-center">
          <div style={{ width: '190px' }}>
            <Select options={claimTokens} isSearchable={true} className="my-4" getOptionValue={option => `${option['name']}`} onChange={e => setSelectedToken(e)} />
          </div>
          <Change nftId={NFTInfo.id} selectedToken={selectedToken?.value} setForceReload={() => setForceReload(Math.random())} />
        </div>

        <p className="text-black mb-2 mt-1 text-xl text-center font-heading">Reward Multiplier: {NFTInfo.attributes?.find(x => x.trait_type == 'Reward Multiplier')?.value}</p>
        <p className="text-black mt-2 text-lg text-center font-heading">
          {NFTInfo.name} ID: {NFTInfo.id}
        </p>

        <div className="px-4 my-2">
          {NFTInfo.attributes?.reduce(
            (acc, attr, i) =>
              rejectAttr.has(attr.trait_type)
                ? acc
                : [
                    ...acc,
                    <p className="capitalize text-black text-md text-center font-heading" key={`${NFTInfo}-${i}`}>
                      {attr.trait_type}: {attr.value}
                    </p>,
                  ],
            []
          )}
        </div>
        <p className="text-450 text-md text-center font-heading textglow-green">
          <a href={`https://lootex.io/assets/${config.address}/${id}`} target="_blank" rel="noreferrer">
            Trade on LOOTex.io<i className="fa fa-external-link ml-1" style={{ fontSize: '12px', verticalAlign: 'super' }}></i>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Card
