"use client"
import initLenis from '@/hooks/initLenis'
import ContactSection from '@/modules/ContactSection'
import NoiseBg from '@/modules/NoiseBg'
import FooterSection from '@Modules/FooterSection'
import NavbarSection from '@Modules/NavbarSection'
import React from 'react'

export default function MainLayout({children}:{children: React.ReactNode}) {
    console.log("MainLayout")
    initLenis()
  return (
    <>
        <NoiseBg/>
        <NavbarSection/>
        <div style={{height:"0vh",width:"100%",position:"relative",borderBottom:"1px solid gray"}}></div>
        <main>
            {children}
        </main>
        <ContactSection/>
        <FooterSection/>
    </>
  )
}
