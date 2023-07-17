'use client'

import { useState, useEffect } from 'react';

import Link from "next/link";
import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';

export default function ServiciosSet() {

  const MicroserviciosCE = [
    {
      id: '1',
      title: 'Definición y segmentación de clientes objetivos',
    },
    {
      id: '2',
      title: 'Análisis de datos y métricas para la toma de decisiones',
    },
    {
      id: '3',
      title: 'Optimización de procesos internos y flujos de trabajo',
    },
    {
      id: '4',
      title: 'Planificación y ejecución de campañas de marketing',
    },
    {
      id: '5',
      title: 'Asesoramiento en estrategias de marketing digital',
    },
  ];

  const MicroserviciosDM = [
    {
      id: '1',
      title: 'Creación de contenido visual para redes sociales y sitios web',
    },
    {
      id: '2',
      title: 'Diseño y creación de material de marketing',
    },
    {
      id: '3',
      title: 'Creación de logotipos y elementos de identidad visual',
    },
    {
      id: '4',
      title: 'Implementación de estrategias de gestión de marca en redes sociales',
    },
  ];

  const MicroserviciosDDW = [
    {
      id: '1',
      title: 'Diseño de interfaces de usuario (UI) y experiencia de usuario (UX)',
    },
    {
      id: '2',
      title: 'Desarrollo de sitios web responsivos',
    },
    {
      id: '3',
      title: 'Creación de páginas de destino (landing pages)',
    },
    {
      id: '4',
      title: 'Integración de sistemas de gestión de contenido (CMS)',
    },
    {
      id: '5',
      title: 'Desarrollo de tiendas en línea y comercio electrónico',
    },
    {
      id: '6',
      title: 'Implementación de estrategias de optimización de motores de búsqueda (SEO)',
    },
    {
      id: '7',
      title: 'Configuración de análisis web y seguimiento de conversiones',
    },
    {
      id: '8',
      title: 'Desarrollo de aplicaciones web personalizadas',
    },
    {
      id: '9',
      title: 'Mantenimiento y soporte web',
    },
  ];

  const Servicios = [
    {
      id: '1',
      image: '/Iconicon_CE.svg',
      title: 'Consultoría Estratégica',
      descripcion: 'Servicios de consultoría estratégica para llevar su negocio al siguiente nivel.',
      ButonUrl: '/servicios',
      ButonText: 'saber mas',
      microservicios: MicroserviciosCE,
    },
    {
      id: '2',
      image: '/Iconicon_DM.svg',
      title: 'Desarrollo de Marca',
      descripcion: 'Servicios de desarrollo de marca para establecer una identidad sólida.',
      ButonUrl: '/servicios',
      ButonText: 'saber mas',
      microservicios: MicroserviciosDM,
    },
    {
      id: '3',
      image: '/Iconicon_web.svg',
      title: 'Diseño y Desarrollo Web',
      descripcion: 'Servicios de diseño y desarrollo web para crear una presencia online impactante.',
      ButonUrl: '/servicios',
      ButonText: 'saber mas',
      microservicios: MicroserviciosDDW,
    },
  ];



  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [mostrarMicroservicios, setMostrarMicroservicios] = useState(false);
  const [microserviciosActuales, setMicroserviciosActuales] = useState([]);

  const handleMostrarMicroservicios = (servicio) => {
    if (servicio.id === servicioSeleccionado) {
      setServicioSeleccionado(null); // Si se hace clic en el mismo servicio, oculta los microservicios
      setMostrarMicroservicios(false);
    } else {
      setServicioSeleccionado(servicio.id); // Si se hace clic en un nuevo servicio, muestra sus microservicios
      setMicroserviciosActuales(servicio.microservicios);
      setMostrarMicroservicios(true);
    }
  };

  return (
    <div className="p-10 bg-neutral-900">
      <div className="w-full md:w-1/1 px-4 mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
            <Image src="/Iconicon s.svg" alt="Icon servicios" width={50} height={50} />
          </div>
          <h2 className="lg:text-mg mt-2 font-bold">/ / Servicios</h2>
        </div>
        <h3 className="lg:text-3xl text-lg font-bold mb-2 text-center">
          Servicios de alto impacto para llevar su negocio al siguiente nivel.
        </h3>
        <div className='flex justify-end'>
          <button className="bg-white text-black py-2 px-4 rounded mt-4 hover:text-white hover:bg-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link href="/servicios">Nuestros Servicios</Link>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Servicios.map((servicio, index) => (
          <div key={servicio.title} className="w-full md:w-80 mb-8 rounded-lg shadow-2xd p-4 border border-gray-300 hover:border-red-600 hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-white/50 hover:shadow-2xd hover:shadow-red-600/90"> {/* Modificación: Cambio de 'w-80' a 'w-full md:w-80' */}
            <div className="text-center mb-4">
              <Image src={servicio.image} alt={servicio.title} width={40} height={40} className="w-full h-32 mx-auto" /> {/* Modificación: Cambio de 'w-32' a 'w-full' */}
            </div>
            <h2 className="text-xl text-white font-bold mb-2 text-center">{servicio.title}</h2>
            <p className="text-white mb-4 text-left">{servicio.descripcion}</p>
            <Link href={servicio.ButonUrl} className="text-white font-bold bg-neutral-500/80 rounded-xl p-2 ml-2">
              {servicio.ButonText}
            </Link>

            <h3 className="text-lg text-black font-bold mt-4 p-3">
              <button
                className="bg-yellow-400 rounded-xl p-2 text-black hover:text-white font-bold focus:outline-none ml-5 mt-4"
                onClick={() => handleMostrarMicroservicios(servicio)}
              >
                {servicioSeleccionado === servicio.id ? 'Ocultar microservicios' : 'Ver microservicios'}
              </button>
              {servicioSeleccionado === servicio.id && (
                <Link href="#microservicios" passHref>
                  <button className="md:hidden ml-2 text-red-600 bg-white rounded-full p-2 shadow-md hover:bg-blue-100 animate-bounce">
                    <FaArrowDown />
                  </button>
                </Link>
              )}
            </h3>
          </div>
        ))}
      </div>

      {mostrarMicroservicios && (
        <div id="microservicios" className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {microserviciosActuales.map((microservicio) => (
            <div key={microservicio.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg text-black font-bold">Microservicio {microservicio.id}:</h3>
              <p className="mt-2 text-black">{microservicio.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>



  );


}