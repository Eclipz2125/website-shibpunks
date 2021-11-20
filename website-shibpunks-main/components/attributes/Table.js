import React from 'react'
import attribData from './attrs.json'
import config from '../config'

const Table = () => {
  // change this
  return <></>
  return (
    <div className="">
      <h1 className="rounded-2xl p-2 my-8 mx-auto text-center text-4xl text-yellow-500 bg-black">Rewards Multiplier</h1>
      <table className="w-full whitespace-nowrap my-4">
        <thead className="text-xs font-semibold tracking-wide text-left uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <tr className="">
            <td className="px-4 py-3">
              <span>Multiplier</span>
            </td>
            <td className="px-4 py-3">
              <span>Rarity</span>
            </td>
            <td className="px-4 py-3">
              <span>Examples</span>
            </td>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {Object.keys(attribData.multipliers).map((i, id) => (
            <tr className="text-yellow-500" key={id}>
              <td className="px-4 py-3">
                <span className="font-semibold ml-2">{i}</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm">{attribData.multipliers[i] == '?' ? '?' : attribData.multipliers[i] / 100 + '%'}</span>
              </td>
              <td className="px-4 py-3">
                <div className="flex">
                  {attribData.multiplier_imgs[i].map((img, imgId) => (
                    <a href={`${config.nftBaseUri}/${img}`} key={imgId}>
                      <img className="h-12" src={`${config.nftBaseUri}/${img}`} />
                    </a>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="rounded-2xl p-2 mx-auto text-center text-4xl text-yellow-500 bg-black">Punk Types</h1>
      <table className="w-full whitespace-nowrap my-4">
        <thead className="text-xs font-semibold tracking-wide text-left uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <tr className="">
            <td className="px-4 py-3">
              <span>Attribute</span>
            </td>
            <td className="px-4 py-3">
              <span>Rarity</span>
            </td>
            <td className="px-4 py-3">
              <span>Examples</span>
            </td>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {Object.keys(attribData.punk_types).map((i, id) => (
            <tr className="text-yellow-500" key={id}>
              <td className="px-4 py-3">
                <span className="font-semibold ml-2">{i}</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm">{attribData.punk_types[i] == '?' ? '?' : attribData.punk_types[i] / 100 + '%'}</span>
              </td>
              <td className="px-4 py-3">
                <div className="flex">
                  {attribData.imgs[i].map((img, imgId) => (
                    <a href={`${config.nftBaseUri}/${img}`} key={imgId}>
                      <img className="h-12" src={`${config.nftBaseUri}/${img}`} />
                    </a>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="rounded-2xl p-2 mx-auto text-center text-4xl text-yellow-500 bg-black">Attributes</h1>
      <table className="w-full whitespace-nowrap my-4">
        <thead className="text-xs font-semibold tracking-wide text-left uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <tr className="">
            <td className="px-4 py-3">
              <span>Attribute</span>
            </td>
            <td className="px-4 py-3">
              <span>Rarity</span>
            </td>
            <td className="px-4 py-3">
              <span>Examples</span>
            </td>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
          {Object.keys(attribData.attributes).map((i, id) => (
            <tr className="text-yellow-500" key={id}>
              <td className="px-4 py-3">
                <span className="font-semibold ml-2">{i}</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm">{attribData.attributes[i] / 100}%</span>
              </td>
              <td className="px-4 py-3">
                <div className="flex">
                  {attribData.imgs[i].map((img, imgId) => (
                    <a href={`${config.nftBaseUri}/${img}`} key={imgId}>
                      <img className="h-12" src={`${config.nftBaseUri}/${img}`} />
                    </a>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="rounded-2xl p-2 mx-auto text-center text-4xl text-yellow-500 bg-black">Attributes Counts</h1>
      <table className="w-full whitespace-nowrap my-4">
        <thead className="text-xs font-semibold tracking-wide text-left uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <tr className="">
            <td className="px-4 py-3">
              <span>Attribute</span>
            </td>
            <td className="px-4 py-3">
              <span>Rarity</span>
            </td>
            <td className="px-4 py-3">
              <span>Examples</span>
            </td>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
          {Object.keys(attribData.attributes_counts).map((i, id) => (
            <tr className="text-yellow-500" key={id}>
              <td className="px-4 py-3">
                <span className="font-semibold ml-2">{i}</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm">{attribData.attributes_counts[i] / 100}%</span>
              </td>
              <td className="px-4 py-3">
                <div className="flex">
                  {attribData.attr_imgs[i].map((img, imgId) => (
                    <a href={`${config.nftBaseUri}/${img}`} key={imgId}>
                      <img className="h-12" src={`${config.nftBaseUri}/${img}`} />
                    </a>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
