
import Link from "next/link";
import Image from "next/image";

export default function TeamComponents () {
    return (
    <div className="bg-black text-white">
        <div className="container mx-auto flex flex-col items-center py-20">
        <div className="flex items-center mb-4">
        <div className="w-1/4 text-center">
            <Image
            src="/img/Iconteam.svg"
            alt="Principles icon"
            width={14}
            height={14}
            layout="responsive"
            />
            </div>
            <span className="ml-2">/ / 04. TEAM</span>
        </div>
        <div className="flex flex-wrap justify-around">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 text-center px-4 mb-8">
            <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                AR
                </div>
                <h4 className="text-lg font-bold mt-4 mb-2">Anderson Ruiz</h4>
                <span className="block w-full border-b border-blue-500 my-4"></span>
                <p>Fundador / CEO / Director de Tecnología</p>
            </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 text-center px-4 mb-8">
            <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                MQ
                </div>
                <h4 className="text-lg font-bold mt-4 mb-2">Maribel Quevedo</h4>
                <span className="block w-full border-b border-blue-500 my-4"></span>
                <p>Co-fundadora / Directora Financiera / Gerente de Atención al Cliente</p>
            </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 text-center px-4 mb-8">
            <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                JC
                </div>
                <h4 className="text-lg font-bold mt-4 mb-2">Junior Chiroque</h4>
                <span className="block w-full border-b border-blue-500 my-4"></span>
                <p>Co-fundador / Director de Marketing</p>
            </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 text-center px-4 mb-8">
            <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                JC
                </div>
                <h4 className="text-lg font-bold mt-4 mb-2">Sarai Chiroque</h4>
                <span className="block w-full border-b border-blue-500 my-4"></span>
                <p>Co-fundadora / Directora Creativa</p>
            </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 text-center px-4 mb-8">
            <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                JC
                </div>
                <h4 className="text-lg font-bold mt-4 mb-2">Carmen Castro</h4>
                <span className="block w-full border-b border-blue-500 my-4"></span>
                <p>Co-fundadora / Gerente de proyectos</p>
            </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 text-center px-4 mb-8">
            <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                JC
                </div>
                <h4 className="text-lg font-bold mt-4 mb-2">Milusca Silva</h4>
                <span className="block w-full border-b border-blue-500 my-4"></span>
                <p>Co-fundadora / Especialista en SEM</p>
            </div>
            </div>



        </div>
        </div>
    </div>
    );
}
