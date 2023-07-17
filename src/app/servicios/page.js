
import Layout from "@/components/layout";
import HerServicios from './components/hero'
import LayoutServicios from './components/layoutServicios'
import Partners from "@/components/parnert";
import Consultoria from './components/consultoria'
import Microservicio from './components/microservicio'

export default function Servicios() {
    return (
        <>
            <Layout>
                <HerServicios />
                <LayoutServicios >
                </LayoutServicios>
                <Consultoria />
                <Microservicio />
                <Partners />
            </Layout>
        </>
    );
}