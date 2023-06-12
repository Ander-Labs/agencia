import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agencia de Marketing Digital | RYU MARK',
  description: 'RYU MARK es una agencia de marketing digital especializada en estrategias de crecimiento y resultados. Impulsamos tu negocio en línea con servicios de SEO, SEM, redes sociales y más...',
  icons:{
    icon: [
      '/favicon.ico'
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
