import Image from "next/image";

export default function Benefits() {
    return (
    <section className="bg-white py-20">
        <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
            <Image
                src="/img/Graphicsbenficios.svg"
                alt="Benefits"
                width={600}
                height={600}
            />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="flex items-center mb-4">
                <Image
                src="/img/Icon.svg"
                alt="Benefits Icon"
                width={40}
                height={40}
                />
                <span className="text-lg font-bold ml-4">07. / / Beneficios</span>
            </div>
            <h2 className="text-xl font-bold mb-4">
                Ventajas de trabajar con Ryu Mark
            </h2>
            <hr className="border-b border-gray-400 my-4" />

            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/1 px-4 mb-8">
                <div className="border rounded p-6 h-full">
                    <Image
                    src="/img/Icon (1).svg"
                    alt="Benefit 1"
                    width={50}
                    height={50}
                    />
                    <h3 className="text-lg font-bold mt-4 mb-2">
                    Page Rankings
                    </h3>
                    <hr className="border-b border-gray-400 my-2" />
                    <p>Aumenta tu visibilidad y alcanza tu público objetivo</p>
                </div>
                </div>
                <div className="w-full md:w-1/1 px-4 mb-8">
                <div className="border rounded p-6 h-full">
                    <Image
                    src="/img/Icon (2).svg"
                    alt="Benefit 2"
                    width={50}
                    height={50}
                    />
                    <h3 className="text-lg font-bold mt-4 mb-2">
                    Site Optimisation
                    </h3>
                    <hr className="border-b border-gray-400 my-2" />
                    <p>Mejora la experiencia de tus usuarios y aumenta la conversión.</p>
                </div>
                </div>
                <div className="w-full md:w-1/1 px-4 mb-8">
                <div className="border rounded p-6 h-full">
                    <Image
                    src="/img/Icon (3).svg"
                    alt="Benefit 3"
                    width={50}
                    height={50}
                    />
                    <h3 className="text-lg font-bold mt-4 mb-2">
                    Reporting & Analysis
                    </h3>
                    <hr className="border-b border-gray-400 my-2" />
                    <p>Obtén insights valiosos y toma decisiones informadas para tu negocio.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
}
