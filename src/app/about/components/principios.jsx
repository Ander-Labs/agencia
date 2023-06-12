import Image from "next/image";

export default function Principios() {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col items-center py-20">
        <div className="flex items-center mb-4">
          <div className="w-1/4 text-center">
            <Image
              src="/img/IconValores.svg"
              alt="Principles icon"
              width={14}
              height={14}
              layout="responsive"
            />
          </div>
          <span className="ml-2">/ / 03. Principios</span>
        </div>
        <h3 className="text-3xl font-bold mb-8">
          Nuestros principios esenciales de nuestro trabajo
        </h3>
        <div className="relative">
          <div className="flex flex-wrap justify-around overflow-x-auto">
            <div className="w-full sm:w-1/2 lg:w-1/3 text-center px-4 mb-8">
              <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <h4 className="text-lg font-bold mt-4 mb-2">Orientación al cliente</h4>
                <span className="block w-full border-b border-gray-300 my-4"></span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 text-center px-4 mb-8">
              <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <h4 className="text-lg font-bold mt-4 mb-2">Excelencia</h4>
                <span className="block w-full border-b border-gray-300 my-4"></span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 text-center px-4 mb-8">
              <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <h4 className="text-lg font-bold mt-4 mb-2">Responsabilidad social</h4>
                <span className="block w-full border-b border-gray-300 my-4"></span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 text-center px-4 mb-8">
              <div className="border border-gray-300 cursor-pointer hover:shadow-lg shadow-blue-950/95 hover:border-blue-900 rounded-lg p-4">
                <h4 className="text-lg font-bold mt-4 mb-2">Aprendizaje continuo</h4>
                <span className="block w-full border-b border-gray-300 my-4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
