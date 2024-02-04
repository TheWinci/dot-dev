'use client'
import React, { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google';
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient()

function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <div className='flex flex-row h-dvh overflow-x-hidden overflow-y-hidden bg-black'>
            {children}
            <SpeedInsights />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default Layout