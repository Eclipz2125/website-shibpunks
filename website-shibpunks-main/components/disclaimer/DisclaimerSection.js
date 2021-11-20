import React from 'react'

const DisclaimerSection = () => {
  return (
    <div className="max-w-6xl mx-auto mb-10 my-8">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-yellow-500 textglow-dark">Disclaimer</h2>
        </div>
      </div>
      <div className="text-yellow-500 text-3xl px-10 text-center mx-auto mb-14 bg-black rounded-3xl py-4">
        <p className="my-2">
          The contents on this site are for informational and entertainment purposes only and do not constitute financial, accounting, or legal advice. All NFT investments/collections are done at your own risk.<br></br>DYOR
        </p>
      </div>
    </div>
  )
}

export default DisclaimerSection
