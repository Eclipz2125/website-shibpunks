import React, { useState, useEffect } from 'react'
import { useWeb3 } from '../../services/web3'
import { toast } from 'react-toastify'
import config from '../config'

const Change = ({ nftId, selectedToken, setForceReload }) => {
  const { account, connected, web3 } = useWeb3()
  const [changeStatus, setChangeStatus] = useState('')

  async function changeToken() {
    if (!selectedToken) return
    const abi = require('../../services/abi.json')
    const contractWeb3 = new web3.eth.Contract(abi, config.address)

    if (account && connected === true) {
      setChangeStatus('running')

      if (selectedToken === '0x0000000000000000000000000000000000000000') {
        try {
          await contractWeb3.methods
            .clearNftCustomToken(nftId)
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
      } else {
        try {
          await contractWeb3.methods
            .updateNftCustomToken(nftId, selectedToken)
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
    <button onClick={() => changeToken()} className="px-2 my-4 bg-white shadow-sm tracking-wider border-2 text-gray-600 rounded-full hover:bg-gray-100 items-center cursor-pointer">
      <span className="text-red-500 text-md hover:text-red-500">Change</span>
    </button>
  )
}

export default Change
