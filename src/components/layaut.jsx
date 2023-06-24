'use client'
 
import Script from 'next/script'

import Header from './header';
import Footer from './footer';
import '../app/globals.css'
import Head from "next/head";
import Link from 'next/link';

export default function Layout({ children, title, description, image }) {
    const siteUrl = "https://www.ryumark.com";

    return (
    <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="a.validate.02" content="urZaLhrr7fvU3ZHnIpis51qHiZvagxUtfFJp" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964007773702778"
     crossorigin="anonymous"></script>

            {/* Etiquetas Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${image}`} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

    {/* Etiquetas Twitter
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />
    */}
        {/* Etiquetas adicionales */}
        <link rel="canonical" href={siteUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Agencia de marketing, marketing digital, estrategias de crecimiento, SEO, SEM, redes sociales, web, web3, web3.0, diseño, desarrollo web, finanzas, contavilidad, administracion" />


        </Head>
        <Header />
            {children}
        <Footer />
    </>
    );
}

Layout.defaultProps = {
    title: "Agencia de Marketing Digital | RYU MARK",
    description: "RYU MARK es una agencia de marketing digital especializada en estrategias de crecimiento y resultados. Impulsamos tu negocio en línea con servicios de SEO, SEM, redes sociales y más...",
    image: "/favicon.png"

};
