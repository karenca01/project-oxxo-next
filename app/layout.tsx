import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import { HeroUIProvider } from '@heroui/react'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oxxo',
  description: 'Página web de administración de Oxxos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
    </html>
  )
}
