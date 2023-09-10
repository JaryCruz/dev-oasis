import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import Header from './components/Header'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Dev Oasis',
  description: 'Land your next job in tech as a professional developer.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
