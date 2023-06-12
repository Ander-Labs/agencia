
import React from 'react';
import Image from 'next/image';

export default function HeroAbout() {
    return (
    <div className="relative h-screen">
        <div className="max-w-screen-xl mx-auto">
        <Image
            fill
            src="/img/Banner ImagebanerAbout.svg"
            alt="Hero About"
            layout="fill"
            objectFit="cover"
            sizes="(min-width: 66em) 43vw, (min-width: 44em) 50vw, 100vw"
            className="w-full h-full object-cover sm:object-contain md:object-scale-down lg:object-none"
        />
        </div>

        <div className="absolute pt-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/1 text-center w-full">
        <h2 className="text-7xl font-bold text-black mt-4">Sobre Nosotros</h2>
        </div>
    </div>
    );
}
