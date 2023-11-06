import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
        <Providers>
        {/* Header */}
        <Header/>
        {/* Navbar */}
        {children}
        </Providers>
      </body>
    </html>
  )
}
