import React, { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-row h-dvh overflow-x-hidden overflow-y-hidden bg-black'>
          {children}
        </div>
      </body>
    </html>
  )
}

export default Layout