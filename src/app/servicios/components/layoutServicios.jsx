
import NavServicios from './navServicios'

import Head from "next/head";

const name = 'Ryu Mark | Agencia de Marketing'
export const siteTitle = 'Next.js Sample Website';
export default function LayoutServicios({ children }) {
    return (
        <>
            {/* <Head>
        <link rel="icon" href="/favicon.ico" />
        </Head> */}
            <div>
                <NavServicios />
            </div>
            <section>
                {children}
            </section>
        </>
    );
}