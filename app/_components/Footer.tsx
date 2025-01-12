import Image from 'next/image'
import React from 'react'
import Logo from '@/public/logo.png'

const Footer = () => {
  return (
    <div className='bg-black text-white pt-12 w-full px-24'>
        <div className='container mx-auto px-4 flex items-start gap-20 w-full'>
            <Image src={Logo} alt="logo" width={100} height={100}/>
            <div className="grid grid-cols-3 gap-4 w-full mb-20">
                <div className='flex flex-col gap-3'>
                    <h1 className='text-xl text-semibold'>Support</h1>
                    <ul>
                        <li>crystallon@gmail.com</li>
                        <li>+233 54 123 4567</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-xl text-semibold'>Quick Links</h1>
                    <ul>
                        <li>Key Initiatives</li>
                        <li>About Us</li>
                        <li>Our Team</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-xl text-semibold'>Follow Us</h1>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <p className='text-center py-2 text-gray-200'>&copy; Copyright 2025. All Rights Reserved</p>
    </div>
  )
}

export default Footer