'use client'

import Image from "next/image";
import Link from "next/link";
import { FaHandshake } from "react-icons/fa";




const Partners = () => {




    const partners = [
        { id: 1, name: "Ryu-Labs", logo: "/LogoRyuLabs.jpg" },
        // Agrega más partners
    ];

    return (
        <section className="bg-gray-100 py-10 text-black">
            <div className="container mx-auto">
                <div className="flex items-center justify-center mb-4">
                    <h2 className="text-3xl font-bold mr-2">Nuestro Partner</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {partners.map((partner) => (
                        <div key={partner.id} className="flex flex-col items-center justify-center">
                            <div className="rounded-full w-28 h-28 md:w-32 md:h-32 flex items-center justify-center mb-2">
                                <a href="https://ryu-labss.vercel.app/" target="_black"> <Image src={partner.logo} alt={partner.name} width={100} height={100} className="rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" /></a>
                            </div>
                            <p className="text-center font-bold">{partner.name}</p>
                        </div>
                    ))}
                </div>
                <div className="flex  justify-center">
                    <Link href="/parnert">
                        <p className="flex items-center text-white font-bold bg-red-600 p-2  rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            Convertirme en Partner
                            <FaHandshake className="ml-2" />
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Partners;
