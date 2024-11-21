"use client"
import React from 'react'
import HeroSection from '@Modules/HeroSection'

import IntroSection from '@/app/modules/IntroSection'
import Advantages from '@/app/modules/Advantages'
import FactSection from '@/app/modules/FactSection'
import ListService from '@/app/modules/ListService'
import AboutusSection from '@/app/modules/AboutusSection'

export default function index() {

    return (
        <>
            <HeroSection />
            <IntroSection/>
            <Advantages/>
            <FactSection/>
            <ListService/>
            <AboutusSection/>
  {/*           <ClientSection />
            <ServiceSection/>
            <StepSection />
            <HightlightSection />
            <PriceSection />
          
            <ContactSection /> */}
        </>
    )
}
