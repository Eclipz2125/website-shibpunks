import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="text-center text-yellow-500 cursor-pointer my-8">
      <Link href="/disclaimer">
        Disclaimer
      </Link>
    </div>
  )
}

export default Footer
