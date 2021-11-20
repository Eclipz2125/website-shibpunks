import React, { useEffect, useState } from 'react'
import { useWeb3 } from '../../services/web3'
import { toast } from 'react-toastify'
import config from '../config'

const Mint = ({ mintCost, mintAmount, maxMultipleMint, setForceReload }) => {
  const { account, connected, web3 } = useWeb3()
  const [changeStatus, setChangeStatus] = useState('')

  async function mintToken() {
    const contractABI = require('../../services/abi.json')
    const contractWeb3 = new web3.eth.Contract(contractABI, config.address)
    if (account !== '' && connected === true) {
      setChangeStatus('running')
      try {
        await contractWeb3.methods
          .mintMultiple(mintAmount)
          .send({ from: account, value: mintCost * mintAmount })
          .then(status => {
            setChangeStatus('success')
            setForceReload()
            console.log(status)
          })
      } catch (error) {
        setChangeStatus('error')
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (changeStatus === 'running') {
      toast.info('Processing', {
        position: 'bottom-right',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    if (changeStatus === 'success') {
      toast.success('Success', {
        position: 'bottom-right',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    if (changeStatus === 'error') {
      toast.error(`Please try to mint less than ${maxMultipleMint} NFT at once. There was an issue with your transaction.`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [changeStatus])

  return (
    <>
      {connected === true ? (
        <button onClick={() => mintToken()} className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border-2 text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 cursor-pointer">
          <span className="text-red-500 text-2xl hover:text-red-500">Mint</span>
        </button>
      ) : (
        <p className="text-3xl text-yellow-500 ml-1">Connect your wallet to Mint</p>
      )}
    </>
  )
}

export default Mint
