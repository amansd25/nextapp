import '@/styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import Header from './header'
import Body from './body'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
<>
  <Header/>
  <Body/>
      <Outlet/>
      <Footer/>
  <Component {...pageProps} />
 </>
  )
}
