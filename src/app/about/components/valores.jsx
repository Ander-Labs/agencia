
import Image from "next/image";

export default function Valores() {
  return (
    <div className="bg-zinc-700">
      <div className="container mx-auto flex flex-col items-center py-20">
        <div className="flex items-center mb-4">
          <div className="w-1/4 text-center">
            <Image
              src="/img/IconValores.svg"
              alt="Values icon"
              width={14}
              height={14}
              layout="responsive"
            />
          </div>
          <span className="ml-2 text-white">/ / 02  VALORES </span>
        </div>
        <h3 className="text-5xl font-bold mb-8 text-white">
          Los valores esenciales de nuestro trabajo
        </h3>
        <div className="flex flex-col md:flex-row  text-white justify-around">
          <div className="w-full md:w-1/4 m-1 text-center rounded-2xl border-[2px] border-solid border-white hover:border-indigo-500 shadow-lg hover:shadow-indigo-500/50 mb-8">
            <div className="w-1/2 mx-auto p-2">
              <Image
                src="/img/IconEficacia.svg"
                alt="Value icon"
                width={80}
                height={80}
                layout="responsive"
              />
            </div>
            <div className="m-2 p-2">
              <h4 className="text-xl font-bold mt-4 mb-2">Eficacia</h4>
              <p>
                Nos comprometemos a brindar soluciones de marketing efectivas y
                eficientes para lograr los objetivos de nuestros clientes
              </p>
              <span className="block w-full border-b border-gray-300 my-4"></span>
            </div>
          </div>

          <div className="w-full md:w-1/4 m-1 text-center rounded-2xl border-[2px] border-solid border-white hover:border-indigo-500 shadow-lg hover:shadow-indigo-500/50 mb-8">
            <div className="w-1/2 mx-auto p-2">
              <Image
                src="/img/Iconcreatividad.svg"
                alt="Value icon"
                width={80}
                height={80}
                layout="responsive"
              />
            </div>
            <div className="m-2 p-2">
              <h4 className="text-xl font-bold mt-4 mb-2">Creatividad</h4>
              <p>
                Nos apasiona la innovación y la creatividad. Buscamos siempre
                nuevas ideas y perspectivas para ofrecer soluciones únicas y
                efectivas a nuestros clientes
              </p>
              <span className="block w-full border-b border-gray-300 my-4"></span>
            </div>
          </div>

          <div className="w-full md:w-1/4 m-1 text-center rounded-2xl border-[2px] border-solid border-white hover:border-indigo-500 shadow-lg hover:shadow-indigo-500/50 mb-8">
            <div className="w-1/2 mx-auto p-2">
              <Image
                src="/img/Iconcompromiso.svg"
                alt="Value icon"
                width={80}
                height={80}
                layout="responsive"
              />
            </div>
            <div className="m-2 p-2">
              <h4 className="text-xl font-bold mt-4 mb-2">Compromiso</h4>
              <p>
                Estamos comprometidos con nuestros clientes y su éxito. Trabajamos
                duro para ofrecer soluciones personalizadas y efectivas para cada
                uno de nuestros clientes
              </p>
              <span className="block w-full border-b border-gray-300 my-4"></span>
            </div>
          </div>

          <div className="w-full md:w-1/4 m-1 text-center rounded-2xl border-[2px] border-solid border-white hover:border-indigo-500 shadow-lg hover:shadow-indigo-500/50 mb-8">
            <div className="w-1/2 mx-auto p-2">
              <Image
                src="/img/Icontrabajo equipo.svg"
                alt="Value icon"
                width={80}
                height={80}
                layout="responsive"
              />
            </div>
            <div className="m-2 p-2">
              <h4 className="text-xl font-bold mt-4 mb-2">Trabajo en equipo</h4>
              <p>
                Creemos en el poder del trabajo en equipo y la colaboración. Valoramos
                y respetamos las ideas y perspectivas de cada miembro del equipo para
                ofrecer soluciones de marketing efectivas y personalizadas
              </p>
              <span className="block w-full border-b border-gray-300 my-4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
