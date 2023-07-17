
import Link from "next/link";
import Image from "next/image";

export default function Team() {
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
              <p>Fundador</p>
            </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 text-center px-4 mb-8">
            <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
              <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                MQ
              </div>
              <h4 className="text-lg font-bold mt-4 mb-2">Maribel Quevedo</h4>
              <span className="block w-full border-b border-blue-500 my-4"></span>
              <p>Co-fundadora</p>
            </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 text-center px-4 mb-8">
            <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                JC
                </div>
                <h4 className="text-lg font-bold mt-4 mb-2">Junior Chiroque</h4>
                <span className="block w-full border-b border-blue-500 my-4"></span>
                <p>Co-fundador</p>
            </div>
            </div>
        </div>
        <div className="flex justify-center content-center mt-6">
            <button className="text-white bg-violet-700 p-3 hover:bg-violet-900 cursor-pointer rounded-2xl">
                <Link href="/team">Full Team</Link>
            </button>
            </div>
        </div>
    </div>
    );
}
