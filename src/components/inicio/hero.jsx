'use client'

import Link from "next/link";


export default function Hero(){

    const Content = {
            image: '/Banner_imagebanner.svg',
            title: '"Bienvenido a RYU MARK"',
            description: 'Tu socio estratégico en marketing',
            buttonUrl: '/servicios',
            buttonText: 'Consulta gratuita',
    };

      const { image, title, description, buttonUrl, buttonText } = Content;

    return(
        <>
      <div className="relative">
      <div className="hero-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-content bg-white bg-opacity-75 hover:bg-opacity-100 rounded-xl ">
          <h1 className="sm:text-lg  lg:text-4xl xl:text-5xl font-bold text-black p-3">{title}</h1>
          <p className="sm:text-sm  lg:text-xl xl:text-2xl text-black mb-4 p-2">{description}</p>
          <div className="flex justify-items-center justify-center p-2">
            <Link
              href={buttonUrl}
              className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-6 rounded mr-4"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-image {
          position: relative;
          height: 100vh;
          background-size: cover;
          background-position: center;
        }

        .hero-content {
            position: absolute;
            top: 50%;
            left: 40%;
            transform: translate(-50%, -50%);
            text-align: center;
          }
      `}</style>
    </div>
        </>
    );
}
