


import Image from "next/image";

export default function Principios() {


  const Principios = [
    {
      id: '1',
      name: 'Orientación al cliente',
    },
    {
      id: '2',
      name: 'Excelencia',
    },
    {
      id: '3',
      name: 'Responsabilidad social',
    },
    {
      id: '4',
      name: 'Aprendizaje continuo',
    },
  ];


  return (
    <div className="p-10 text-black">
      <div className="w-full md:w-1/1 px-4 mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
            <Image src="/IconValores.svg" alt="Icon servicios" width={50} height={50} />
          </div>
          <h2 className="lg:text-mg mt-2 font-bold">/ / 03. Principios</h2>
        </div>
        <h3 className="lg:text-3xl text-lg font-bold mb-2 text-center">
          Nuestros principios esenciales de nuestro trabajo
        </h3>
      </div>

      <div className="p-10  grid grid-cols-1 md:grid-cols-4 gap-16">
        {Principios.map((principio) => (
          <div key={principio.id} className=" text-black w-full md:w-80 mb-8 rounded-lg shadow-2xd p-4 border border-gray-300 hover:border-yellow-600 hover:shadow-2xd hover:bg-orange-600/90 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-gray-600/90">
            <h2 className="text-xlfont-bold mb-2 text-center font-bold">{principio.name}</h2>
            <span className="block w-full border-b border-gray-300 my-4"></span>
          </div>
        ))}
      </div>

    </div>
  );
}