
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <Image
              src="/Imageabout-section.svg"
              alt="About us"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8 text-black ">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                / /
              </div>
              <h2 className="text-xl font-bold">Quiénes somos</h2>
            </div>
            <h3 className="text-lg font-bold mb-2">La Agencia #1 en servicios de marketing</h3>
            <hr className="border-b border-gray-400 mb-4" />
            <p>
              En Ryu Mark, creamos soluciones de marketing digital innovadoras para ayudar a tu negocio a crecer. Trabajamos en estrecha colaboración contigo para entender tus necesidades y ofrecer soluciones personalizadas que generan resultados. ¡Contáctanos hoy para empezar a trabajar juntos!
            </p>
            <div className="flex flex-wrap -mx-4 m-10">
              <div className="w-full md:w-1/1 px-4 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl font-bold mr-4 border border-gray-400 rounded-full">
                    01
                  </div>
                  <h3 className="text-lg font-bold">Resultados garantizados</h3>
                </div>
                <hr className="border-b border-gray-400 mb-4" />
                <p>Nos comprometemos a ofrecerte resultados garantizados en todos nuestros proyectos.</p>
              </div>
              <div className="w-full md:w-1/1 px-4 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 border-b border-gray-400 rounded-tl-full rounded-tr-full">
                    02
                  </div>
                  <h3 className="text-lg font-bold">Equipo de expertos del sector</h3>
                </div>
                <hr className="border-b border-gray-400 mb-4" />
                <p>Nuestro equipo de expertos trabaja diligentemente para asegurarse de que cada proyecto se maneje con la máxima atención al detalle y excelencia para generar los mejores resultados posibles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}