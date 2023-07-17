
import Image from "next/image";
import Link from "next/link";

export default function MicroservicioD() {

    const Microservicios = [
        {
            id: '1',
            imgUrl: '/ui.png',
            title: 'Diseño de interfaces de usuario (UI) y experiencia de usuario (UX)',
            descipcion: 'Creamos interfaces de usuario atractivas y funcionales, centrándonos en la experiencia de usuario para garantizar que tus usuarios tengan una navegación intuitiva y satisfactoria en tu sitio web o aplicación.',
        },
        {
            id: '2',
            imgUrl: '/responsive-design.png',
            title: 'Desarrollo de sitios web responsivos',
            descipcion: 'Construimos sitios web que se adaptan y funcionan perfectamente en diferentes dispositivos, asegurando una experiencia de usuario consistente y optimizada tanto en computadoras de escritorio como en dispositivos móviles.',
        },
        {
            id: '3',
            imgUrl: '/landing-page.png',
            title: 'Creación de páginas de destino (landing pages)',
            descipcion: 'Diseñamos y desarrollamos páginas de destino y micrositios persuasivos y orientados a la conversión, optimizados para generar interés y acciones específicas por parte de los visitantes.',
        },
        {
            id: '4',
            imgUrl: '/software.png',
            title: 'Integración de sistemas de gestión de contenido (CMS)',
            descipcion: 'Configuramos e integramos sistemas de gestión de contenido (CMS) como WordPress, proporcionándote una plataforma fácil de usar y administrar para la actualización y publicación de contenido en tu sitio web.',
        },
        {
            id: '5',
            imgUrl: '/ecommerce.png',
            title: 'Desarrollo de tiendas en línea y comercio electrónico',
            descipcion: 'Creamos tiendas en línea atractivas y seguras, con una experiencia de compra intuitiva y fluida, permitiéndote expandir tus operaciones comerciales y alcanzar a clientes en todo el mundo.',
        },
        {
            id: '6',
            imgUrl: '/seo.png',
            title: 'Implementación de estrategias de optimización de motores de búsqueda (SEO)',
            descipcion: 'Aplicamos técnicas y estrategias de SEO para mejorar la visibilidad de tu sitio web en los motores de búsqueda, aumentando así el tráfico orgánico y la relevancia de tu negocio en línea.',
        },
        {
            id: '7',
            imgUrl: '/statistics.png',
            title: 'Configuración de análisis web y seguimiento de conversiones',
            descipcion: 'Implementamos herramientas de análisis web y configuramos el seguimiento de conversiones, proporcionándote datos detallados sobre el rendimiento de tu sitio web y el impacto de tus estrategias de marketing.',
        },
        {
            id: '8',
            imgUrl: '/programming.png',
            title: 'Desarrollo de aplicaciones web personalizadas',
            descipcion: 'Creamos aplicaciones web personalizadas según tus necesidades específicas, brindando soluciones innovadoras y funcionales que mejoran la interacción con tus usuarios y optimizan tus operaciones comerciales.',
        },
        {
            id: '9',
            imgUrl: '/computer.png',
            title: 'Mantenimiento y soporte web',
            descipcion: 'Proporcionamos servicios de mantenimiento y soporte técnico continuo para garantizar que tu sitio web esté actualizado, seguro y funcionando sin problemas, permitiéndote enfocarte en tu negocio principal sin preocupaciones técnicas.',
        },
    ];
    return (
        <div className="p-10 bg-neutral-900">
            <div className="w-full md:w-1/1 px-4 mb-8">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                        <Image src="/Iconicon s.svg" alt="Icon servicios" width={50} height={50} />
                    </div>
                    <h2 className="lg:text-mg mt-2 font-bold">/ / MicroServicios</h2>
                </div>
            </div>
            <div className="p-10 bg-neutral-900 grid grid-cols-1 md:grid-cols-3 gap-4">
                {Microservicios.map((servicio) => (
                    <div key={servicio.id} className="bg-neutral-900/10 text-white w-full md:w-80 mb-8 rounded-lg shadow-2xd p-4 border border-gray-300 hover:border-yellow-600 hover:shadow-2xd hover:shadow-orange-600/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-white/50">
                        <Image src={servicio.imgUrl} alt={servicio.title} width={500} height={500} className="w-32 h-32 mx-auto mb-4 rounded-3xl" />
                        <h2 className="text-xl text-white font-bold mb-2 text-center">{servicio.title}</h2>
                        <p className="text-white mb-4 text-left">{servicio.descipcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}