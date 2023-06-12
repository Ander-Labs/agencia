import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
    return (
    <section className="bg-white py-20">
        <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center -mx-4">
            <div className="w-full md:w-1/1 px-4 mb-8">
            <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                06
                </div>
                <h2 className="text-4xl font-bold m-3">Nuestros planes de precios flexibles</h2>


            </div>
            </div>
        </div>

        <div className="flex flex-wrap justify-around -mx-4">

        {/*Plan 1 */}

            <div className="w-full md:w-1/4 m-2 px-4 mb-6 border-[2px] rounded-xl border-zinc-950 shadow-2xl hover:shadow-cyan-500/50  cursor-pointer">
            <div className="flex items-center mb-4 p-2">
                <Image
                src="/img/Mask groupicon1.svg"
                alt="Plan 1"
                width={50}
                height={50}
                />
                <h3 className="text-lg font-bold ml-4">Marketing Básico</h3>
            </div>
            <hr className="border-b border-gray-400 my-4" />
            <ul>
                <li>✅Email Marketing Content</li>
                <li>✅Network marketing content</li>
                <li>✅Optimizar SEO </li>
                <li className="text-red-500" >❌Consultoría Vídeo</li>
                <li className="text-red-500" >❌Marketing Publicitario</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            <Link href='/servicios' > Adquirir</Link>
            </button>
            </div>

            {/* plan 2 */}

            <div className="w-full md:w-1/4 m-2 px-4 mb-8 border-[2px] rounded-xl border-zinc-950 shadow-2xl hover:shadow-cyan-500/50  cursor-pointer">
            <div className="flex items-center mb-4 p-2">
                <Image
                src="/img/Imgicon2.svg"
                alt="Plan 1"
                width={50}
                height={50}
                />
                <h3 className="text-lg font-bold ml-4">Plan Estándar</h3>
            </div>
            <hr className="border-b border-gray-400 my-4" />
            <ul>
                <li>✅Email Marketing Content</li>
                <li>✅Network marketing content</li>
                <li>✅Optimizar SEO </li>
                <li>✅Consultoría Vídeo</li>
                <li className="text-red-500" >❌Marketing Publicitario</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            <Link href='/servicios' > Adquirir</Link>
            </button>
            </div>

            {/*Plan 3 */}

            <div className="w-full md:w-1/4 m-2 px-4 mb-8 border-[2px] rounded-xl border-zinc-950 shadow-2xl hover:shadow-cyan-500/50  cursor-pointer">
            <div className="flex items-center mb-4 p-2">
                <Image
                src="/img/Mask groupicon3.svg"
                alt="Plan 2"
                width={50}
                height={50}
                />
                <h3 className="text-lg font-bold ml-4">Paquete Premium</h3>
            </div>
            <hr className="border-b border-gray-400 my-4" />
            <ul>
                <li>✅Email Marketing Content</li>
                <li>✅Network marketing content</li>
                <li>✅Optimizar SEO </li>
                <li>✅Consultoría Vídeo</li>
                <li>✅Marketing Publicitario</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                <Link href='/servicios' > Adquirir</Link>
            </button>
            </div>
        </div>
        </div>
        <div className="sm:flex sm:mt-8 justify-center">
            <button className="text-white bg-sky-700 rounded-2xl p-3">
                <Link href='/servicios' >Elaborar Plan personalisado</Link>
            </button>
        </div>
    </section>
    );
}
