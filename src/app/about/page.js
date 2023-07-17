
// import { Metadata } from "next";
import Head from "next/head";
import Layout from "@/components/layout";
import Partners from "@/components/parnert";
import Hero from './components/heroAbout';
import InfoAbout from './components/info';
import Valores from './components/valores';
import Principios from './components/principios';
import TeamSection from './components/teamSection';


const title = {
    title: 'About',
}

export default function About() {
    return (
        <>
            <Layout>
                <Head>
                    <title>About</title>
                    <meta property="og:title" content="About" key="title" />
                </Head>
                <Hero />
                <InfoAbout />
                <Valores />
                <Principios />
                <TeamSection />
                <Partners />
            </Layout>
        </>
    );
}