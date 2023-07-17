
import Head from "next/head";

import Nav from "./nav";
import Footer from "./footer";

const name ='Ryu Mark | Agencia de Marketing'
export const siteTitle = 'Next.js Sample Website';
export default function Layout({children}) {
    return (
        <>
        {/* <Head>
        <link rel="icon" href="/favicon.ico" />
        </Head> */}
        <header>
            <Nav />
        </header>
        <section>
            {children}
        </section>
        <Footer />
        </>
    );
}