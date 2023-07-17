
import Layout from "@/components/layout";
import Partners from "@/components/parnert";
import HeroContact from './components/heroContact'
import ContactForm from './components/form'

export default function Contacto() {
    return (
        <Layout>
            <HeroContact />
            <ContactForm />
            <Partners />
        </Layout>
    );
}