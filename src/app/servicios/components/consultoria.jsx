
import Image from "next/image";

export default function Consultoria() {


    const Data = [
        {
            id: '1',
            title: 'Consultoria estrategica',
            descripcion: 'Nuestra consultoría estratégica te brinda el conocimiento y la experiencia necesarios para impulsar el éxito de tu negocio. Analizamos tus objetivos, investigamos tu mercado y te ofrecemos soluciones personalizadas para alcanzar tus metas. Te ayudamos a tomar decisiones informadas, identificar oportunidades y trazar un plan estratégico que te posicione por encima de la competencia.',
            imgURL: '/consultoria.jpg',
        }
    ]


    return (
        <div className="p-10 flex flex-col items-center md:flex-row md:items-start">
            {Data.map((dato) => (
                <div key={dato.id} className="text-black md:flex md:items-center">
                    <div className="md:w-1/2 md:order-2 md:mr-8">
                        <Image
                            src={dato.imgURL}
                            alt={dato.title}
                            layout="responsive"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2 md:order-1">
                        <h2 className="text-2xl mb-2 font-bold text-black">{dato.title}</h2>
                        <p className="text-black mb-4 text-center md:text-left">{dato.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}