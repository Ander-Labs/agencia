
import Image from "next/image";

export default function ContentDW() {


    const Data = [
        {
            id: '1',
            title: 'Diseño y Desarrollo Web',
            descripcion: 'Tu presencia en línea es crucial en la era digital. Nuestro equipo de diseño y desarrollo web crea sitios web atractivos, funcionales y optimizados para brindar una experiencia excepcional a tus visitantes. Desde un diseño moderno y responsivo hasta una navegación intuitiva y características personalizadas, nos aseguramos de que tu sitio web refleje la esencia de tu marca y cumpla con tus objetivos comerciales. Impulsamos tu presencia en línea y te ayudamos a destacar en la vasta arena digital.',
            imgURL: '/ddweb.jpg',
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
                            className="w-full h-auto rounded-xl"
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