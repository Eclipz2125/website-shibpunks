import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Connect = dynamic(() => import('../Connect'), { ssr: false })

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <section className="py-0 px-0 lg:px-0 ">
      <nav className="flex w-full lg:justify-center justify-end items-center bg-white">
        <div className="hidden lg:block mr-20">
          <ul className="flex items-center text-red space-x-10">
            <li>
              <Link href="/">
                <p className="text-black font-bold text-2xl cursor-pointer">Mint A NFT</p>
              </Link>
            </li>
            <span>
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
              </svg>
            </span>
            <li>
              <Link href="/gallery">
                <p className="text-black font-bold text-2xl cursor-pointer">My Collection</p>
              </Link>
            </li>
            <span>
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
              </svg>
            </span>
            <li>
              <Link href="/attributes">
                <p className="text-black font-bold text-2xl cursor-pointer">Attributes</p>
              </Link>
            </li>
            <span>
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
              </svg>
            </span>
            <li>
              <Link href="/faq">
                <p className="text-black font-bold text-2xl cursor-pointer">FAQ</p>
              </Link>
            </li>
            <span>
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
              </svg>
            </span>
            <li>
              <Link href="/roadmap">
                <p className="text-black font-bold text-2xl cursor-pointer">Roadmap</p>
              </Link>
            </li>
            <span>
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
              </svg>
            </span>
          </ul>
        </div>
        <div className="block">
          <Connect />
        </div>
        <div className="lg:hidden z-60">
          <button className="p-2 navbar-burger " onClick={() => setMobileMenu(!mobileMenu)}>
            <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 50 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="39" height="2" rx="1" fill="#fff"></rect>
              <rect x="19" y="11" width="20" height="2" rx="1" fill="#fff"></rect>
            </svg>
          </button>
        </div>
      </nav>
      <div className={`${mobileMenu ? 'block' : 'hidden'} navbar-menu relative z-50`}>
        <div className="navbar-backdrop fixed inset-0 bg-white"></div>
        <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-full max-w-sm py-8 bg-gray-800 overflow-y-auto">
          <div className="lg:hidden flex justify-end mb-4 -mt-4 mr-4">
            <button className="p-10 navbar-burger " onClick={() => setMobileMenu(!mobileMenu)}>
              <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="39" height="2" rx="1" fill="#fff"></rect>
                <rect x="19" y="11" width="20" height="2" rx="1" fill="#fff"></rect>
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center mb-16 pr-6">
            <a className="ml-10 text-2xl text-gray-800 font-bold" href="#">
              <img className="" src="logo4.png" alt="logo" width="auto" />
            </a>
          </div>
          <div className="flex justify-center">
            <ul>
              <li className="mb-1 px-10">
                <Link href="/">
                  <p className="text-black font-bold text-2xl cursor-pointer">Mint A NFT</p>
                </Link>
              </li>
              <li className="mb-1 px-10">
                <Link href="/gallery">
                  <p className="text-black font-bold text-2xl cursor-pointer">My Gallery</p>
                </Link>
              </li>
              <li className="mb-1 px-10">
                <Link href="/faq">
                  <p className="text-black font-bold text-2xl cursor-pointer">FAQ</p>
                </Link>
              </li>
              <li className="mb-1 px-10">
                <Link href="/attributes">
                  <p className="text-black font-bold text-2xl cursor-pointer">Attributes</p>
                </Link>
              </li>
              <li className="mb-1 px-10">
                <Link href="/roadmap">
                  <p className="text-black font-bold text-2xl cursor-pointer">Roadmap</p>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="flex justify-center px-10">
            <div className="pt-6">
              <Connect />
            </div>
          </div> */}
        </nav>
      </div>
    </section>
  )
}

export default Navbar
