 
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Head from 'next/head'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Zloter',
  description: 'Online publishing platform',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
  hideNavbar?: boolean
}) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    //     <Navbar/>
    //     {children}
    //     </body>
    // </html>
    <html lang="en">
      <body className={inter.className}>
        <Provider>

        <Head>
          <title>Zloter</title>
          <meta name="description" content="Online publishing platform" />
          <meta property="og:title" content="Zloter" />
          <meta property="og:description" content="Online publishing platform" />
          <meta property="og:image" content="/path/to/your/header-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <header>
         
          
        </header>
        {children}
        </Provider>
      </body>
    </html>
  )
}
