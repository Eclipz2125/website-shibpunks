import React, { useState, useEffect } from 'react'
import { useWeb3 } from '../../services/web3'
import Claim from './Claim'
import Web3 from 'web3'
import config from '../config'
import { format } from 'timeago.js'
import numeral from 'numeral'

const ClaimContent = ({ forceReload, setForceReload }) => {
  const { connected, account } = useWeb3()
  const [userData, setUserData] = useState({
    userBal: 0,
    userReward: { lastAmount: 0, lastTime: 0, totalAmount: 0 },
    claimableAmount: 0,
  })

  const abi = require('../../services/abi.json')
  const web3 = new Web3(new Web3.providers.HttpProvider(config.provider))
  const contractWeb3 = new web3.eth.Contract(abi, config.address)

  async function getData() {
    const userBal = await contractWeb3.methods
      .balanceOf(account)
      .call()
      .then(data => data)

    const userReward = await contractWeb3.methods
      .userReward(account)
      .call()
      .then(data => data)

    const claimableAmount = await contractWeb3.methods
      .getTotalReflectionBalance(account)
      .call()
      .then(data => data)

    setUserData({
      userBal: userBal,
      userReward: userReward,
      claimableAmount: claimableAmount,
    })
  }

  useEffect(() => {
    if (account) getData()
  }, [forceReload, account])

  return (
    <section>
      <div className="text-center text-2xl px-8 mx-8 mt-4 bg-black opacity 90 rounded-3xl p-4 text-yellow-400">
        <h2 className="text-center text-3xl text-yellow-500 font-medium">Your Auto Rewards</h2>
        {connected ? (
          userData.userBal > 0 ? (
            <p>
              Total Claimed: {numeral(Web3.utils.fromWei(userData.userReward.totalAmount)).format('0[.][0000]')} BNB
              <br />
              Last Claimed: {numeral(Web3.utils.fromWei(userData.userReward.lastAmount)).format('0[.][000000]')} BNB
              <br />
              Last Received: {userData.userReward.lastTime > 0 ? format(userData.userReward.lastTime * 1000) : '-'}
              <br />
              Claimable Amount: {numeral(Web3.utils.fromWei(userData.claimableAmount)).format('0[.][000000]')} BNB
              <br />
              <Claim setForceReload={() => setForceReload(Math.random())} />
            </p>
          ) : (
            <p>You need to own at least one NFT to be able to gain and claim rewards</p>
          )
        ) : (
          <p>Connect your wallet to view your rewards</p>
        )}
      </div>
    </section>
  )
}

export default ClaimContent
