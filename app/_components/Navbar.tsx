'use client'

import React from 'react'
import { useState } from 'react'
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '@/public/logo.png'
import Image from 'next/image';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (
    <nav className="fixed top-0 z-50 w-[90%] py-3 backdrop-blur-md mx-auto left-0 right-0 my-10 rounded-full">
        <div className="container w-full mx-auto px-4 relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <Image src={Logo} alt="" className='w-16 mr-1'/>
                </div>
                <ul className="hidden lg:flex ml-14 text-white space-x-12 font-medium text-lg">
                    <li className='hover:text-purple duration-300 ease-in'>Home</li>
                    <li className='hover:text-purple duration-300 ease-in'>About Us</li>
                    <li className='hover:text-purple duration-300 ease-in'>Pricing</li>
                    <li className='hover:text-purple duration-300 ease-in'>Service</li>
                    <li className='hover:text-purple duration-300 ease-in'>Our Works</li>
                </ul>
                <div className="lg:hidden md:flex md:flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <AiOutlineClose className='text-2xl font-bold' /> : <CgMenu className='text-2xl font-bold' />}

                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 w-full p-12 flex flex-col justify-center items-center lg:hidden  text-white">
                    {/* <ul className='font-semibold text-lg'>
                        <li className='hover:text-purple duration-300 ease-in py-3 text-center'>Home</li> <hr className='w-60'/>
                        <li className='hover:text-purple duration-300 ease-in py-3 text-center'>About Us</li> <hr className='w-60'/>
                        <li className='hover:text-purple duration-300 ease-in py-3 text-center'>Pricing</li> <hr className='w-60'/>
                        <li className='hover:text-purple duration-300 ease-in py-3 text-center'>Service</li> <hr className='w-60'/>
                        <li className='hover:text-purple duration-300 ease-in py-3 text-center'>Our Work</li> <hr className='w-60'/>
                    </ul> */}
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar