import { ReactNode } from 'react'
import Navbar from './navbar'
import Footer from './footer'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}