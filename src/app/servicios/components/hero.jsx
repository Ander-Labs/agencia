
'use client'

import Link from "next/link";


export default function HeroServicios() {

    const Content = {
        image: '/banner-image.svg',
        title: 'Sobre Nosotros',
    };

    const { image, title } = Content;

    return (
        <>
            <div className="relative">
                <div className="hero-image" style={{ backgroundImage: `url(${image})` }}>
                    <div className="absolute pt-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/1 text-center w-full">
                        <h2 className="text-7xl font-bold text-black mt-4">Servicios</h2>
                    </div>
                </div>
                <style jsx>{`
        .hero-image {
            position: relative;
            height: 100vh;
            background-size: cover;
            background-position: center;
        }

        .hero-content {
            position: absolute;
            top: 50%;
            left: 40%;
            transform: translate(-50%, -50%);
            text-align: center;
            }
        `}</style>
            </div>
        </>

    );
}
