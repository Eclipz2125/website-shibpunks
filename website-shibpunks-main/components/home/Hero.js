import React, { useState } from 'react'
import MintModal from '../mint/MintModal'
import NFTSlideshow from './NFTSlideshow'
import ClaimContent from '../claim/ClaimContent'
import Link from 'next/link'
import Countdown from 'react-countdown'
import config from '../config'

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      {days} Day, {hours} Hours, {minutes} Minutes and {seconds} Seconds
    </span>
  )
}

const Hero = () => {
  const [forceReload, setForceReload] = useState(Math.random())

  return (
    <>
      <div className="flex justify-center text-glow">
        <div className="mt-10 mb-10">
          <a className="text-2xl text-black font-bold" href="#">
            {/* <img className="px-4" src="imgs/logo.png" alt="logo" width="1000" /> */}
          </a>
        </div>
      </div>
      <section className=" font-custom pb-8 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-2 lg:mb-16 text-center text-white">
            {/* <h2 className="mt-10 mb-6 text-4xl font-bold font-heading bg-white rounded-3xl p-4 text-red-600">
              Time until launch:{" "}
              <Countdown
                renderer={renderer}
                date={new Date(1631804400 * 1000)}
              />
              <br />
              Thursday, 16th @ 3PM UTC
            </h2> */}
            <h2 className="mb-6 text-3xl font-bold font-heading bg-black opacity-90 rounded-3xl p-4 .text-orange-500">
              <div className="text-yellow-500">
                Only 10,000 NFTs 0.20 BNB each<br></br>10% auto rewards in any token of your choice<br></br>Change your rewards for any NFT by visiting<br></br>
              </div>
              <Link href="/gallery">
                <span className="cursor-pointer text-yellow-400">
                  Your collection<i className="fa fa-external-link ml-1" style={{ fontSize: '18px', verticalAlign: 'super' }}></i>
                </span>
              </Link>
            </h2>
          </div>
          <div className="flex flex-wrap items-center py-4 -mx-5 text-white">
            <div className="relative w-full lg:w-1/2 px-10 mb-16 lg:mb-0">
              <div className="relative lg:max-w-xl lg:ml-auto z-1">
                <NFTSlideshow />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-2xl">
                <MintModal forceReload={forceReload} setForceReload={setForceReload} />
                <ClaimContent forceReload={forceReload} setForceReload={setForceReload} />
                <div className="flex justify-center mx-auto mt-4">
                  <div className="p-4 mx-4 cursor-pointer bg-white rounded-3xl">
                    <a href={config.twitter} target="_blank" rel="noreferrer">
                      <img src="twitter.svg" />
                    </a>
                  </div>
                  <div className="p-4 mx-4 cursor-pointer bg-white rounded-3xl">
                    <a href={config.telegram} target="_blank" rel="noreferrer">
                      <img src="telegram.svg" />
                    </a>
                  </div>
                  <div className="p-4 mx-4 cursor-pointer bg-white rounded-3xl">
                    <a href={config.discord} target="_blank" rel="noreferrer">
                      <img src="discord.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
