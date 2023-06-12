import Layout from "../../components/layaut"
import Hero from "./components/hero"
import ServicioSection from "./components/servicios"
import ContactoServicios from "./components/cotacto"

export default function Servicios () {
  return (
    <Layout>
    <Hero />
    <ServicioSection/>
    <ContactoServicios />
    </Layout>
  )
}
