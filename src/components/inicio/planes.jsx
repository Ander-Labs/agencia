'use client'
import Image from "next/image";
import Link from "next/link";
export default function Planes() {

    const servicios = [
        {
            id: '1',
            title: 'Diseño de interfaces de usuario (UI) y experiencia de usuario (UX)',
        },
        {
            id: '2',
            title: 'Análisis de datos y métricas para la toma de decisiones',
        },
        {
            id: '3',
            title: 'Creación de contenido visual para redes sociales y sitios web',
        },
        {
            id: '4',
            title: 'Creación de logotipos y elementos de identidad visual',
        },
        {
            id: '5',
            title: 'Integración de sistemas de gestión de contenido (CMS)',
        },
        {
            id: '6',
            title: 'Desarrollo de tiendas en línea y comercio electrónico',
        },
        {
            id: '7',
            title: 'Implementación de estrategias de optimización de motores de búsqueda (SEO)',
        },
        {
            id: '8',
            title: 'Desarrollo de aplicaciones web personalizadas',
        },
    ];



    const Planes = [
        {
            id: '1',
            imgUrl: '/ryuBaby.webp',
            title: 'Ryu Baby',
            lista: servicios.slice(0, 4),
            butonText: 'Adquirir',
            butonURL: '/planes'
        },
        {
            id: '2',
            imgUrl: '/ryuAvance.webp',
            title: 'Ryu Avance',
            lista: servicios.slice(0, 6),
            butonText: 'Adquirir',
            butonURL: '/planes'
        },
        {
            id: '3',
            imgUrl: '/ryuElite.webp',
            title: 'Ryu Elite',
            lista: servicios,
            butonText: 'Adquirir',
            butonURL: '/planes'
        },
    ];



    return (
        <div className="p-10 bg-neutral-900">
            <div className="w-full md:w-1/1 px-4 mb-8">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                        <Image src="/icon.svg" alt="Icon servicios" width={50} height={50} />
                    </div>
                    <h2 className="lg:text-mg mt-2 font-bold">/ / Planes</h2>
                </div>
                <h3 className="lg:text-3xl text-lg font-bold mb-2 text-center">
                    Nuestros Planes.
                </h3>
                <div className='flex justify-end'>
                    <button className="bg-white text-black py-2 px-4 rounded mt-4 hover:text-white hover:bg-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <Link href="/planes">Elaborar Plan Personalizado</Link>
                    </button>
                </div>
            </div>
            <div className="p-10 bg-neutral-900 grid grid-cols-1 md:grid-cols-3 gap-4">
                {Planes.map((plan) => (
                    <div key={plan.id} className="bg-neutral-900/10 text-white w-full md:w-80 mb-8 rounded-lg shadow-2xd p-4 border border-gray-300 hover:border-yellow-600 hover:shadow-2xd hover:shadow-orange-600/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-white/50">
                        <Image src={plan.imgUrl} alt={plan.title} width={500} height={500} className="w-32 h-32 mx-auto mb-4 rounded-3xl" />
                        <h2 className="text-xl text-red-600 font-bold mb-2 text-center">{plan.title}</h2>
                        <ul className="list-disc pl-4">
                            {plan.lista.map((servicio) => (
                                <li key={servicio.id}>{servicio.title}</li>
                            ))}
                        </ul>
                        <div className="flex justify-center mt-4">
                            <a href={plan.butonURL} className="text-orange-500 font-bold hover:text-red-700">{plan.butonText}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}