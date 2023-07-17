
import Layout from "@/components/layout";
import Partners from "@/components/parnert";
import HerServicios from '../components/hero';
import LayoutServicios from '../components/layoutServicios';
import Content from './components/contentDm'
import MicroServicioDM from './components/microservicioDM'


export default function DesarrolloMarca() {
    return (
        <>
            <Layout>
                <HerServicios />
                <LayoutServicios >
                    <Content />
                    <MicroServicioDM />
                </LayoutServicios>
                <Partners />
            </Layout>
        </>
    );
}