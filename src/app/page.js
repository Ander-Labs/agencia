
import Image from 'next/image'
import Layout from '@/components/layout'
import Partners from '@/components/parnert'
import HeroCarousel from '@/components/inicio/hero'
import ServiciosSet from '@/components/inicio/servicios'
import AboutSection from '@/components/inicio/aboutSection'
import Metodologia from '@/components/inicio/metodologia'
import Planes from '@/components/inicio/planes'
import Benefits from '@/components/inicio/beneficios'
import FaqSection from '@/components/inicio/faq'


export default function Home() {
  return (
    <Layout>
      <HeroCarousel />
      <ServiciosSet />
      <AboutSection />
      <Metodologia />
      <Planes />
      <Benefits />
      <FaqSection />
      <Partners />
    </Layout>
  )
}
