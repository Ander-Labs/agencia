
import Image from "next/image";

export default function Content() {


    const Data = [
        {
            id: '1',
            title: 'Desarrollo de Marca',
            descripcion: 'El desarrollo de marca es esencial para destacar en un mercado saturado. Nuestro equipo experto en branding trabaja contigo para crear una identidad única y relevante. Desde la creación de un logotipo impactante hasta la definición de la voz de tu marca, nos aseguramos de que tu imagen transmita los valores y la personalidad de tu negocio. Construimos una marca sólida que se destaque y genere conexiones significativas con tu audiencia.',
            imgURL: '/desarrollo.jpg',
        }
    ]


    return (
        <div className="p-10 flex flex-col items-center md:flex-row md:items-start">
            {Data.map((dato) => (
                <div key={dato.id} className="text-black md:flex md:items-center">
                    <div className="md:w-1/2 md:order-2 md:mr-8 ">
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