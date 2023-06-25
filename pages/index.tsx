import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './header'
import Body from './body'
import Footer from './footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Description from './Description'
import { Children } from 'react'
import Company from './company'
import Network from './network'
import Notes from './notes'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    </main>
  )
}

// const appRouter = createBrowserRouter([

//   {
//     path:"/",
//     element:<Description/>,
//     children:[
//     {
//       path:"/",
//       element:<Description/>
//     },
//     {
//       path:"/company",
//       element:<Company/>
//     },
//     {
//       path:"/network",
//       element:<Network/>
//     },
//     {
//       path:"notes",
//       element:<Notes/>
//     }

//     ]
//   }
// ])
