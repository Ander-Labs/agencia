import './globals.css'
import { Inter } from 'next/font/google'

import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | RYU MARK | Agencia de marketing',
    default: 'RYU MARK | Agencia de Marketing',
  },
  description: 'RYU MARK es una agencia de marketing digital especializada en estrategias de crecimiento y resultados. Impulsamos tu negocio en línea con servicios de SEO, SEM, redes sociales y más...',
  icons: {
    icon: [
      '/icon.ico'
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
