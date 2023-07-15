import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import 'react-circular-progressbar/dist/styles.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import { Suspense } from 'react'
import Loading from './loading';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pérola Corretora de Cereais',
  description: 'Pérola Corretora de Cereais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  )
}
