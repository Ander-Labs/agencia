
import Image from "next/image";
import Link from "next/link";

export default function Microservicio() {

    const Microservicios = [
        {
            id: '1',
            imgUrl: '/dsco.png',
            title: 'Definición y segmentación de clientes objetivos',
            descipcion: 'Identificamos y analizamos a tu audiencia objetivo para comprender sus características demográficas, comportamientos y necesidades, permitiéndote enfocar tus esfuerzos de marketing de manera efectiva y dirigida.',
        },
        {
            id: '2',
            imgUrl: '/amtd.png',
            title: 'Análisis de datos y métricas para la toma de decisiones',
            descipcion: 'Recopilamos y analizamos datos relevantes de tu negocio, campañas y audiencia para proporcionarte información valiosa que respalde tus decisiones estratégicas, mejorando así la efectividad de tus acciones de marketing.',
        },
        {
            id: '3',
            imgUrl: '/opft.png',
            title: 'Optimización de procesos internos y flujos de trabajo',
            descipcion: 'Evaluamos tus procesos internos y flujos de trabajo relacionados con el marketing, identificando áreas de mejora y optimizando tus operaciones para aumentar la eficiencia y maximizar los resultados.',
        },
        {
            id: '4',
            imgUrl: '/marketing.png',
            title: 'Planificación y ejecución de campañas de marketing',
            descipcion: 'Creamos estrategias de campaña personalizadas, definimos los objetivos, seleccionamos las tácticas adecuadas y llevamos a cabo la implementación efectiva para alcanzar los resultados deseados en tus campañas de marketing.',
        },
        {
            id: '5',
            imgUrl: '/consultoria.png',
            title: 'Asesoramiento en estrategias de marketing digital',
            descipcion: 'Proporcionamos orientación y asesoramiento experto en la planificación y ejecución de estrategias de marketing digital, incluyendo el uso de canales en línea, tácticas de publicidad digital y optimización de la presencia en línea.',
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