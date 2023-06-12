
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiciosComponents() {
    const services = [
    {
        id: 1,
        image: "/img/Iconicon CE.svg",
        title: "Consultoría Estratégica",
        description:
        "Servicios de consultoría estratégica para llevar su negocio al siguiente nivel.",
    },
    {
        id: 2,
        image: "/img/Iconicon DM.svg",
        title: "Desarrollo de Marca",
        description:
        "Servicios de desarrollo de marca para establecer una identidad sólida.",
    },
    {
        id: 3,
        image: "/img/Iconicon web.svg",
        title: "Diseño y Desarrollo Web",
        description:
        "Servicios de diseño y desarrollo web para crear una presencia online impactante.",
    },
    ];

    return (
    <section className="bg-zinc-900 py-20 text-white">
        <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/1 px-4 mb-8">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                <Image src="/img/Iconicon s.svg" alt="Icon servicios" width={50} height={50} />
                </div>
                <h2 className="text-xl font-bold">/ / Servicios</h2>
            </div>
            <h3 className="text-lg font-bold mb-2">
                Servicios de alto impacto para llevar su negocio al siguiente nivel.
            </h3>
            <div className='flex justify-end'>
            <button className="bg-white text-black py-2 px-4 rounded mt-4 ">
                <Link href="/servicios">Nuestros Servicios</Link>
            </button>
            </div>
            </div>
            <div className="w-full md:w-1/1 px-4 mb-8">
            <div className="flex flex-wrap -mx-4 justify-around content-center">
                {services.map((service) => (
                <div key={service.id} className="w-full md:w-1/4 px-4 mb-8 m-4 border flex flex-col justify-center items-center border-gray-300 hover:border-blue-500 hover:shadow-lg rounded-lg">
                    <Image
                    src={service.image}
                    alt={service.title}
                    width={3} // Reducir el ancho de la imagen a 24
                    height={3} // Reducir la altura de la imagen a 24
                    layout="responsive"
                    className="w-[24px] h-[24px] object-scale-down"
                    />
                    <h3 className="text-lg font-bold mt-4 mb-2">{service.title}</h3>
                    <p>{service.description}</p>
                    <div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                    <Link href='/servicios' >Leer más</Link>
                    </button></div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </section>
    );
}
