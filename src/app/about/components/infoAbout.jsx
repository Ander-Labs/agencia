
import Image from "next/image";
import Link from "next/link";

export default function InfoAbout() {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row py-20">
        <div className="w-full md:w-1/2 px-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 mr-4">
              <Image
                src="/img/Icon@.svg"
                alt="About icon"
                width={14}
                height={14}
                layout="responsive"
              />
            </div>
            <span>/ / 01 . About Us</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-300 pb-2">
            La Agencia #1 en servicios de marketing
          </h2>

          <p className="mb-4">
            Nos especializamos en consultoría estratégica, desarrollo de marca y
            diseño y desarrollo web. Nuestro equipo de expertos está comprometido
            con tu éxito y trabajará incansablemente para asegurarse de que
            alcances tus objetivos de negocio.
          </p>

          <div className="w-full md:w-1/1 px-4 mb-8 p-7">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                <Image src="/img/IconMision.svg" alt="icono mision" width={50} height={50} />
              </div>
              <h3 className="text-lg font-bold">Mision</h3>
            </div>
            <hr className="border-b border-gray-400 mb-4" />
            <p>Ayudar a las empresas a alcanzar su máximo potencial a través de estrategias de marketing efectivas y personalizadas.</p>
          </div>

          <div className="w-full md:w-1/1 px-4 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                <Image src="/img/IconMision.svg" alt="icono mision" width={50} height={50} />
              </div>
              <h3 className="text-lg font-bold">Vision</h3>
            </div>
            <hr className="border-b border-gray-400 mb-4" />
            <p>Ser la agencia líder de la región en servicios de marketing en el mediano plazo, siendo reconocida por nuestro compromiso con la excelencia y la satisfacción del cliente.</p>
          </div>

          <div className="flex justify-center content-center mt-6">
            <button className="text-white bg-cyan-700 p-3 hover:text-neutral-950 hover:bg-teal-400 cursor-pointer rounded-2xl">
              <Link href="/contacto">Ponte en contacto</Link>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center">
            <Image
              src="/img/Imageabout.svg"
              alt="About us"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
