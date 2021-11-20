import React, { useState, useEffect } from 'react'
import { useWeb3 } from '../../services/web3'
import { toast } from 'react-toastify'
import config from '../config'

const Claim = ({ setForceReload }) => {
  const { account, connected, web3 } = useWeb3()
  const [changeStatus, setChangeStatus] = useState('')

  async function claimReward() {
    const abi = require('../../services/abi.json')
    const contractWeb3 = new web3.eth.Contract(abi, config.address)

    if (account !== '' && connected === true) {
      setChangeStatus('running')
      try {
        await contractWeb3.methods
          .claimRewards(account)
          .send({ from: account })
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
      toast.error('There was an issue with your transaction. Please try again.', {
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
    <button onClick={() => claimReward()} className="my-2 md:mb-1 bg-white px-4 py-2 shadow-sm tracking-wider border-2 text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 cursor-pointer">
      <span className="text-red-500 text-2xl hover:text-red-500">Claim Manually</span>
    </button>
  )
}

export default Claim
