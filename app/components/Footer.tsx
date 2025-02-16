import Image from 'next/image'
import React from 'react'
import Logo from '@/public/logo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black text-white pt-12 w-full px-4 md:px-24'>
        <div className='container mx-auto px-4 flex max-md:flex-wrap items-start md:gap-20 gap-6 w-full'>
            <div>
            <Image src={Logo} alt="logo" width={100} height={100}/>
            <p className='uppercase text-[#00ADEF]'>Crystallon</p>
            </div>            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-20">
                <div className='flex flex-col gap-3'>
                    <h1 className='text-xl text-semibold'>Support</h1>
                    <ul>
                        <Link href="mailto:crystallon@gmail.com"><li className='cursor-pointer hover:text-[#00ADEF] duration-300 ease-in'>crystallon@gmail.com</li></Link>
                        <Link href="tel:+233 54 123 4567"><li className='cursor-pointer hover:text-[#00ADEF] duration-300 ease-in'>+233 54 123 4567</li></Link>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-xl text-semibold'>Quick Links</h1>
                    <ul>
                        <Link href="/#initiatives"><li className='cursor-pointer hover:text-[#00ADEF] duration-300 ease-in'>Key Initiatives</li></Link>
                        <Link href="/#about"><li className='cursor-pointer hover:text-[#00ADEF] duration-300 ease-in'>About Us</li></Link>
                        <Link href="/#team"><li className='cursor-pointer hover:text-[#00ADEF] duration-300 ease-in'>Our Team</li></Link>
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