
import Image from "next/image";
import Link from "next/link";

export default function MicroservicioDM() {

    const Microservicios = [
        {
            id: '1',
            imgUrl: '/socialMedia .png',
            title: 'Creación de contenido visual para redes sociales y sitios web',
            descipcion: 'Diseñamos y creamos contenido visual atractivo y de alta calidad para tus redes sociales y sitios web, captando la atención de tu audiencia y transmitiendo tu mensaje de manera impactante y efectiva.',
        },
        {
            id: '2',
            imgUrl: '/bullhorn.png',
            title: 'Diseño y creación de material de marketing',
            descipcion: 'Desarrollamos material de marketing creativo y personalizado, como folletos, tarjetas de presentación y catálogos, que reflejan la identidad de tu marca y ayudan a promover tus productos o servicios de manera profesional.',
        },
        {
            id: '3',
            imgUrl: '/logoDesign.png',
            title: 'Creación de logotipos y elementos de identidad visual',
            descipcion: 'Diseñamos logotipos únicos y elementos de identidad visual que representan la esencia de tu marca, transmitiendo tu personalidad y estableciendo una imagen sólida y reconocible.',
        },
        {
            id: '4',
            imgUrl: '/viral-marketing.png',
            title: 'Implementación de estrategias de gestión de marca en redes sociales',
            descipcion: 'Desarrollamos y ejecutamos estrategias de gestión de marca en redes sociales, asegurando una presencia coherente y efectiva, generando engagement con tu audiencia y fortaleciendo la percepción positiva de tu marca.',
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