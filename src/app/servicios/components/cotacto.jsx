
import Image from "next/image";

export default function ContactoServicios() {
  return (
    <div className="container mx-auto flex flex-col items-center py-20">
      <div className="relative">
        <Image
          src="/img/Backgroundservicio.svg"
          alt="Contact image"
          width={600}
          height={600}
          layout="responsive"
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              ¡Conversemos y descubramos juntos cómo hacer crecer tu empresa hoy mismo!
            </h2>
            <button className="bg-green-500 rounded-full p-4 flex items-center justify-center hover:bg-green-600">
               <a href='https://discord.gg/8J7fNSUrNJ' target="_blank" >Atencion</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
