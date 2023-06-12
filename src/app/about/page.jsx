import Layout from "../../components/layaut"
import HeroAbout from "./components/heroAbout"
import Head from "next/head"
import InfoAbout from "./components/infoAbout"
import Valores from "./components/valores"
import Principios from "./components/principios"
import Team from "./components/team"

export default function About () {
  const title='Sobre Nosotros'

  return (
    <>
    <Head>
        <title>Sobre Nosotros | RYU MARK</title>
        <meta name="description" content="Conoce más sobre RYU MARK, una agencia de marketing digital especializada en estrategias de crecimiento y resultados en línea." />
      </Head>
    <Layout>
      <HeroAbout />
      <InfoAbout />
      <Valores />
      <Principios />
      <Team/>
    </Layout>
    </>
  )
}

{/**

promt
ayudame a crear una seccion de Planes con nextjs 13.4 y tailwindcss
contenido
una seccion con fondo blanco
un div donde contenga:
una imagen en la parte de arriba en el centro de un 14 x 14
una etiqueta Span con  / / 06 . P re c i o y p l an
un h2 con el titulo Nuestros planes de precios flexibles
cerramos div
un div que englobara a los planes:
un div que contendra:
una imagen pequeña de unos 12 x 12 al ladoizquierdo del titulo
un h3 con el titulo
una etiqueta span con el precion al costado otra etiqueta span con /Per Month un  border abajo de
luego una lista con servicios que incluye cada plan
y luego un boton que contenga /Per Month

*/}
