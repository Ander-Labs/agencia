'use client'

import Link from "next/link";
import Image from "next/image";

import { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image
                                    src="/logo Ryu Mark.png"
                                    height={40}
                                    width={40}
                                    alt="logo"
                                    className="rounded-full border-2 border-zinc-800 hover:border-red-700"

                                />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="text-gray-300 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
                                <Link href="/about" className="text-gray-300 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium">Acerca de</Link>
                                <Link href="/servicios" className="text-gray-300 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium">Servicios</Link>
                                {/* <Link href="/portafolio" className="text-gray-300 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium">Portafolio</Link> */}
                                <Link href="/blog" className="text-gray-300 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                                <Link href="/team" className="text-gray-300 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium">Team</Link>
                                <Link href="/Contacto" className="text-gray-300 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium">Contacto</Link>
                            </div>
                        </div>

                        <div className="xl:flex m-4 p-6">
                            <a href="https://www.facebook.com/profile.php?id=100093479979526&mibextid=ZbWKwL" className="text-gray-300 hover:text-white" target="_black">
                                <FacebookIcon className="h-6 w-6 hover:text-blue-800 ml-3" />
                            </a>
                            <a href="https://www.linkedin.com/company/ryu-mark/" className="text-gray-300 hover:text-blue-800 ml-3" target="_black">
                                <LinkedInIcon className="h-6 w-6" />
                            </a>
                            <a href="https://twitter.com/ryu_markk?t=FEtRWQ5L-ohkVyOF9TfKgg&s=09" className="text-gray-300 hover:text-blue-800 ml-3" target="_black">
                                <TwitterIcon className="h-6 w-6" />
                            </a>
                        </div>


                        <div className="display flex items-center ">
                            <button className="w-28 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300 hover:bg-red-800 hidden lg:block">
                                <Link href='/login' >Plataforma</Link>
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:bg-red-800 focus:text-white">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Responsive Navbar */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
                        <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Acerca de</Link>
                        <Link href="/servicios" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Servicios</Link>
                        {/* <Link href="/portafolio" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Portafolio</Link> */}
                        <Link href="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                        <Link href="/team" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</Link>
                        <Link href="/Contacto" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contacto</Link>
                    </div>
                    <div className="display flex items-center justify-center p-3">
                        <button className="w-29 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300 hover:bg-red-800 p-3 text-center">
                            <a href='#' target="_blank">Plataforma</a>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
