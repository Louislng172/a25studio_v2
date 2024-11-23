"use client"


import FooterSection from '@Modules/common/FooterSection'

import {  ReactNode } from 'react'
import LenisScroller from '@/components/Lenis'
import Header from '../Header'
import PageLoader from '../PageLoader'
export default function MainLayout({ children }: { children: ReactNode }) {


  return (
    <>
     
     
      <Header/>
      <main>
        <LenisScroller>
          {children}
          <PageLoader/>
        </LenisScroller>
     
      </main>

      <FooterSection/>
    </> 
  )
}
