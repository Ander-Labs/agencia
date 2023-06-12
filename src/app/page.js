
import Image from 'next/image';
import Layout from '../components/layaut';
import BotonTemas from '../components/tema';
import Link from 'next/link';
import ServiciosComponents from '../components/serviciosComponents';
import Tema from '../components/tema';
import AboutComponents from '../components/aboutComponents';
import Planes from '../components/planes';
import Benefits from '../components/beneficios';
import FaqSection from '../components/faqSection';

export default function Home() {
  return (
    <>
      <Layout>
        <div className="relative h-screen">
          <div className="max-w-screen-xl mx-auto">
            <Image
              fill
              src="/img/Banner Imagebanner.svg"
              alt="Hero background image"
              sizes="(min-width: 66em) 43vw, (min-width: 44em) 50vw, 100vw"
              className="w-full h-full object-cover sm:object-contain md:object-scale-down lg:object-none"
            />

            <div className="absolute inset-0 flex items-center justify-center text-center md:inset-auto md:top-1/2 md:left-1/3 md:-translate-x-1/2 md:-translate-y-1/2">
              <div className="p-8 md:p-12 bg-white bg-opacity-80 rounded-lg">
                <span className="text-1xl font-bold">/ / Agency</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-12">
                  Si lo puedes
                  <br />
                  imaginar, nosotros lo
                  <br />
                  podemos crear
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-12">
                  La única limitación es tu imaginación
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-black px-6 py-3 rounded-full text-sm sm:text-base">
                    <Link href='/contacto'>Get in touch</Link>
                  </button>
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base">
                    <Link href='/servicios'>Servicios</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServiciosComponents />
        <AboutComponents />
        <Tema />
        <Planes />
        <Benefits/>
        <FaqSection />
      </Layout>
    </>
  );
}
