"use client";

import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-[90%] py-3 backdrop-brightness-50 mx-auto left-0 right-0 my-10 rounded-full">
      <div className="container w-full mx-auto px-4 relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image src={Logo} alt="Logo" className="w-16 mr-1" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 text-white space-x-12 font-medium text-lg">
            <Link href="#home">
              <li className="hover:text-[#00ADEF] duration-300 ease-in">Home</li>
            </Link>
            <Link href="#about">
              <li className="hover:text-[#00ADEF] duration-300 ease-in">About Us</li>
            </Link>
            <Link href="#initiatives">
              <li className="hover:text-[#00ADEF] duration-300 ease-in">Projects</li>
            </Link>
            <Link href="#team">
              <li className="hover:text-[#00ADEF] duration-300 ease-in">Leadership</li>
            </Link>
            <Link href="#partner">
              <li className="hover:text-[#00ADEF] duration-300 ease-in">Contact Us</li>
            </Link>
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex justify-end">
            <button className="text-white bg-[#00ADEF] px-4 py-2 rounded-md">
              Explore The Maps
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <AiOutlineClose className="text-2xl font-bold text-white" />
              ) : (
                <CgMenu className="text-2xl font-bold text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-black bg-opacity-80 mt-6 text-white p-6 lg:hidden flex flex-col items-center gap-6 shadow-lg rounded-b-lg">
            <ul className="space-y-4 text-lg font-medium text-center">
              <Link href="#home" onClick={() => setMobileDrawerOpen(false)}>
                <li className="hover:text-[#00ADEF] duration-300 ease-in">
                  Home
                </li>
              </Link>
              <Link href="#about" onClick={() => setMobileDrawerOpen(false)}>
                <li className="hover:text-[#00ADEF] duration-300 ease-in">
                  About Us
                </li>
              </Link>
              <Link
                href="#initiatives"
                onClick={() => setMobileDrawerOpen(false)}
              >
                <li className="hover:text-[#00ADEF] duration-300 ease-in">
                  Projects
                </li>
              </Link>
              <Link href="#team" onClick={() => setMobileDrawerOpen(false)}>
                <li className="hover:text-[#00ADEF] duration-300 ease-in">
                  Leadership
                </li>
              </Link>
              <Link href="#partner" onClick={() => setMobileDrawerOpen(false)}>
                <li className="hover:text-[#00ADEF] duration-300 ease-in">
                  Contact Us
                </li>
              </Link>
            </ul>
            <button
              className="text-white bg-[#00ADEF] px-4 py-2 rounded-md"
              onClick={() => setMobileDrawerOpen(false)}
            >
              Explore The Maps
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
