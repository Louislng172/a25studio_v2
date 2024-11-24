"use client"


import FooterSection from '@Modules/common/FooterSection'

import {  ReactNode } from 'react'
import LenisScroller from '@/components/Lenis'
import Header from '../Header'
export default function MainLayout({ children }: { children: ReactNode }) {


  return (
    <>
     
     
      <Header/>
      <main>
        <LenisScroller>
          {children}
        </LenisScroller>
      </main>

      <FooterSection/>
    </> 
  )
}
