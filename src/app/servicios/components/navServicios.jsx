'use client'



import Link from 'next/link';
import { useState } from 'react';

const NavServicios = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-red-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Servicios</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"
                    onClick={toggleMenu}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            d="M0 2.5A2.5 2.5 0 012.5 0h15A2.5 2.5 0 0120 2.5v1.25a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 010 3.75V2.5zm0 7.5A2.5 2.5 0 012.5 7h15A2.5 2.5 0 0120 9.5v1.25a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 010 10.75v-1.25zm0 7.5A2.5 2.5 0 012.5 14h15A2.5 2.5 0 0120 16.5v1.25a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 010 18.75v-1.25z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div
                className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${menuOpen ? 'block' : 'hidden'
                    }`}
            >
                <div className="text-sm lg:flex-grow justify-center items-center text-center">
                    <ul>
                        <li className="block mt-4 p-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            <Link href="/servicios">
                                Consultoría Estratégica
                            </Link>
                        </li>
                        <li className="block mt-4 p-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            <Link href="/servicios/desarrolloMarca">
                                Desarrollo de Marca
                            </Link>
                        </li>
                        <li className="block mt-4 p-2 lg:inline-block lg:mt-0 text-white hover:text-white">
                            <Link href="/servicios/desarrolloWeb">
                                Diseño y Desarrollo Web
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavServicios;
