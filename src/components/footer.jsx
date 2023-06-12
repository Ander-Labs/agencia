import Link from "next/link"
import { ImLinkedin } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";



export default function Footer() {
    return (
        <footer className="bg-gray-800 py-20 mt-20">
      <div className="container mx-auto px-6">
      <div className="sm:flex sm:mt-8 justify-center">
        <button className="text-white bg-sky-700 rounded-2xl p-3">
          CONTACTAR
        </button>
      </div>
        <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
            <span className="font-bold text-gray-100 uppercase mb-2">Empresa</span>
            <span className="my-2"><Link href="/" className="text-gray-400 text-md hover:text-gray-100">Home</Link></span>
            <span className="my-2"><Link href="/about" className="text-gray-400 text-md hover:text-gray-100">Sobre</Link></span>
            <span className="my-2"><Link href="/servicios" className="text-gray-400 text-md hover:text-gray-100">Servicios</Link></span>
            <span className="my-2"><Link href="/portafolio" className="text-gray-400 text-md hover:text-gray-100">Portafolio</Link></span>
            <span className="my-2"><Link href="/team" className="text-gray-400 text-md hover:text-gray-100">Team</Link></span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-100 uppercase mb-2">Redes sociales</span>
            <span className="my-2"><Link href='https://www.facebook.com/profile.php?id=100093479979526&mibextid=ZbWKwL' target="/"><ImFacebook2 className="text-xl  text-white mr-4"/></Link></span>
            <span className="my-2"><ImTwitter className="text-xl text-white mr-4"  /></span>
            <span className="my-2"><ImLinkedin className="text-xl  text-white mr-4"  /></span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-100 uppercase mb-2">Enlaces</span>
            <span className="my-2"><Link href="/politicasPrivacidad" className="text-gray-400 text-md hover:text-gray-100">Políticas de privacidad</Link></span>
            <span className="my-2"><Link href="/terminosCondiciones" className="text-gray-400 text-md hover:text-gray-100">Términos y condiciones</Link></span>
          </div>
        </div>
        <div className="container mx-auto px-4">
    <div className="flex items-center justify-center m-7">
      <div>
        <p className="text-white">© {new Date().getFullYear()} RYU MARK. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
      </div>
    </footer>
    )
}

