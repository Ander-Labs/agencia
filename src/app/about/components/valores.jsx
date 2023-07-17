

import Image from "next/image";



export default function Valores() {

    const Valores = [
        {
            id: "1",
            name: "Eficacia",
            imgUrl: "/IconEficacia.svg",
            descripcion: "Nos comprometemos a brindar soluciones de marketing efectivas y eficientes para lograr los objetivos de nuestros clientes",
        },
        {
            id: "2",
            name: "Creatividad",
            imgUrl: "/Iconcreatividad.svg",
            descripcion: "Nos apasiona la innovación y la creatividad. Buscamos siempre nuevas ideas y perspectivas para ofrecer soluciones únicas y efectivas a nuestros clientes",
        },
        {
            id: "3",
            name: "Compromiso",
            imgUrl: "/Iconcompromiso.svg",
            descripcion: "Estamos comprometidos con nuestros clientes y su éxito. Trabajamos duro para ofrecer soluciones personalizadas y efectivas para cada uno de nuestros clientes",
        },
        {
            id: "4",
            name: "Trabajo en equipo",
            imgUrl: "/Icontrabajo-equipo.svg",
            descripcion: "Creemos en el poder del trabajo en equipo y la colaboración. Valoramos y respetamos las ideas y perspectivas de cada miembro del equipo para ofrecer soluciones de marketing efectivas y personalizadas",
        },
    ];


    return (
        <div className="p-10 bg-neutral-900">
            <div className="w-full md:w-1/1 px-4 mb-8">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                        <Image src="/IconValores.svg" alt="Icon servicios" width={50} height={50} />
                    </div>
                    <h2 className="lg:text-mg mt-2 font-bold">/ / 02 VALORES</h2>
                </div>
                <h3 className="lg:text-3xl text-lg font-bold mb-2 text-center">
                    Los valores esenciales de nuestro trabajo
                </h3>
            </div>

            <div className="p-10 bg-neutral-900 grid grid-cols-1 md:grid-cols-4 gap-16">
                {Valores.map((valor) => (
                    <div key={valor.id} className="bg-neutral-900/10 text-white w-full md:w-80 mb-8 rounded-lg shadow-2xd p-4 border border-gray-300 hover:border-yellow-600 hover:shadow-2xd hover:shadow-orange-600/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-white/50">
                        <Image src={valor.imgUrl} alt={valor.title} width={500} height={500} className="w-32 h-32 mx-auto mb-4 rounded-3xl" />
                        <h2 className="text-xlfont-bold mb-2 text-center font-bold">{valor.name}</h2>
                        <p className="text-white mb-4 text-left">{valor.descripcion}</p>
                        <span className="block w-full border-b border-gray-300 my-4"></span>
                    </div>
                ))}
            </div>

        </div>
    );
}