
import Layout from "@/components/layout";
import Partners from "@/components/parnert";
import HerServicios from '../components/hero'
import LayoutServicios from '../components/layoutServicios'
import ContentDW from './components/contentDW'
import MicroservicioD from './components/microservicioD'
export default function DesarrolloWeb() {
    return (
        <>
            <Layout>
                <HerServicios />
                <LayoutServicios >
                    <ContentDW />
                    <MicroservicioD />
                </LayoutServicios>
                <Partners />
            </Layout>
        </>
    );
}