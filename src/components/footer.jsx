import Link from "next/link"


export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-20">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8 justify-center">
          <button className="text-white bg-red-600 hover:bg-red-800 rounded-2xl p-3">
            <Link href='/Contacto'>CONTACTAR</Link>
          </button>
        </div>
        <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-gray-100 uppercase mb-2">Ryu Mark</span>
            <span className="my-2"><Link href="/" className="text-gray-400 text-md hover:text-gray-100">Inicio</Link></span>
            <span className="my-2"><Link href="/about" className="text-gray-400 text-md hover:text-gray-100">Acerca de</Link></span>
            <span className="my-2"><Link href="/servicios" className="text-gray-400 text-md hover:text-gray-100">Servicios</Link></span>
            {/* <span className="my-2"><Link href="/portafolio" className="text-gray-400 text-md hover:text-gray-100">Portafolio</Link></span> */}
            <span className="my-2"><Link href="/blog" className="text-gray-400 text-md hover:text-gray-100">Blog</Link></span>
            <span className="my-2"><Link href="/team" className="text-gray-400 text-md hover:text-gray-100">Team</Link></span>
            <span className="my-2"><Link href="/" className="text-gray-400 text-md hover:text-gray-100">FAQ</Link></span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-100 uppercase mb-2">Servicios</span>
            <span className="my-2"><Link href="/servicios" className="text-gray-400 text-md hover:text-gray-100">Diseño Y Desarrollo Web</Link></span>
            <span className="my-2"><Link href="/servicios/desarrolloMarca" className="text-gray-400 text-md hover:text-gray-100">Consultoría Estratégica</Link></span>
            <span className="my-2"><Link href="/servicios/desarrolloWeb" className="text-gray-400 text-md hover:text-gray-100">Desarrollo de Marca</Link></span>

            {/* <span className="my-2"><Link href='https://www.facebook.com/profile.php?id=100093479979526&mibextid=ZbWKwL' target="/"><ImFacebook2 className="text-xl  text-white mr-4"/></Link></span>
            <span className="my-2"><ImTwitter className="text-xl text-white mr-4"  /></span>
            <span className="my-2"><ImLinkedin className="text-xl  text-white mr-4"  /></span> */}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-100 uppercase mb-2">Legal</span>
            <span className="my-2"><Link href="/politicas" className="text-gray-400 text-md hover:text-gray-100">Políticas de privacidad</Link></span>
            <span className="my-2"><Link href="/terminos" className="text-gray-400 text-md hover:text-gray-100">Términos y condiciones</Link></span>
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