'use client'


import Link from "next/link"
import Image from "next/image"

import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";

import { useState } from "react";
import { useRouter} from "next/navigation"
import { useEffect } from 'react'



export default function Header() {

    const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return (
        <>
        <header className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white lg:bg-neutral-950">
        <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
            <div>
                <Image src='/img/logo.png'
                alt=""
                width={40}
                height={40}
                className="rounded-full"/>
            </div>
            <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-lg font-semibold">
            <li className="navbarLi hover:bg-red-800 hover:p-4 hover:rounded-xl">
            <Link href='/'>Home</Link>
            </li>
            <li className="navbarLi  hover:bg-red-800 hover:p-4 hover:rounded-xl">
            <Link href='/about'>Sobre</Link>
            </li>
            <li className="navbarLi  hover:bg-red-800 hover:p-4 hover:rounded-xl">
            <Link href='/servicios'>Servicios</Link>
            </li>
            <li className="navbarLi  hover:bg-red-800 hover:p-4 hover:rounded-xl">
            <Link href='/portafolio'>Portafolio</Link>
            </li>
            <li className="navbarLi  hover:bg-red-800 hover:p-4 hover:rounded-xl">
            <Link href='/team'>Team</Link>
            </li>
            </ul>
            <div className="hidden lg:inline-flex gap-8 items-center">
            <div className="relative">
            <Link href='https://www.facebook.com/profile.php?id=100093479979526&mibextid=ZbWKwL' target="/"><ImFacebook2 className="text-2xl hover:text-blue-600 cursor-pointer"/></Link>
            </div>
            <div className="relative ">
            <ImTwitter className="text-2xl hover:text-blue-600 cursor-pointer"  />

            </div>
            <div className="relative">
            <ImLinkedin className="text-2xl hover:text-blue-600 cursor-pointer"  />
            </div>
            <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300 hover:bg-red-800">
            <a href='https://forms.gle/xHagDg4uyDFoYu69A' target="_blank">Contacto</a>
            </button>
          </div>
          <>
          <button className="inline-flex lg:hidden" onClick={openMenu}>
            <FiMenu  className="text-3xl"/>
            </button>
          </>
        </div>

        {menuOpen && (
          <div className="fixed top-0 right-0 w-63 h-auto bg-black text-white py-4 px-8 z-50 text-center border-spacing-14 rounded-bl-lg">
          <div className='bottom-0 right-0'>
          <button className="absolute top-2 right-2 text-white rounded-full" onClick={openMenu}>
                  <FiMenu  className="text-3xl inset-y-0 right-0"/>
              </button>
              </div>
            <ul className="flex flex-col gap-4">
              <li className=" hover:text-red-700 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className=" hover:text-red-700 cursor-pointer">
                <Link href="/about">Sobre</Link>
              </li>
              <li className=" hover:text-red-700 cursor-pointer">
                <Link href="/servicios">Servicios</Link>
              </li>
              <li className=" hover:text-red-700 cursor-pointer">
                <Link href="/portafolio">Portafolio</Link>
              </li>
              <li className=" hover:text-red-700 cursor-pointer">
                <Link href="/team">Team</Link>
              </li>
              <li className="text-black border-spacing-18 p-4 bg-white rounded-full hover:text-red-700 ">
                <a href="https://forms.gle/xHagDg4uyDFoYu69A" target="_blank">Contacto</a>
              </li>
            </ul>
          </div>
        )}
      </header>
      </>
    );
  };