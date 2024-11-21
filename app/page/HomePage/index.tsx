"use client"
import React from 'react'
import HeroSection from '@Modules/HeroSection'

import IntroSection from '@/app/modules/IntroSection'
import Advantages from '@/app/modules/Advantages'
import FactSection from '@/app/modules/FactSection'
import ListService from '@/app/modules/ListService'
import AboutusSection from '@/app/modules/AboutusSection'
import HowItWorkSection from '@/app/modules/HowItWorkSection'
import NoiseBg from '@/app/modules/NoiseBg'
import ContactSection from '@/app/modules/ContactSection'

export default function index() {

    return (
        <>
            <NoiseBg/>
            <HeroSection />
            <IntroSection/>
            <Advantages/>
            <FactSection/>
            <ListService/>
            <HowItWorkSection/>
            <ContactSection/>
            <AboutusSection/>
        </>
    )
}
